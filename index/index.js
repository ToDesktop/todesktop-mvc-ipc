import { nativeWindow, views, webContents } from "@todesktop/client-core";
import { publish, subscribe } from "@todesktop/client-ipc";

const workspaces = [];
let selectedWorkspace = null;
let asideMainWin;
let spotlightWin;

const ROOT =
  process.env.NODE_ENV === "production"
    ? "https://todesktop.github.io/todesktop-mvc-ipc"
    : "http://localhost:8080";

const background = async () => {
  asideMainWin = await nativeWindow.create({
    width: 750,
    height: 480,
    frame: false,
    vibrancy: "under-window",
    transparent: true,
    titleBarStyle: "hiddenInset",
    trafficLightPosition: { x: 12, y: 15 },
  });

  spotlightWin = await nativeWindow.create({
    width: 400,
    height: 160,
  });

  await createWindowView("addBrowserView", asideMainWin, {
    x: 0,
    y: 0,
    w: 0.3,
    h: 1,
    url: `${ROOT}/aside.html`,
  });

  window.addEventListener("unload", async () => {
    await Promise.all([
      nativeWindow.destroy({ ref: asideMainWin }),
      nativeWindow.destroy({ ref: spotlightWin }),
    ]);
  });
};

const createWindowView = async (action, win, args) => {
  const { x, y, w, h, url, partition } = args;

  const view = await views.create({ webPreferences: { partition } });
  await loadViewURL(win, view, { url, action });
  await setViewBounds(win, view, { x, y, w, h });

  return view;
};

const loadViewURL = async (win, view, { url, action }) => {
  if (action === "addBrowserView") {
    await nativeWindow.addBrowserView({ ref: win, viewRef: view });
  } else {
    await nativeWindow.setBrowserView({ ref: win, viewRef: view });
  }

  const viewContents = await views.getWebContents({ ref: view });
  await webContents.loadURL({ ref: viewContents }, url);
};

const setViewBounds = async (win, view, { x, y, w, h }) => {
  const [currWidth, currHeight] = await nativeWindow.getSize({ ref: win });

  await views.setBounds({
    ref: view,
    bounds: {
      x: Math.round(currWidth * x),
      y: Math.round(currHeight * y),
      width: Math.round(currWidth * w),
      height: Math.round(currHeight * h),
    },
  });

  await views.setAutoResize({
    ref: view,
    dimensions: {
      width: true,
      height: true,
      horizontal: true,
      vertical: true,
    },
  });
};

subscribe("workspace:created", async ({ title }) => {
  if (!workspaces.find((view) => view.title === title)) {
    workspaces.push({ title });
    publish("workspace:synced", { title });
  }
});

subscribe("workspace:selected", async ({ title }) => {
  if (workspaces.some((v) => v.title === title)) {
    await createWindowView("setBrowserView", spotlightWin, {
      x: 0,
      y: 0,
      w: 1,
      h: 1,
      url: `${ROOT}/spotlight.html`,
      partition: `memory:${title}`,
    });

    await nativeWindow.setTitle({ ref: spotlightWin, title });
    if (selectedWorkspace) {
      await nativeWindow.removeBrowserView({
        ref: asideMainWin,
        viewRef: selectedWorkspace,
      });
    }

    selectedWorkspace = await createWindowView("addBrowserView", asideMainWin, {
      x: 0.3,
      y: 0,
      w: 0.7,
      h: 1,
      url: `${ROOT}/main.html`,
      partition: `persist:${title}`,
    });
  }
});

background();

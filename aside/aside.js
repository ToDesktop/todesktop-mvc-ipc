import "./aside.css";
import { subscribe, publish } from "@todesktop/client-ipc";

let selectedWorkspaceTitle = null;
let workspaces = {};

function render() {
  // 1. get root element of render tree and clear its contents
  const root = document.getElementById("workspacesList");
  root.innerHTML = "";

  // 2. iterate over each workspace, destructuring their needed properties
  Object.values(workspaces).forEach(({ title, active }) => {
    // 3. create the workspace item, giving the selected one a class of active
    const item = document.createElement("li");
    item.classList.add("item");
    if (title === selectedWorkspaceTitle) {
      item.classList.add("active");
    }

    // 4. create a label element with the title of the workspace
    const label = document.createElement("p");
    label.textContent = title;
    item.appendChild(label);

    // 5. create a status element  for keeping track of active todos
    const status = document.createElement("p");
    status.textContent = active || 0;
    item.appendChild(status);

    // 6. attach item to the root node and add a handler to update the selected workspace
    root.appendChild(item);
    item.addEventListener("click", () => {
      selectedWorkspaceTitle = title;
      publish("workspace:selected", { title });
    });
  });
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("input");
  if (input.value) {
    createWorkspace({ title: input.value });
    input.value = "";
  }
});

const createWorkspace = (workspace) => {
  publish("workspace:created", workspace);
  workspaces[workspace.title] = workspace;
  render();
};

const statusUnsubscribe = subscribe("workspace:status", async (status) => {
  const activeWorkspace = workspaces[selectedWorkspaceTitle];
  if (activeWorkspace) {
    workspaces[selectedWorkspaceTitle] = { ...activeWorkspace, ...status };
  }

  render();
});

window.addEventListener("unload", () => statusUnsubscribe());

setInterval(
  () => localStorage.setItem("workspaces", JSON.stringify(workspaces)),
  5000
);
const savedWorkspaces = localStorage.getItem("workspaces");
if (savedWorkspaces) workspaces = JSON.parse(savedWorkspaces);
const workspacesToHydrate = Object.values(workspaces);

if (workspacesToHydrate.length) {
  for (const workspace of workspacesToHydrate) {
    createWorkspace(workspace);
  }
} else {
  createWorkspace({ title: "General" });
}

const selectedWorkspace = Object.values(workspaces).find(Boolean);
selectedWorkspaceTitle = selectedWorkspace.title;
publish("workspace:selected", selectedWorkspace);

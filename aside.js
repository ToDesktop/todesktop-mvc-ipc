(()=>{"use strict";var n={250:function(n,e){var t=this&&this.__awaiter||function(n,e,t,r){return new(t||(t=Promise))((function(o,i){function a(n){try{c(r.next(n))}catch(n){i(n)}}function s(n){try{c(r.throw(n))}catch(n){i(n)}}function c(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.identify=e.subscribe=e.publish=void 0,e.publish=(n,e)=>{window.todesktop.ipc.publish(n,e)},e.subscribe=(n,e)=>window.todesktop.ipc.subscribe(n,e),e.identify=()=>t(void 0,void 0,void 0,(function*(){return window.todesktop.ipc.identify()}))},644:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,'body {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n}\n\n.titlebar {\n  height: 24px;\n  -webkit-app-region: drag;\n}\n\n.sidebar {\n  background: rgba(255, 255, 255, 0.2);\n  width: 100%;\n  height: 100vh;\n}\n\n.body {\n  padding: 8px 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: "Gotham Pro", "Proxima Nova", Arial, serif;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.item div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\np {\n  margin-bottom: 0;\n}\n\n.active {\n  color: #3b82f6;\n}\n\nform {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n}\n\nbutton {\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);\n  line-height: 1.5715;\n  border: 0;\n  position: relative;\n  display: inline-block;\n  white-space: nowrap;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  padding: 4px 8px;\n  font-size: 16px;\n  border-radius: 4px;\n  outline: none;\n  color: white;\n  background: #007aff;\n}\n\ninput {\n  background: transparent;\n  width: 100%;\n  margin-right: 16px;\n\n\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.7);\n  transition: all 100ms ease-in-out;\n  border-radius: 4px;\n\n  outline: none;\n  border: 0px;\n  border-bottom: 1px solid grey;\n}\n\ninput::placeholder {\n  color: rgba(255, 255, 255, 0.3);\n}\n',""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],u=i[l]||0,p="".concat(l," ").concat(u);i[l]=u+1;var d=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var v=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:v,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),l=0;l<i.length;l++){var u=t(i[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),l=t(216),u=t.n(l),p=t(589),d=t.n(p),f=t(644),v={};v.styleTagTransform=d(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var h=t(250);let m=null,b={};function y(){const n=document.getElementById("workspacesList");n.innerHTML="",Object.values(b).forEach((({title:e,active:t})=>{const r=document.createElement("li");r.classList.add("item"),e===m&&r.classList.add("active");const o=document.createElement("p");o.textContent=e,r.appendChild(o);const i=document.createElement("p");i.textContent=t||0,r.appendChild(i),n.appendChild(r),r.addEventListener("click",(()=>{m=e,(0,h.publish)("workspace:selected",{title:e})}))}))}document.querySelector("form").addEventListener("submit",(n=>{n.preventDefault();const e=document.querySelector("input");e.value&&(g({title:e.value}),e.value="")}));const g=n=>{(0,h.publish)("workspace:created",n),b[n.title]=n,y()},x=(0,h.subscribe)("workspace:status",(async n=>{const e=b[m];e&&(b[m]={...e,...n}),y()}));window.addEventListener("unload",(()=>x())),setInterval((()=>localStorage.setItem("workspaces",JSON.stringify(b))),5e3);const w=localStorage.getItem("workspaces");w&&(b=JSON.parse(w));const k=Object.values(b);if(k.length)for(const n of k)g(n);else g({title:"General"});const E=Object.values(b).find(Boolean);m=E.title,(0,h.publish)("workspace:selected",E)})()})();
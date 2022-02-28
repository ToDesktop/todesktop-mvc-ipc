(()=>{var t={250:function(t,n){"use strict";var e=this&&this.__awaiter||function(t,n,e,o){return new(e||(e=Promise))((function(i,r){function a(t){try{l(o.next(t))}catch(t){r(t)}}function s(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}l((o=o.apply(t,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.identify=n.subscribe=n.publish=void 0,n.publish=(t,n)=>{window.todesktop.ipc.publish(t,n)},n.subscribe=(t,n)=>window.todesktop.ipc.subscribe(t,n),n.identify=()=>e(void 0,void 0,void 0,(function*(){return window.todesktop.ipc.identify()}))},994:(t,n,e)=>{"use strict";e.d(n,{Z:()=>g});var o=e(81),i=e.n(o),r=e(645),a=e.n(r),s=e(667),l=e.n(s),d=new URL(e(808),e.b),c=new URL(e(36),e.b),p=a()(i()),u=l()(d),h=l()(c);p.push([t.id,"@charset \"utf-8\";\n\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\tappearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #111111;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 300;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 400;\n\tcolor: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 400;\n\tcolor: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 400;\n\tcolor: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -140px;\n\twidth: 100%;\n\tfont-size: 80px;\n\tfont-weight: 200;\n\ttext-align: center;\n\tcolor: #b83f45;\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\theight: 65px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.toggle-all {\n\twidth: 1px;\n\theight: 1px;\n\tborder: none; /* Mobile Safari */\n\topacity: 0;\n\tposition: absolute;\n\tright: 100%;\n\tbottom: 100%;\n}\n\n.toggle-all + label {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 45px;\n\theight: 65px;\n\tfont-size: 0;\n\tposition: absolute;\n\ttop: -65px;\n\tleft: -0;\n}\n\n.toggle-all + label:before {\n\tcontent: '❯';\n\tdisplay: inline-block;\n\tfont-size: 22px;\n\tcolor: #949494;\n\tpadding: 10px 27px 10px 27px;\n\t-webkit-transform: rotate(90deg);\n\ttransform: rotate(90deg);\n}\n\n.toggle-all:checked + label:before {\n\tcolor: #484848;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: calc(100% - 43px);\n\tpadding: 12px 16px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\tappearance: none;\n}\n\n.todo-list li .toggle {\n\topacity: 0;\n}\n\n.todo-list li .toggle + label {\n\t/*\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n\t*/\n\tbackground-image: url("+u+");\n\tbackground-repeat: no-repeat;\n\tbackground-position: center left;\n}\n\n.todo-list li .toggle:checked + label {\n\tbackground-image: url("+h+");\n}\n\n.todo-list li label {\n\tword-break: break-all;\n\tpadding: 15px 15px 15px 60px;\n\tdisplay: block;\n\tline-height: 1.2;\n\ttransition: color 0.4s;\n\tfont-weight: 400;\n\tcolor: #484848;\n}\n\n.todo-list li.completed label {\n\tcolor: #949494;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #949494;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover,\n.todo-list li .destroy:focus {\n\tcolor: #C18585;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '×';\n\tdisplay: block;\n\theight: 100%;\n\tline-height: 1.1;\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tfont-size: 15px;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a:hover {\n\tborder-color: #DB7676;\n}\n\n.filters li a.selected {\n\tborder-color: #CE4646;\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 19px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #4d4d4d;\n\tfont-size: 11px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n\n:focus,\n.toggle:focus + label,\n.toggle-all:focus + label {\n\tbox-shadow: 0 0 2px 2px #CF7D7D;\n\toutline: 0;\n}\n",""]);const g=p},590:(t,n,e)=>{"use strict";e.d(n,{Z:()=>s});var o=e(81),i=e.n(o),r=e(645),a=e.n(r)()(i());a.push([t.id,"hr {\n\tmargin: 20px 0;\n\tborder: 0;\n\tborder-top: 1px dashed #c5c5c5;\n\tborder-bottom: 1px dashed #f7f7f7;\n}\n\n.learn a {\n\tfont-weight: normal;\n\ttext-decoration: none;\n\tcolor: #b83f45;\n}\n\n.learn a:hover {\n\ttext-decoration: underline;\n\tcolor: #787e7e;\n}\n\n.learn h3,\n.learn h4,\n.learn h5 {\n\tmargin: 10px 0;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tcolor: #000;\n}\n\n.learn h3 {\n\tfont-size: 24px;\n}\n\n.learn h4 {\n\tfont-size: 18px;\n}\n\n.learn h5 {\n\tmargin-bottom: 0;\n\tfont-size: 14px;\n}\n\n.learn ul {\n\tpadding: 0;\n\tmargin: 0 0 30px 25px;\n}\n\n.learn li {\n\tline-height: 20px;\n}\n\n.learn p {\n\tfont-size: 15px;\n\tfont-weight: 300;\n\tline-height: 1.3;\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n}\n\n#issue-count {\n\tdisplay: none;\n}\n\n.quote {\n\tborder: none;\n\tmargin: 20px 0 60px 0;\n}\n\n.quote p {\n\tfont-style: italic;\n}\n\n.quote p:before {\n\tcontent: '“';\n\tfont-size: 50px;\n\topacity: .15;\n\tposition: absolute;\n\ttop: -20px;\n\tleft: 3px;\n}\n\n.quote p:after {\n\tcontent: '”';\n\tfont-size: 50px;\n\topacity: .15;\n\tposition: absolute;\n\tbottom: -42px;\n\tright: 3px;\n}\n\n.quote footer {\n\tposition: absolute;\n\tbottom: -40px;\n\tright: 0;\n}\n\n.quote footer img {\n\tborder-radius: 3px;\n}\n\n.quote footer a {\n\tmargin-left: 5px;\n\tvertical-align: middle;\n}\n\n.speech-bubble {\n\tposition: relative;\n\tpadding: 10px;\n\tbackground: rgba(0, 0, 0, .04);\n\tborder-radius: 5px;\n}\n\n.speech-bubble:after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 100%;\n\tright: 30px;\n\tborder: 13px solid transparent;\n\tborder-top-color: rgba(0, 0, 0, .04);\n}\n\n.learn-bar > .learn {\n\tposition: absolute;\n\twidth: 272px;\n\ttop: 8px;\n\tleft: -300px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: rgba(255, 255, 255, .6);\n\ttransition-property: left;\n\ttransition-duration: 500ms;\n}\n\n@media (min-width: 899px) {\n\t.learn-bar {\n\t\twidth: auto;\n\t\tpadding-left: 300px;\n\t}\n\n\t.learn-bar > .learn {\n\t\tleft: 8px;\n\t}\n}\n",""]);const s=a},676:(t,n,e)=>{"use strict";e.d(n,{Z:()=>s});var o=e(81),i=e.n(o),r=e(645),a=e.n(r)()(i());a.push([t.id,"html {\n  min-height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nbody {\n  width: 100%;\n}\n\ninput.new-todo {\n  text-align: center;\n  padding: 16px;\n  margin-bottom: 16px;\n  box-shadow: none;\n}\n\nfooter,\nh1 {\n  display: none;\n}\n\n.todoapp {\n  margin: 16px;\n  box-shadow: none;\n  background: transparent;\n}\n\n.todo-list,\nsection.main {\n  display: none !important;\n}\n\n.view {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n",""]);const s=a},645:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,o,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);o&&a[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),n.push(c))}},n}},667:t=>{"use strict";t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var n=[];function e(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function o(t,o){for(var r={},a=[],s=0;s<t.length;s++){var l=t[s],d=o.base?l[0]+o.base:l[0],c=r[d]||0,p="".concat(d," ").concat(c);r[d]=c+1;var u=e(p),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var g=i(h,o);o.byIndex=s,n.splice(s,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function i(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,i){var r=o(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var s=e(r[a]);n[s].references--}for(var l=o(t,i),d=0;d<r.length;d++){var c=e(r[d]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}r=l}}},569:t=>{"use strict";var n={};t.exports=function(t,e){var o=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{"use strict";t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,i&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},234:()=>{!function(){"use strict";var t,n,e,o,i,r=function(t){t.defaults=function(t){if(!t)return t;for(var n=1,e=arguments.length;n<e;n++){var o=arguments[n];if(o)for(var i in o)null==t[i]&&(t[i]=o[i])}return t},t.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var n=/(.)^/,e={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},o=/\\|'|\r|\n|\t|\u2028|\u2029/g;return t.template=function(i,r,a){var s;a=t.defaults({},a,t.templateSettings);var l=new RegExp([(a.escape||n).source,(a.interpolate||n).source,(a.evaluate||n).source].join("|")+"|$","g"),d=0,c="__p+='";i.replace(l,(function(t,n,r,a,s){return c+=i.slice(d,s).replace(o,(function(t){return"\\"+e[t]})),n&&(c+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(c+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),a&&(c+="';\n"+a+"\n__p+='"),d=s+t.length,t})),c+="';\n",a.variable||(c="with(obj||{}){\n"+c+"}\n"),c="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+c+"return __p;\n";try{s=new Function(a.variable||"obj","_",c)}catch(t){throw t.source=c,t}if(r)return s(r,t);var p=function(n){return s.call(this,n,t)};return p.source="function("+(a.variable||"obj")+"){\n"+c+"}",p},t}({});function a(){var t=location.href.indexOf("examples/");return location.href.substr(0,t)}function s(t,n){if(!(this instanceof s))return new s(t,n);var e,o;if("object"!=typeof t)try{t=JSON.parse(t)}catch(t){return}n&&(e=n.template,o=n.framework),!e&&t.templates&&(e=t.templates.todomvc),!o&&document.querySelector("[data-framework]")&&(o=document.querySelector("[data-framework]").dataset.framework),this.template=e,t.backend?(this.frameworkJSON=t.backend,this.frameworkJSON.issueLabel=o,this.append({backend:!0})):t[o]&&(this.frameworkJSON=t[o],this.frameworkJSON.issueLabel=o,this.append()),this.fetchIssueCount()}"todomvc.com"===location.hostname&&(t=window,n=document,e="script","ga",t.GoogleAnalyticsObject="ga",t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,o=n.createElement(e),i=n.getElementsByTagName(e)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",i.parentNode.insertBefore(o,i),ga("create","UA-31081062-1","auto"),ga("send","pageview")),s.prototype.append=function(t){var n=document.createElement("aside");if(n.innerHTML=r.template(this.template,this.frameworkJSON),n.className="learn",t&&t.backend){var e=n.querySelector(".source-links"),o=e.firstElementChild,i=e.lastElementChild,s=i.getAttribute("href");i.setAttribute("href",s.substr(s.lastIndexOf("http"))),e.innerHTML=o.outerHTML+i.outerHTML}else{var l=n.querySelectorAll(".demo-link");Array.prototype.forEach.call(l,(function(t){"http"!==t.getAttribute("href").substr(0,4)&&t.setAttribute("href",a()+t.getAttribute("href"))}))}document.body.className=(document.body.className+" learn-bar").trim(),document.body.insertAdjacentHTML("afterBegin",n.outerHTML)},s.prototype.fetchIssueCount=function(){var t=document.getElementById("issue-count-link");if(t){var n=t.href.replace("https://github.com","https://api.github.com/repos"),e=new XMLHttpRequest;e.open("GET",n,!0),e.onload=function(n){var e=JSON.parse(n.target.responseText);if(e instanceof Array){var o=e.length;0!==o&&(t.innerHTML="This app has "+o+" open issues",document.getElementById("issue-count").style.display="inline")}},e.send()}},"tastejs.github.io"===location.hostname&&(location.href=location.href.replace("tastejs.github.io/todomvc","todomvc.com")),function(t,n){if(!location.host)return console.info("Miss the info bar? Run TodoMVC from a server to avoid a cross-origin error.");var e=new XMLHttpRequest;e.open("GET",a()+"learn.json",!0),e.send(),e.onload=function(){200===e.status&&n&&n(e.responseText)}}(0,s)}()},36:t=>{"use strict";t.exports="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E"},808:t=>{"use strict";t.exports="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E"}},n={};function e(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={id:o,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.exports}e.m=t,e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.b=document.baseURI||self.location.href,(()=>{"use strict";e(234);var t=e(379),n=e.n(t),o=e(795),i=e.n(o),r=e(569),a=e.n(r),s=e(565),l=e.n(s),d=e(216),c=e.n(d),p=e(589),u=e.n(p),h=e(590),g={};g.styleTagTransform=u(),g.setAttributes=l(),g.insert=a().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=c(),n()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var f=e(994),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=c(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var b=e(676),x={};x.styleTagTransform=u(),x.setAttributes=l(),x.insert=a().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=c(),n()(b.Z,x),b.Z&&b.Z.locals&&b.Z.locals;var v=e(250);const w={};function y(t,n){return(n||document).querySelector(t)}function k(t,n,e,o){t.addEventListener(n,e,!!o)}function C(t,n,e,o,i){k(t,e,(e=>{const i=e.target,r=t.querySelectorAll(n);let a=r.length;for(;a--;)if(r[a]===i){o.call(i,e);break}}),!!i)}const I=t=>parseInt(t.parentNode.dataset.id||t.parentNode.parentNode.dataset.id,10),_=new class{constructor(t,n){const e=window.localStorage;let o;this.getLocalStorage=()=>o||JSON.parse(e.getItem(t)||"[]"),this.setLocalStorage=n=>{e.setItem(t,JSON.stringify(o=n))},n&&n()}find(t,n){let e;n(this.getLocalStorage().filter((n=>{for(e in t)if(t[e]!==n[e])return!1;return!0})))}update(t,n){const e=t.id,o=this.getLocalStorage();let i,r=o.length;for(;r--;)if(o[r].id===e){for(i in t)o[r][i]=t[i];break}this.setLocalStorage(o),n&&n()}insert(t,n){const e=this.getLocalStorage();e.push(t),this.setLocalStorage(e),n&&n()}remove(t,n){let e;const o=this.getLocalStorage().filter((n=>{for(e in t)if(t[e]!==n[e])return!0;return!1}));this.setLocalStorage(o),n&&n(o)}count(t){this.find(w,(n=>{const e=n.length;let o=e,i=0;for(;o--;)i+=n[o].completed;t(e,e-i,i)}))}}("todos-vanilla-es6"),L=new class{itemList(t){return t.reduce(((t,n)=>{return t+`\n<li data-id="${n.id}"${n.completed?' class="completed"':""}>\n\t<div class="view">\n\t\t<input class="toggle" type="checkbox" ${n.completed?"checked":""}>\n\t\t<label>${e=n.title,e.replace(/[&<]/g,(t=>"&"===t?"&amp;":"&lt;"))}</label>\n\t\t<button class="destroy"></button>\n\t</div>\n</li>`;var e}),"")}itemCounter(t){return`${t} item${1!==t?"s":""} left`}},S=new class{constructor(t){this.template=t,this.$todoList=y(".todo-list"),this.$todoItemCounter=y(".todo-count"),this.$clearCompleted=y(".clear-completed"),this.$main=y(".main"),this.$toggleAll=y(".toggle-all"),this.$newTodo=y(".new-todo"),C(this.$todoList,"li label","dblclick",(({target:t})=>{this.editItem(t)}))}editItem(t){const n=t.parentElement.parentElement;n.classList.add("editing");const e=document.createElement("input");e.className="edit",e.value=t.innerText,n.appendChild(e),e.focus()}showItems(t){this.$todoList.innerHTML=this.template.itemList(t)}removeItem(t){const n=y(`[data-id="${t}"]`);n&&this.$todoList.removeChild(n)}setItemsLeft(t){this.$todoItemCounter.innerHTML=this.template.itemCounter(t)}setClearCompletedButtonVisibility(t){this.$clearCompleted.style.display=t?"block":"none"}setMainVisibility(t){this.$main.style.display=t?"block":"none"}setCompleteAllCheckbox(t){this.$toggleAll.checked=!!t}updateFilterButtons(t){y(".filters .selected").className="",y(`.filters [href="#/${t}"]`).className="selected"}clearNewTodo(){this.$newTodo.value=""}setItemComplete(t,n){const e=y(`[data-id="${t}"]`);e&&(e.className=n?"completed":"",y("input",e).checked=n)}editItemDone(t,n){const e=y(`[data-id="${t}"]`),o=y("input.edit",e);e.removeChild(o),e.classList.remove("editing"),y("label",e).textContent=n}bindAddItem(t){k(this.$newTodo,"change",(({target:n})=>{const e=n.value.trim();e&&t(e)}))}bindRemoveCompleted(t){k(this.$clearCompleted,"click",t)}bindToggleAll(t){k(this.$toggleAll,"click",(({target:n})=>{t(n.checked)}))}bindRemoveItem(t){C(this.$todoList,".destroy","click",(({target:n})=>{t(I(n))}))}bindToggleItem(t){C(this.$todoList,".toggle","click",(({target:n})=>{t(I(n),n.checked)}))}bindEditItemSave(t){C(this.$todoList,"li .edit","blur",(({target:n})=>{n.dataset.iscanceled||t(I(n),n.value.trim())}),!0),C(this.$todoList,"li .edit","keypress",(({target:t,keyCode:n})=>{13===n&&t.blur()}))}bindEditItemCancel(t){C(this.$todoList,"li .edit","keyup",(({target:n,keyCode:e})=>{27===e&&(n.dataset.iscanceled=!0,n.blur(),t(I(n)))}))}}(L),A=new class{constructor(t,n){this.store=t,this.view=n,n.bindAddItem(this.addItem.bind(this)),n.bindEditItemSave(this.editItemSave.bind(this)),n.bindEditItemCancel(this.editItemCancel.bind(this)),n.bindRemoveItem(this.removeItem.bind(this)),n.bindToggleItem(((t,n)=>{this.toggleCompleted(t,n),this._filter()})),n.bindRemoveCompleted(this.removeCompletedItems.bind(this)),n.bindToggleAll(this.toggleAll.bind(this)),this._activeRoute="",this._lastActiveRoute=null}setView(t){const n=t.replace(/^#\//,"");this._activeRoute=n,this._filter(),this.view.updateFilterButtons(n)}addItem(t){(0,v.publish)("create:todo",{title:t}),this.store.insert({id:Date.now(),title:t,completed:!1},(()=>{this.view.clearNewTodo(),this._filter(!0)}))}editItemSave(t,n){n.length?this.store.update({id:t,title:n},(()=>{this.view.editItemDone(t,n)})):this.removeItem(t)}editItemCancel(t){this.store.find({id:t},(n=>{const e=n[0].title;this.view.editItemDone(t,e)}))}removeItem(t){this.store.remove({id:t},(()=>{this._filter(),this.view.removeItem(t)}))}removeCompletedItems(){this.store.remove({completed:!0},this._filter.bind(this))}toggleCompleted(t,n){this.store.update({id:t,completed:n},(()=>{this.view.setItemComplete(t,n)}))}toggleAll(t){this.store.find({completed:!t},(n=>{for(let{id:e}of n)this.toggleCompleted(e,t)})),this._filter()}_filter(t){const n=this._activeRoute;(t||""!==this._lastActiveRoute||this._lastActiveRoute!==n)&&this.store.find({"":w,active:{completed:!1},completed:{completed:!0}}[n],this.view.showItems.bind(this.view)),this.store.count(((t,n,e)=>{this.view.setItemsLeft(n),this.view.setClearCompletedButtonVisibility(e),this.view.setCompleteAllCheckbox(e===t),this.view.setMainVisibility(t)})),this._lastActiveRoute=n}}(_,S),T=()=>A.setView(document.location.hash);k(window,"load",T),k(window,"hashchange",T)})()})();
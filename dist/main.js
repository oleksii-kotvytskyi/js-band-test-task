!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="dist/",o(o.s=4)}([function(t,e,o){var n=o(1);"string"==typeof n&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1};o(3)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,o){(t.exports=o(2)(!1)).push([t.i,".dropdownEditTodo.open::before,.dropdownEditTodo.open::after{position:absolute;content:'';top:25px;border-bottom:1px solid black;width:18px;height:10px;z-index:1}.createTodoContent>label>div>input,.createTodoContent>label>div>textarea{display:block;width:250px;margin:5px 25px 15px;border:1px solid gray;font-size:17px;padding-left:10px}.backgroundTop,.backgroundBottom{position:fixed;width:100vw;height:60px;z-index:2;background-color:#343a40}.todoTitle,.footerTodoApp{position:fixed;z-index:3;padding-left:60px;padding-top:10px;margin-top:0;color:white}*{box-sizing:border-box}html,body{margin:0;font-family:Muli, sans-serif;font-size:18px}#todoApp{max-width:1200px;margin:0 auto;margin-bottom:100px}.backgroundTop{top:0}.backgroundBottom{bottom:0}.headOfTodo{display:flex;justify-content:space-between;margin:100px 40px 90px}.todoTitle{top:0}.searchByTittle{position:relative}.searchByTittle:before{position:absolute;content:\"🔍\";left:5px;top:8px}.searchByTittle>input{padding:5px 5px 5px 30px;border:1px solid black;height:40px;font-size:20px}.markOfDoneList,.todosPriority{width:150px;position:relative}.markOfDoneList>button,.todosPriority>button{width:100%;position:relative;height:40px;font-size:20px}.markOfDoneList>button:hover,.todosPriority>button:hover{cursor:pointer}.markOfDoneList>button:before,.todosPriority>button:before{content:'▼';position:absolute;right:10px}.markOfDoneList>ul,.todosPriority>ul{display:none;list-style:none}.markOfDoneList.open>ul,.todosPriority.open>ul{width:150px;margin:0;border:1px solid black;display:block;position:absolute;padding:0}.markOfDoneList.open>ul>li,.todosPriority.open>ul>li{padding-left:20px;background-color:white}.markOfDoneList.open>ul>li:hover,.todosPriority.open>ul>li:hover{cursor:pointer;background-color:lightblue}.btnGreateTodo{background-color:#ff1f48;border:none;width:200px;height:40px;border-radius:10px;outline:none;color:white;font-size:20px}.btnGreateTodo:hover{cursor:pointer;background-color:#007bff;transition:0.3s}.modalWindow{display:none}.modalWindow.show{display:block;position:fixed;z-index:5;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,0.8);margin:0;padding:0}.createTodoContent{padding-top:20px;width:300px;height:450px;border-radius:10px;background-color:white;position:absolute;top:50%;left:50%;margin-right:-50%;transform:translate(-50%, -50%)}.createTodoContent>label{margin-left:25px;margin-top:10px}.createTodoContent>label>div .emptyTitle{color:red;margin:0;padding-left:25px}.createTodoContent>label>div>input{height:35px}.createTodoContent>label>div>textarea{resize:none;height:70px;padding-top:10px}.createTodoPriority{margin-left:25px;width:250px;text-transform:capitalize}.createTodoPriority>button{width:100%;position:relative;text-transform:capitalize;text-align:left;padding-left:20px;height:30px;font-size:18px}.createTodoPriority>button:hover{cursor:pointer}.createTodoPriority>button:before{position:absolute;content:'▼';top:1px;right:5px}.createTodoPriority>ul{display:none}.createTodoPriority.open>ul{display:block;list-style:none;margin:0 auto 70px 0px;border:1px solid #343a40;border-top:none;width:100%;padding:0}.createTodoPriority.open>ul>li{padding-left:20px}.createTodoPriority.open>ul>li:hover{cursor:pointer;background-color:#007bff}.createTodoPriority>p{margin:5px auto}.btncreateTodoContent{display:flex;justify-content:space-around;position:absolute;bottom:20px;width:100%}.btncreateTodoContent>button{width:110px;height:35px;border-radius:10px;background-color:#007bff;color:white;border:none}.btncreateTodoContent>button:hover{cursor:pointer;background-color:red;transition:0.3s}.btncreateTodoContent>button.saveTodo:hover{background-color:green}.todoList{display:flex;justify-content:flex-start;list-style:none;flex-wrap:wrap;margin-bottom:80px}.todoItem{display:none}.todoItem.show{display:block;position:relative;border:1px solid black;width:300px;height:300px;margin-bottom:20px;margin-right:40px;word-wrap:break-word}.todoItem.done::before{position:absolute;content:\"🗹\";top:-5px;right:0px;background-color:white;height:14px;transform:scale(1.4);color:green}.todoItem>h2{padding-left:20px;height:50px;overflow:auto}.todoItem>p{padding-left:20px;height:140px;overflow:auto}.todoFotter{position:absolute;display:flex;justify-content:space-around;bottom:20px;width:100%;height:28px}.todoPriority{border:3px dashed black;border-radius:10px;padding:10px;padding-top:0px}.dropdownEditTodo{position:relative;width:40px}.dropdownEditTodo>button{width:100%;background-color:white;border:1px solid black;border-radius:10px;height:28px;outline:none}.dropdownEditTodo>button:hover{cursor:pointer;background-color:#007bff;transition:0.3s}.dropdownEditTodo.open>ul{display:block;position:absolute;top:40px;left:-40px;list-style:none;width:80px;margin:0;padding:0;border:1px solid black;text-align:center;background-color:white;z-index:2}.dropdownEditTodo.open::before{left:20px;transform:rotate(45deg)}.dropdownEditTodo.open::after{left:0px;transform:rotate(-45deg)}.dropdownEditTodo>ul{display:none}.dropdownEditTodo>ul>li:hover{cursor:pointer;background-color:#007bff}.footerTodoApp{bottom:0;margin-top:20px}@media (max-width: 850px){.headOfTodo{flex-direction:column;align-items:center}.headOfTodo .markOfDoneList{margin-top:20px}.headOfTodo .todosPriority{margin-top:70px}.headOfTodo .btnGreateTodo{margin-top:100px}}\n",""])},function(t,e,o){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o=t[1]||"",n=t[3];if(!n)return o;if(e&&"function"==typeof btoa){var r=(a=n,d=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(s," */")),i=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot).concat(t," */")}));return[o].concat(i).concat([r]).join("\n")}var a,d,s;return[o].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(o,"}"):o})).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(n[i]=!0)}for(var a=0;a<t.length;a++){var d=t[a];null!=d[0]&&n[d[0]]||(o&&!d[2]?d[2]=o:o&&(d[2]="(".concat(d[2],") and (").concat(o,")")),e.push(d))}},e}},function(t,e,o){"use strict";var n,r={},i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var t={};return function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[e]=o}return t[e]}}();function d(t,e){for(var o=[],n={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],d={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(d):o.push(n[a]={id:a,parts:[d]})}return o}function s(t,e){for(var o=0;o<t.length;o++){var n=t[o],i=r[n.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(h(n.parts[a],e))}else{for(var d=[];a<n.parts.length;a++)d.push(h(n.parts[a],e));r[n.id]={id:n.id,refs:1,parts:d}}}}function l(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var n=o.nc;n&&(t.attributes.nonce=n)}if(Object.keys(t.attributes).forEach((function(o){e.setAttribute(o,t.attributes[o])})),"function"==typeof t.insert)t.insert(e);else{var r=a(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var c,p=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function u(t,e,o,n){var r=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=p(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e,o){var n=o.css,r=o.media,i=o.sourceMap;if(r&&t.setAttribute("media",r),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var m=null,b=0;function h(t,e){var o,n,r;if(e.singleton){var i=b++;o=m||(m=l(e)),n=u.bind(null,o,i,!1),r=u.bind(null,o,i,!0)}else o=l(e),n=f.bind(null,o,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var o=d(t,e);return s(o,e),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],l=r[a.id];l&&(l.refs--,n.push(l))}t&&s(d(t,e),e);for(var c=0;c<n.length;c++){var p=n[c];if(0===p.refs){for(var u=0;u<p.parts.length;u++)p.parts[u]();delete r[p.id]}}}}},function(t,e,o){"use strict";o.r(e);document.getElementById("todoApp");const n=document.querySelector(".modalWindow"),r=document.querySelector(".cancelCreateTodo"),i=(document.querySelector(".saveTodo"),document.getElementById("createTodoTitle")),a=document.getElementById("createTodoDescription"),d=document.querySelector(".createTodoPriority"),s=document.querySelector(".btnGreateTodo"),l=document.querySelector(".todoList"),c=document.querySelector(".markOfDoneList"),p=document.querySelector(".todosPriority"),u=document.getElementById("inputSearch"),f=document.querySelector(".createTodoContent");function m(t,e){n.classList.add("show");let o={};const s=t=>o.title=t.target.value.trim(),l=t=>o.description=t.target.value.trim(),c=t=>{let e="";"BUTTON"===t.target.tagName&&d.classList.toggle("open"),"LI"===t.target.tagName&&(e=t.target.textContent,d.children[1].innerText=e,o.priority=e)},p=()=>{const t=document.querySelector(".emptyTitle");b(),m(),n.classList.remove("show"),t&&t.remove()},u=t=>{const r=document.querySelector(".emptyTitle");t.preventDefault(),""===o.title?r||i.insertAdjacentHTML("beforebegin",'\n        <p class="emptyTitle">Please Enter This Field</p>\n      '):(e?function(t){const e=document.querySelector(`[data-key='${t.id}']`),o=e.children[0],n=e.children[1],r=e.children[2].children[0];o.innerText=t.title,n.innerText=t.description,r.innerText=t.priority,x=x.map(e=>(Number(e.id)===Number(t.id)&&(e={...t}),e)),localStorage.setItem(h,JSON.stringify(x))}(o):function(t){x.push(t),localStorage.setItem(h,JSON.stringify(x)),y(t)}(o),b(),m(),n.classList.remove("show"),r&&r.remove())};if(e)o={...e},i.value=o.title,a.value=o.description,d.children[1].innerText=o.priority;else{const t={id:Date.now(),done:!1,description:"",title:"",priority:"high"};o={...t}}function m(){i.removeEventListener("input",s),a.removeEventListener("input",l),d.removeEventListener("click",c),r.removeEventListener("click",p),f.removeEventListener("submit",u)}function b(){i.value="",a.value="",d.children[1].innerText="high",!d.classList.contains("open")&&d.classList.add("open")}window.setTimeout(()=>i.focus(),0),i.addEventListener("input",s),a.addEventListener("input",l),d.addEventListener("click",c),r.addEventListener("click",p),f.addEventListener("submit",u)}s.addEventListener("click",m);var b=m;const h="todos";let g=localStorage.getItem(h),x=g?JSON.parse(g).sort((t,e)=>e.done-t.done):[];function y(t){let e=t.done?"done":"";l.insertAdjacentHTML("afterbegin",`\n  <li class="todoItem show ${e}" data-key="${t.id}">\n    <h2>${t.title}</h2>\n    <p>${t.description}</p>\n    <div class="todoFotter">\n      <div class="todoPriority" data-priority="${t.id}">${t.priority}</div>\n      <div class="dropdownEditTodo">\n      <button data-id="${t.id}">...</button>\n      <ul>\n        <li>done</li>\n        <li>edit</li>\n        <li>delete</li>\n      </ul>\n    </div>\n    </div>\n  </li>\n  `);const o=document.querySelector(`[data-id='${t.id}']`),n=o.nextElementSibling;o.addEventListener("click",()=>{o.parentElement.classList.toggle("open")}),n.addEventListener("click",()=>{o.parentElement.classList.toggle("open")})}function v(t){x.forEach(e=>{const o=document.querySelector(`[data-key='${e.id}']`),n=document.querySelector(`[data-priority='${e.id}']`),r=o.classList.contains("show"),i=o.classList.contains("done");switch(""!==t.searchText?e.title.includes(t.searchText)?!r&&o.classList.add("show"):o.classList.remove("show"):!r&&o.classList.add("show"),"all"!==t.priority&&t.priority!==n.textContent&&o.classList.remove("show"),t.completed){case"open":i&&o.classList.remove("show");break;case"done":i||o.classList.remove("show")}})}x.length>0&&x.forEach(t=>y(t)),l.addEventListener("click",t=>{let e=t.target.parentElement!==l;if("LI"===t.target.tagName&&e){const e=t.target.parentElement.parentElement.parentElement.parentElement.dataset.key;switch(t.target.textContent){case"delete":!function(t){const e=document.querySelector(`[data-key='${t}']`);x=x.filter(e=>Number(e.id)!==Number(t)),localStorage.setItem(h,JSON.stringify(x)),e.remove()}(e);break;case"done":!function(t){const e=document.querySelector(`[data-key='${t}']`),o=x.find(e=>Number(e.id)===Number(t));e.remove(),e.classList.contains("done")?l.prepend(e):l.append(e),e.classList.toggle("done"),o.done=e.classList.contains("done"),localStorage.setItem(h,JSON.stringify(x))}(e);break;case"edit":{const t=x.find(t=>Number(t.id)===Number(e));b(null,t);break}}}});const T={searchText:"",priority:"all",completed:"all"};function w(t){let e="all";t.addEventListener("click",o=>{e=o.target.textContent,t.children[0].innerText=e,t===c&&(T.completed=e,v(T)),t===p&&(T.priority=e,v(T)),"BUTTON"===o.target.tagName&&t.classList.toggle("open")})}u.addEventListener("input",t=>{T.searchText=t.target.value.trim(),v(T)}),w(c),w(p);o(0)}]);
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/demo.jpg":[["demo.090c7c6d.jpg","nKR3"],"nKR3"]}],"mORU":[function(require,module,exports) {
"use strict";function e(){return fetch("https://superheros-back-end.herokuapp.com/api/heros").then(e=>e.json()).then(e=>e.data.heros)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=t(require("./js/API"));function t(e){return e&&e.__esModule?e:{default:e}}function n({_id:e,nickname:t,superpowers:n,images:o}){return`<li class="hero-gallery-item" data-item="${e}">\n    <img class="hero-gallery-item-poster" src="${o}"\n        alt="foto Hero"/>\n\n    <div class="hero-gallery-item-description">\n        <h2 class="hero-gallery-item-title">${t}</h2>\n        <div class=hero-gallery-item-box">\n            <p class="hero-gallery-item-genre">${n} </p>\n\n           </div>\n   </div>\n   <div>\n             <button  class="button-del" id="${e}">delete</button>\n           <button class="button-update" id="${e}">update</button>\n  </div>\n             </li>`}console.log((0,e.default)());const o=document.getElementById("form");o.addEventListener("submit",async function(e){e.preventDefault();let t=await fetch("https://superheros-back-end.herokuapp.com/api/heros",{method:"POST",body:new FormData(o)});if(await t.json()){o.reset(),document.querySelector(".modal").classList.add("is-hidden"),location.reload()}});const a=document.querySelector(".div-for-heros");async function r(e){const t=document.getElementById(e.target.id);if(e.target!==t)return;let n=await fetch(`https://superheros-back-end.herokuapp.com/api/heros/${e.target.id}`,{method:"DELETE",body:e.target.id});await n.json()&&location.reload()}a.addEventListener("click",r);
},{"./sass/main.scss":"clu1","./js/API":"mORU"}]},{},["Focm"], null)
//# sourceMappingURL=/superhero/src.1eb6f014.js.map
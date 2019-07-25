!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build/",n(n.s=5)}([function(e,t,n){"use strict";(function(e,r){var o,i=n(1);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var s=Object(i.a)(o);t.a=s}).call(this,n(3),n(4)(e))},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t,n){},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";n.r(t);n(2);var r=n(0),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function s(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,n){var o;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(a)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var u=e,c=t,l=[],d=l,f=!1;function p(){d===l&&(d=l.slice())}function b(){if(f)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return c}function y(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(f)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return p(),d.push(e),function(){if(t){if(f)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,p();var n=d.indexOf(e);d.splice(n,1)}}}function h(e){if(!s(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(f)throw new Error("Reducers may not dispatch actions.");try{f=!0,c=u(c,e)}finally{f=!1}for(var t=l=d,n=0;n<t.length;n++){(0,t[n])()}return e}return h({type:i.INIT}),(o={dispatch:h,subscribe:y,getState:b,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");u=e,h({type:i.REPLACE})}})[r.a]=function(){var e,t=y;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(b())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},o}window.onload=()=>{const e=document.getElementsByClassName("widget__main-user")[0],t=document.getElementsByClassName("content");function n(t,n){const r=new XMLHttpRequest,o=[];r.open("GET",`${t}`),r.send(),r.onreadystatechange=()=>{if(4===r.readyState&&200===r.status){const t=JSON.parse(r.responseText);for(let r=0;r<n;r+=1){let n=Math.floor(29*Math.random())+0;o.push(n),o[r-1]===n&&(n+=1);const i=new XMLHttpRequest;i.open("GET",`${t[n].url}`),i.send(),i.onreadystatechange=()=>{if(4===i.readyState&&200===i.status){const t=JSON.parse(i.responseText);e.innerHTML=`<div class="content">\n          <div class="test">\n          <div class="photo_text">\n          <img class="github-photo" src="${t.avatar_url}')">\n          <div class="github-info">\n            <div class="github-info-name">${t.name}</div>\n            <div class="github-info-town">\n              <img src="/img/map-marker-alt-solid.svg" class="map-marker" />\n              ${t.location}\n            </div>\n            <div class="github-info-nickname"> @${t.login}</div>\n          </div>\n        </div>\n        <div class="right-arrow" data-id="${n}"></div>\n        </div>\n        <div class="trash" data-id="${n}"></div></div>${e.innerHTML}`}}}}}}$(".widget__main-user").on("click",".right-arrow",()=>{const e=document.getElementsByClassName("right-arrow"),r=document.getElementsByClassName("trash"),o=document.getElementsByClassName("test");for(let i=0;i<3;i+=1)e[i].addEventListener("mouseenter",()=>{r[i].getAttribute("data-id")===e[i].getAttribute("data-id")&&"none"===getComputedStyle(r[i]).display&&(r[i].style.display="block",o[i].style.right="50px",e[i].style.left="57px")}),e[i].addEventListener("mouseleave",()=>{r[i].getAttribute("data-id")===e[i].getAttribute("data-id")&&"block"===getComputedStyle(r[i]).display&&(r[i].style.display="none",o[i].style.right="0px",e[i].style.left="0px")}),r[i].addEventListener("mouseenter",()=>{r[i].getAttribute("data-id")===e[i].getAttribute("data-id")&&(r[i].style.display="block",o[i].style.right="50px",e[i].style.left="57px")}),r[i].addEventListener("mouseleave",()=>{r[i].getAttribute("data-id")===e[i].getAttribute("data-id")&&"block"===getComputedStyle(r[i]).display&&(r[i].style.display="none",o[i].style.right="0px",e[i].style.left="0px")}),r[i].onclick=function(){t[i].remove(),n("https://api.github.com/users",1)}});document.getElementsByClassName("refresh")[0];const r=a(function(e=0,t){switch(t.type){case"live":case"button":return t.api;default:return e}});r.subscribe(()=>n(r.getState(),3)),r.dispatch({type:"live",api:"https://api.github.com/users"}),$(".refresh").on("click",()=>{$(".widget__main-user").html(null),r.dispatch({type:"button",api:"https://api.github.com/users"})})}}]);
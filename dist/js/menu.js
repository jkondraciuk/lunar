!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#menuOpen"),t=document.querySelector("#nav"),n=t.querySelectorAll(":scope .nav__menu-item"),o=t.querySelector(":scope .nav__menu-item:last-child"),r=t.querySelector(":scope #menuClose");function c(){t.classList.remove("nav--active"),[].forEach.call(n,e=>{e.classList.remove("nav__menu-item--close"),document.body.style.overflowY="auto",this.removeEventListener("animationend",c)})}e.addEventListener("click",()=>{t.classList.add("nav--active"),[].forEach.call(n,e=>{e.classList.add("nav__menu-item--open")}),document.body.style.overflowY="hidden"}),r.addEventListener("click",()=>{[].forEach.call(n,e=>{e.classList.remove("nav__menu-item--open"),e.classList.add("nav__menu-item--close")}),o.addEventListener("animationend",c)})})}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{SqJr:function(e,i,t){"use strict";t.r(i);var n=t("iYmT"),r=t("q1tI"),s=t.n(r),a=t("qKvR"),u=(t("XfO3"),t("HEwt"),t("a1Th"),t("rE2o"),t("ioFf"),t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),function(e,i){return Object(r.useEffect)(function(){var t=function(t){return t.key===e&&i(t)};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}},[])});function c(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=function(e){var i=e[0].map(function(i,t){return i.isVisible?i:function e(i,t,n,r){return 0===i.length?t:i[r][n].isVisible?e(i,t,n,r-1):Object.assign({},t,{isVisible:!0})}(e,i,t,e.length-1)}),t=c(e);return t[0]=i,t},l=["#410058","#53006C","#67007E","#7A0090","#8E00A0","#8422AF","#8144BD","#8466CB","#8F88D8","#AAAAE4","#CCD2EF"],b=["#0A2F51","#0E4D64","#137177","#188977","#1D9A6C","#39A96B","#56B870","#74C67A","#99D492","#BFE1B0","#DEEDCF"],f={name:"18pk9vw",styles:"display:flex;align-items:center;justify-content:center;width:180px;height:180px;border:2px solid black;border-radius:5%;"},v={name:"3du991",styles:"font-size:72px;font-weight:bold;"},d=function(e){var i=2,t=l.reduce(function(e,t){var n,r;return e[i]?(i*=2,Object.assign({},e,((r={})[i]=t,r))):Object.assign({},e,((n={})[i]=t,n))},{});return Object(a.b)("color:",t[e],";")},g=function(e){var i=2048,t=b.reduce(function(e,t){var n,r;return e[i]?(i/=2,Object.assign({},e,((r={})[i]=t,r))):Object.assign({},e,((n={})[i]=t,n))},{});return Object(a.b)("background-color:",t[e],";")};function p(e){var i=e.isVisible,t=e.value;return Object(a.c)("div",{css:Object(n.a)([f,i&&g(t)])},i&&Object(a.c)("span",{css:Object(n.a)([v,d(t)])},t))}p.defaultProps={isVisible:!1,value:2};var j=p;function V(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var O={name:"hykujo",styles:"display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;height:800px;width:800px;border:3px solid black;border-radius:2%;padding:15px;"},w=function(e){for(var i=new Array(e),t=0;t<e;t+=1){i[t]=new Array(e);for(var n=0;n<e;n+=1)i[t][n]={id:""+t+n,value:2,isVisible:!1}}var r=Math.floor(Math.random()*Object.keys(i).length),s=Math.floor(Math.random()*Object.keys(i).length);return i[r][s]={id:""+r+s,value:2,isVisible:!0},i},y=function(e){return e.reduce(function(e,i){return[].concat(V(e),V(i.map(function(e){var i=e.id,t=e.value,n=e.isVisible;return Object(a.c)(j,{key:i,value:t,isVisible:n})})))},[])},h=function e(i){var t=Math.floor(Math.random()*Object.keys(i).length),n=Math.floor(Math.random()*Object.keys(i).length);if(!i[t][n].isVisible){var r=V(i);return r[t][n]=Object.assign({},i[t][n],{isVisible:!0}),r}return e(i)},A=function(e,i){var t;switch(i.key){case"ArrowUp":t=o(e);break;case"ArrowDown":t=function(e){return e.map(function(i,t){return i.map(function(i,n){return i.isVisible&&e[t+1]&&e[t+1][n]&&!e[t+1][n].isVisible?Object.assign({},i,{isVisible:!1}):!i.isVisible&&e[t-1]&&e[t-1][n]&&e[t-1][n].isVisible?Object.assign({},i,{isVisible:!0}):i.isVisible&&e[t-1]&&e[t-1][n]&&e[t-1][n].isVisible&&e[t-1][n].value===i.value?Object.assign({},i,{value:i.value+e[t-1][n].value}):i.isVisible&&e[t+1]&&e[t+1][n]&&e[t+1][n].isVisible&&e[t+1][n].value===i.value?Object.assign({},i,{isVisible:!1}):i})})}(e);break;case"ArrowLeft":t=function(e){return e.map(function(i,t){return i.map(function(i,n){return i.isVisible&&e[t][n+1]&&!e[t][n+1].isVisible?Object.assign({},i,{isVisible:!1}):!i.isVisible&&e[t][n+1]&&e[t][n+1].isVisible?Object.assign({},i,{isVisible:!0}):i.isVisible&&e[t][n+1]&&e[t][n+1].isVisible&&e[t][n+1].value===i.value?Object.assign({},i,{value:i.value+e[t][n+1].value}):!i.isVisible&&e[t][n+1]&&e[t][n+1].isVisible&&e[t][n+1].value===i.value?Object.assign({},i,{isVisible:!1}):i})})}(e);break;case"ArrowRight":t=function(e){return e.map(function(i,t){return i.map(function(i,n){return i.isVisible&&e[t][n-1]&&!e[t][n-1].isVisible?Object.assign({},i,{isVisible:!1}):!i.isVisible&&e[t][n-1]&&e[t][n-1].isVisible?Object.assign({},i,{isVisible:!0}):i.isVisible&&e[t][n-1]&&e[t][n-1].isVisible&&e[t][n-1].value===i.value?Object.assign({},i,{value:i.value+e[t][n-1].value}):!i.isVisible&&e[t][n-1]&&e[t][n-1].isVisible&&e[t][n-1].value===i.value?Object.assign({},i,{isVisible:!1}):i})})}(e);break;default:return h(e)}return h(t)};function m(e){var i=e.gridSize,t=Object(r.useState)(w(i)),n=t[0],c=t[1];return u("ArrowUp",function(e){return c(function(i){return A(i,e)})}),u("ArrowDown",function(e){return c(function(i){return A(i,e)})}),u("ArrowLeft",function(e){return c(function(i){return A(i,e)})}),u("ArrowRight",function(e){return c(function(i){return A(i,e)})}),Object(a.c)(s.a.Fragment,null,Object(a.c)("div",{css:O},y(n)),";")}m.defaultProps={gridSize:4};var k=m,E={name:"1p2rqxo",styles:"display:flex;flex-wrap:wrap;height:100%;align-items:center;justify-content:center;"};i.default=function(){return Object(a.c)("div",{css:Object(n.a)([E])},Object(a.c)(k,{gridSize:4}))}}}]);
//# sourceMappingURL=component---src-pages-layout-main-jsx-f4476024f88efff8d2d0.js.map
!function(e){function t(t){for(var r,o,c=t[0],s=t[1],l=t[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={0:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;a.push([129,1]),n()}({129:function(e,t,n){"use strict";n.r(t);n(82);var r=n(12),i=n(25),a=n(24);r.a.registerPlugin(i.a),r.a.registerPlugin(a.a),window.onload=function(){o.set(["#my-name-intro","#animation-text-bottom",".package","#animation-text-top","#animation-text-bottom"],{opacity:0}).to("#text-type-in-intro",{duration:1,text:"My name is",ease:"none"},1).to("#my-name-intro",{opacity:1,duration:.8,ease:"back"}).to("#my-name-intro",{opacity:.8,duration:.2,ease:"back"}).to(["#text-type-in-intro","#hi"],{opacity:0,duration:1,ease:"power3.out"},"-=1").to("#animation-text-top",{opacity:1,duration:1,ease:"back"}).to("#animation-text-bottom",{opacity:.5,duration:5,ease:"back"}).call(c,null,"-=7").to(".package",{opacity:1,duration:5,ease:"back"},"-=5")};var o=r.a.timeline();function c(){var e=r.a.timeline();e.set("#F",{x:-100,y:50},.2).set("#F",{x:0,y:0},.4),e.set("#R",{x:300,y:-150,scale:2},.5).set("#R",{x:0,y:0,scale:1},.9),e.set("#O",{x:-150,y:75},.9).set("#O",{x:0,y:0},1.2).set("#O",{x:50,y:150},1.5).set("#O",{x:0,y:0},2),e.set(".N",{x:0,y:-15},2.1).set(".N",{x:0,y:0},2.5).set(".N",{rotate:180},2.8).set(".N",{rotate:90},3.3).set(".N",{rotate:0},3.5),e.set("#E",{x:-300,y:-120},2).set("#E",{x:0,y:0},2.75),e.set("#D",{x:50,y:-50},2.75).set("#D",{x:0,y:0},3.1)}document.getElementById("scroller").addEventListener("click",(function(){r.a.to(window,{duration:.5,scrollTo:"#bio"})}));n(16),n(22);var s=[{title:"Front-End Developer & Website Manager",date:"2016 - Present",description:"Developing and maintaining websites using WordPress / WooCommerce as CMS. Developing WordPress themes using HTML / CSS / JavaScript. Wordpress customization. Creative work for ads. Logo and Brand identity design. Constant self-development through learnig and personal open sourse project with JavaScript and React;"},{title:"Web and Graphic designer / Front-End Developer",date:"03 / 2011 – 06 / 2012 @ Web Fashion Ltd",description:"UX/UI. Creating products and web page designs with Adobe PS/ Adobe Illustrator. Front-End development with HTML/CSS/jQuery"}];n(37),n(38),n(23);function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.buildCvContent(t)}var t,n,r;return t=e,(n=[{key:"buildCvContent",value:function(e){var t=document.createElement("div");return t.className="cv-entry",t.innerHTML='\n    <div class="cv-entry__title">\n      <h1>'.concat(e.title,'</h1>\n    </div>\n    \n    <div class="cv-entry__description">\n      <p>').concat(e.description,"</p>\n    </div>\n    "),t}}])&&l(t.prototype,n),r&&l(t,r),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=document.getElementById("cv-container"),f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.buildList(s)}var t,n,r;return t=e,(n=[{key:"buildList",value:function(e){e.forEach((function(e){p.appendChild(new u(e))}))}}])&&d(t.prototype,n),r&&d(t,r),e}();n(102);n(75),n(40);document.getElementById("github-projects"),n(111);var v=[{img:"src/img/icons/ude-logo.png",url:"https://www.uni-due.de",title:"B.Sc. Computer Science and Communications Engineering"},{img:"src/img/icons/NewUlogo-large-1.png",url:"https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced",title:"JavaScript - The Complete Guide 2020 (Beginner + Advanced)"},{img:"src/img/icons/NewUlogo-large-1.png",url:"url",title:"JavaScript: Understanding the Weird Parts"}];function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.buildCertEntry(t)}var t,n,r;return t=e,(n=[{key:"buildCertEntry",value:function(e){var t=document.createElement("div");return t.className="certificates-entry",t.innerHTML='\n    <div class="certificates-entry__thumb">\n      <img src="'.concat(e.img,'" alt="certificate image"/>\n    </div>\n    <div class="certificates-entry__title"><h1><a href="').concat(e.url,'" target="_blank">').concat(e.title,"</a></h1></div>\n    "),t}}])&&m(t.prototype,n),r&&m(t,r),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=document.getElementById("certificates-container"),b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.buildPrList(v)}var t,n,r;return t=e,(n=[{key:"buildPrList",value:function(e){e.forEach((function(e){g.appendChild(new h(e))}))}}])&&y(t.prototype,n),r&&y(t,r),e}(),w=n(11);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.recentPrElement,this.revealMask,this.index=n,this.buildProjectElement(t,this.index)}var t,n,r;return t=e,(n=[{key:"buildProjectElement",value:function(e){var t=this;return this.recentPrElement=document.createElement("div"),this.recentPrElement.setAttribute("id","project-".concat(this.index)),this.recentPrElement.className="recentPr-entry",this.recentPrElement.innerHTML='\n    <div class="recentPr-entry__thumb">\n      <img src="'.concat(e.thumb,'" alt="project thumb">\n    </div>\n    \n    <div class="recentPr-entry__hover">\n      <div class="recentPr-entry__title">\n        <h1><a href="').concat(e.url,'" target="__blank">').concat(e.title,'</a></h1>\n      </div>\n      <div class="recentPr-entry__description">\n        <p>').concat(e.description,"</p>\n      </div>\n    </div>\n    "),this.recentPrElement.addEventListener("mouseenter",(function(){t.revealMask=t.recentPrElement.querySelector(".recentPr-entry__hover"),t.revealHandler(t.index)})),this.recentPrElement}},{key:"revealHandler",value:function(e){w.a.timeline().set("#project-".concat(this.index),{x:-30}).to("#project-".concat(this.index),{x:0,duration:1,ease:"back"},0)}}])&&P(t.prototype,n),r&&P(t,r),e}(),C=[{thumb:"src/img/prjcts/rodina.png",title:"Rodina-Haskovo LTD",description:"Custom Template / Wordpress / Site Admin",url:"http://rodinahaskovo.com/"},{thumb:"src/img/prjcts/interlabor.png",title:"Interlabor",description:"Custom CSS / Custom JavaScript / Site Admin",url:"http://www.inlab-bg.com/"},{thumb:"src/img/prjcts/chervenataStena.png",title:"Chervenata Stena Park",description:"UX/UI / WorpdPress / Custom CSS",url:"http://chervenatastena.com/"},{thumb:"src/img/prjcts/swissboutique.png",title:"Swiss Boutique",description:"JS Customization / Custom CSS / Site Admin",url:"https://swissboutique.bg/"},{thumb:"src/img/prjcts/phototravel.png",title:"PhotoTravel",description:"WordPress and Custom CSS",url:"http://phototravel.bg"},{thumb:"src/img/prjcts/realestate.png",title:"RealEstate Agency",description:"CSS / JS / Single Page",url:"https://tangratannakra.github.io/Real-Estate-Agency-Front-Page/"}];function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=document.getElementById("recentPr-container"),x=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.buildPrList(C)}var t,n,r;return t=e,(n=[{key:"buildPrList",value:function(e){e.forEach((function(e,t){var n=new E(e,t);k.appendChild(n)}))}}])&&S(t.prototype,n),r&&S(t,r),e}(),j=n(15);function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}w.a.registerPlugin(j.a),w.a.core.globals("ScrollTrigger",j.a);var O=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hideInitialy(t),this.reveal(t,n)}var t,n,r;return t=e,(n=[{key:"hideInitialy",value:function(e){document.querySelector(e).style.opacity="0"}},{key:"reveal",value:function(e,t){w.a.to("".concat(e),{scrollTrigger:{trigger:"".concat(t),start:"top top"},opacity:1,duration:1})}}])&&_(t.prototype,n),r&&_(t,r),e}();document.addEventListener("DOMContentLoaded",(function(){new x,new b,new O("#cv-container",".heading-block__slogan"),new O(".testimonial",".tech-stack__ul"),new O(".recent-projects",".cv"),new f}),!1)},82:function(e,t,n){}});
//# sourceMappingURL=app.91f756ce.js.map
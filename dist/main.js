(()=>{"use strict";var e={658:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(63),a=t.n(r),i=t(143),o=t.n(i)()(a());o.push([e.id,"body {\n    background-color: lightblue;\n    font-family: 'Helvetica';\n    margin: 0;\n}\n\nbutton {\n    padding: 10px 15px;\n    text-align: center;\n    text-decoration: none;\n    margin: 6px 6px;\n    border-radius: 10px;\n    border: none;\n}\n\nbutton:hover{\n    background-color: gray;\n    color: white;\n}\n\n.root {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n.headerBar {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    gap: 8px;\n    padding: 8px\n}\n\n.contentContainer {\n    background-color: purple;\n    display: flex;\n    position: relative;\n    flex-grow: 1;\n}\n\n.homePage {\n    background-color: red;\n    height: 100%;\n    width: 100%;\n}\n\n.bgImgDiv {\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-attachment: fixed;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.menuPage {\n    width: 100%;\n    height: 100%;\n    background-color: lightgray;\n    /* display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; */\n\n}\n\n.menuHeader {\n    /* width: 100%;\n    height: 100%; */\n    background-color: gray;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.menuBody {\n    background-color: lightblue;\n    column-gap: 1rem;\n    column-count: 2;\n    column-width: 25rem;\n    padding: 3.5rem;\n}\n\n.menuSection {\n    background-color: lightgreen;\n    margin: 0;\n    margin-bottom: 10px;\n    break-inside: avoid;\n    /* display: flex;\n    flex-direction: column;     */\n}\n\n\n\np {\n    margin: 0;    \n}\n\nh2, h4 {\n    margin: 0;\n}\n\nul {\n    margin: 0;\n    list-style-type: none;\n    padding: none;\n}\n.headerText {\n    font-size: 50px;\n}\n\n.subText {\n    font-size: 25px;\n}\n\n.subText2 {\n    font-size: 15px;\n}\n\nul {\n    font-weight: normal;\n    font-size: 15px;\n    color: black;\n}\n\n li > p {\n    font-weight: normal;\n    font-size: 12px;\n    color: gray;\n}\n\n.itemPrice {\n    font-size: 12px;\n    color: black;\n    font-weight: 700;;\n}",""]);const c=o},143:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);r&&o[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),n.push(p))}},n}},63:e=>{e.exports=function(e){return e[1]}},873:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],p=i[s]||0,l="".concat(s," ").concat(p);i[s]=p+1;var u=t(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:h,references:1})}o.push(l)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=t(i[o]);n[c].references--}for(var d=r(e,a),s=0;s<i.length;s++){var p=t(i[s]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=d}}},44:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},542:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},114:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},152:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},204:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},197:e=>{e.exports=JSON.parse('[{"name":"Golden Triangle","ingredient":"chicken, peas, tarmarind vinaigrette","price":"7","type":"Appetizer"},{"name":"Rangoon Crab","ingredient":"cream Cheese, crab, hot sauce","price":"8.5","type":"Appetizer"},{"name":"Fried Fish","ingredient":"fish, snap peas, spicy green dressing","price":"13","type":"Appetizer"},{"name":"Coconut Chicken Curry","ingredient":"coconut, chicken","price":"16","type":"Main Course"},{"name":"Golden Egg Curry","ingredient":"egg, tomato","price":"12","type":"Main Course"},{"name":"Fish Curry","ingredient":"fish, onion","price":"20","type":"Main Course"},{"name":"Pork Curry","ingredient":"pork, ginger","price":"22","type":"Main Course"},{"name":"Tea Leaves Salad","ingredient":"tea leaves, peanut, tomato, garlic","price":"12","type":"Soup and Salads"},{"name":"Tomato Salad","ingredient":"tomato, garlic, onion","price":"10","type":"Soup and Salads"},{"name":"Mixed Noddle Salad","ingredient":"noddles, egg, onion","price":"9","type":"Soup and Salads"},{"name":"Samoosa Soup","ingredient":"samoosa, beans, chicken stock","price":"7","type":"Soup and Salads"},{"name":"Yellow Bean Soup","ingredient":"yellow bean, onion, tofu","price":"9","type":"Soup and Salads"},{"name":"Mohinga","ingredient":"noddle, fish soup","price":"15","type":"Specials"},{"name":"NanGyi Noddle","ingredient":"mandalay noddle, chicken, chick peas","price":"12","type":"Specials"},{"name":"DaungLan","ingredient":"rice, curry, onion, fish","price":"25","type":"Specials"},{"name":"Sanwin Makin","ingredient":"rice cake, poppy seeeds","price":"7","type":"Desserts"},{"name":"Falooda","ingredient":"rose milk, jelly, egg custard","price":"9","type":"Desserts"},{"name":"Burmese Plam Beer","ingredient":"palm beer","price":"8","type":"Drinks"},{"name":"Royal Myanmar","ingredient":"milk tea","price":"6","type":"Drinks"}]')}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.p="",t.nc=void 0,(()=>{const e=t.p+"assets/bagan.8bd075b4c8508abcba1d.png";var n=t(873),r=t.n(n),a=t(152),i=t.n(a),o=t(44),c=t.n(o),d=t(114),s=t.n(d),p=t(542),l=t.n(p),u=t(204),m=t.n(u),h=t(658),g={};g.styleTagTransform=m(),g.setAttributes=s(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),r()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const f=e=>{let n=document.createElement("div");return e&&n.classList.add(e),n},y=t(197),v=["Appetizer","Main Course","Soup and Salads","Specials","Desserts","Drinks"],x=e=>{let n=document.createElement("div");return e&&n.classList.add(e),n},C=e=>{let n=document.createElement("button");return e&&n.classList.add(e),n},b=n=>{let t=document.querySelector(".contentContainer");switch(t.innerHTML="",n){case"home":t.appendChild((()=>{const n=f("homePage"),t=f("bgImgDiv");t.style.backgroundImage=`url("${e}")`,n.appendChild(t);const r=document.createElement("p");r.textContent="Welcome to Bagan",r.className="headerText";const a=document.createElement("p");a.textContent="Authentic Burmese Cuisine",a.className="subText";const i=(e=>{let n=document.createElement("button");return e&&n.classList.add(e),n})("orderButton");return i.textContent="Order Now",t.appendChild(r),t.appendChild(a),t.appendChild(i),n})());break;case"menu":t.appendChild((()=>{const e=e=>{let n=document.createElement("div");return e&&n.classList.add(e),n},n=(e,n)=>{let t=document.createElement(e);return n&&t.classList.add(n),t},t=e("menuPage"),r=e("menuHeader"),a=n("h2","subText");a.textContent="Our Food Menu";const i=n("h2","subText2");i.textContent="Discover Your New Favroite Cuisine",i.className="subText2",r.appendChild(a),r.appendChild(i),t.appendChild(r);const o=e("menuBody");n("h4","appetizersHeader").textContent="Appetizers";const c=document.createElement("ul");c.className="appetizers",[{name:"Golden Triangle",ingredient:"chicken, peas, tarmarind vinaigrette",price:"7"},{name:"Rangoon Crab",ingredient:"cream Cheese, crab, hot sauce",price:"8.5"},{name:"Fried Fish",ingredient:"fish, snap peas, spicy green dressing",price:"13"}].forEach((e=>{const n=document.createElement("li"),t=document.createElement("p");n.textContent=e.name,t.textContent=e.ingredient;const r=document.createElement("p");r.textContent=e.price,n.appendChild(t),n.appendChild(r),c.appendChild(n)}));const d=y.reduce(((e,n)=>(e[n.type]||(e[n.type]=[]),e[n.type].push(n),e)),{});return v.forEach((t=>{if(d[t]){const r=e("menuSection"),a=n("h4","menuSectionHeader");a.textContent=t;const i=document.createElement("ul");r.appendChild(a),r.appendChild(i),o.appendChild(r),d[t].forEach((e=>{const n=document.createElement("li");n.textContent=e.name;const t=document.createElement("p");t.textContent=e.ingredient;const r=document.createElement("p");r.className="itemPrice",r.textContent=e.price,n.appendChild(t),n.appendChild(r),i.appendChild(n)}))}})),t.appendChild(o),t})());break;case"contact":t.appendChild((()=>{const e=(e=>{let n=document.createElement("div");return e&&n.classList.add(e),n})("contactContent");return e.innerHTML="contactContent test",e})())}};window.addEventListener("load",(()=>{const e=document.getElementById("root");let n=x("headerBar"),t=C("home"),r=C("menu"),a=C("contact");t.innerHTML="Home",r.innerHTML="Menu",a.innerHTML="contact",n.appendChild(t),n.appendChild(r),n.appendChild(a),e.appendChild(n);let i=x("contentContainer");e.appendChild(i),t.addEventListener("click",(()=>b("home"))),r.addEventListener("click",(()=>b("menu"))),a.addEventListener("click",(()=>b("contact"))),b("menu")}))})()})();
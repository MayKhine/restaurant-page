(()=>{"use strict";window.addEventListener("load",(()=>{const e=e=>{let t=document.createElement("div");return e&&t.classList.add(e),t},t=e=>{let t=document.createElement("button");return e&&t.classList.add(e),t},n=e=>{let t=document.querySelector(".contentContainer");const n=e.target.className;switch(t.innerHTML="",n){case"home":t.appendChild((()=>{const e=(e=>{let t=document.createElement("div");return e&&t.classList.add(e),t})("homeContentTest");return e.innerHTML="Home contetnt test",e})());break;case"menu":t.appendChild((()=>{const e=(e=>{let t=document.createElement("div");return e&&t.classList.add(e),t})("menuContent");return e.innerHTML="menuContent test",e})());break;case"contact":t.appendChild((()=>{const e=(e=>{let t=document.createElement("div");return e&&t.classList.add(e),t})("contactContent");return e.innerHTML="contactContent test",e})())}},c=document.getElementById("content");let d=e("headerBar"),a=t("home"),r=t("menu"),o=t("contact");a.innerHTML="Home",r.innerHTML="Menu",o.innerHTML="contact",d.appendChild(a),d.appendChild(r),d.appendChild(o),c.appendChild(d);let s=e("contentContainer");c.appendChild(s),o.addEventListener("click",n),r.addEventListener("click",n),a.addEventListener("click",n),console.log("content",c)}))})();
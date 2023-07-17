import homeContent from "./homeContent";
import menuContent from "./menuContent";
import contactContent from "./contactContent";
import { createElement } from "./createFunctions";

const updateContent = (ele) => {
  let contentContainer = document.querySelector(".contentContainer");
  //reset the button color
  document.querySelector("button.home").style.border = "0px";
  document.querySelector("button.menu").style.border = "0px";
  document.querySelector("button.contact").style.border = "0px";

  // remove previous child append
  contentContainer.innerHTML = "";
  switch (ele.className) {
    case "home":
      document.querySelector("button.home").style.border = "1px solid black";
      const menuEle = document.querySelector("button.menu");
      contentContainer.appendChild(
        homeContent(() => {
          updateContent(menuEle);
        })
      );
      break;
    case "menu":
      document.querySelector("button.menu").style.border = "1px solid black";
      contentContainer.appendChild(menuContent());
      break;
    case "contact":
      document.querySelector("button.contact").style.border = "1px solid black";
      contentContainer.appendChild(contactContent());
      break;
  }
};

const main = () => {
  const root = document.getElementById("root");

  // create three tabs
  let headerBar = createElement("div", { className: "headerBar" });

  let home = createElement("button", { className: "home" });
  let menu = createElement("button", { className: "menu" });
  let contact = createElement("button", { className: "contact" });

  home.innerHTML = "Home";
  menu.innerHTML = "Menu";
  contact.innerHTML = "Contact";
  home.name = "homeButton";
  console.log("Home:", home);

  headerBar.appendChild(home);
  headerBar.appendChild(menu);
  headerBar.appendChild(contact);

  root.appendChild(headerBar);

  let contentContainer = createElement("div", {
    className: "contentContainer",
  });

  root.appendChild(contentContainer);

  home.addEventListener("click", () => updateContent(home));
  menu.addEventListener("click", () => updateContent(menu));
  contact.addEventListener("click", () => updateContent(contact));

  updateContent(home);
};

window.addEventListener("load", main);

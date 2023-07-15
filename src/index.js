import homeContent from "./homeContent";
import menuContent from "./menuContent";
import contactContent from "./contactContent";
import { createElement } from "./createFunctions";

const updateContent = (type) => {
  let contentContainer = document.querySelector(".contentContainer");

  // remove previous child append
  contentContainer.innerHTML = "";
  switch (type) {
    case "home":
      contentContainer.appendChild(homeContent());
      break;
    case "menu":
      contentContainer.appendChild(menuContent());
      break;
    case "contact":
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

  headerBar.appendChild(home);
  headerBar.appendChild(menu);
  headerBar.appendChild(contact);

  root.appendChild(headerBar);

  let contentContainer = createElement("div", {
    className: "contentContainer",
  });
  root.appendChild(contentContainer);

  home.addEventListener("click", () => updateContent("home"));
  menu.addEventListener("click", () => updateContent("menu"));
  contact.addEventListener("click", () => updateContent("contact"));

  //debugging the current page
  updateContent("home");
};

window.addEventListener("load", main);

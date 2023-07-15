import homeContent from "./homeContent";
import menuContent from "./menuContent";
import contactContent from "./contactContent";
import css from "./styles.css";
import bagan from "./assets/bagan.png";

// TODO move to own file
const createDiv = (className) => {
  let div = document.createElement("div");
  if (className) {
    div.classList.add(className);
  }
  return div;
};

const createButton = (className) => {
  let div = document.createElement("button");
  if (className) {
    div.classList.add(className);
  }
  return div;
};

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
  let headerBar = createDiv("headerBar");

  let home = createButton("home");
  let menu = createButton("menu");
  let contact = createButton("contact");

  home.innerHTML = "Home";
  menu.innerHTML = "Menu";
  contact.innerHTML = "contact";

  headerBar.appendChild(home);
  headerBar.appendChild(menu);
  headerBar.appendChild(contact);

  root.appendChild(headerBar);

  let contentContainer = createDiv("contentContainer");
  root.appendChild(contentContainer);

  home.addEventListener("click", () => updateContent("home"));
  menu.addEventListener("click", () => updateContent("menu"));
  contact.addEventListener("click", () => updateContent("contact"));

  //debugging the current page
  updateContent("menu");
};

window.addEventListener("load", main);

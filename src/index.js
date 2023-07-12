import homeContent from "./homeContent";
import menuContent from "./menuContent";
import contactContent from "./contactContent";
const main = () => {
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

  const updateContent = (event) => {
    let contentContainer = document.querySelector(".contentContainer");
    const type = event.target.className;
    //remove previous child append
    contentContainer.innerHTML = "";
    switch (type) {
      case "home":
        contentContainer.appendChild(homeContent());
        break;
      case "menu":
        // contentContainer.innerHTML = "Menu section";
        contentContainer.appendChild(menuContent());
        break;
      case "contact":
        // contentContainer.innerHTML = "Contact section";
        contentContainer.appendChild(contactContent());
        break;
    }
  };

  const content = document.getElementById("content");

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

  content.appendChild(headerBar);

  let contentContainer = createDiv("contentContainer");
  content.appendChild(contentContainer);

  contact.addEventListener("click", updateContent);
  menu.addEventListener("click", updateContent);
  home.addEventListener("click", updateContent);
  console.log("content", content);
};

window.addEventListener("load", main);

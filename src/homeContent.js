import bagan from "./assets/bagan.png";
import css from "./styles.css";

// TODO move to own file
const createDiv = (className) => {
  let div = document.createElement("div");
  if (className) {
    div.classList.add(className);
  }
  return div;
};

const homeContent = () => {
  const home = createDiv("homePage");

  const bgImg = document.createElement("img");
  bgImg.src = bagan;
  bgImg.className = "bgImg";

  // const bgImg = createDiv("bgImg");

  home.appendChild(bgImg);

  return home;
};

export default homeContent;

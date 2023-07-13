import bagan from "./assets/bagan.png";
import css from "./styles.css";

const homeContent = () => {
  const createDiv = (className) => {
    let div = document.createElement("div");
    if (className) {
      div.classList.add(className);
    }
    return div;
  };

  const home = createDiv("home");
  const header = createDiv("header");
  header.style.backgroundColor = "red";
  header.innerHTML = "Welcome to Bagan";

  const about = createDiv("about");
  about.style.backgroundColor = "pink";
  about.innerHTML = "About section";

  const bgImg = document.createElement("img");
  bgImg.src = bagan;
  bgImg.className = "bgImg";

  const bgImgDiv = createDiv("bgImg");
  bgImgDiv.appendChild(bgImg);

  home.appendChild(header);
  home.appendChild(bgImgDiv);
  home.appendChild(about);

  return home;
};

export default homeContent;

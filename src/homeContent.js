import bagan from "./assets/bagan.png";
import css from "./styles.css";
import { createDiv } from "./createFunctions";

// TODO move to own file

const createButton = (className) => {
  let div = document.createElement("button");
  if (className) {
    div.classList.add(className);
  }
  return div;
};

const homeContent = () => {
  const homePage = createDiv("homePage");

  const bgImgDiv = createDiv("bgImgDiv");
  bgImgDiv.style.backgroundImage = `url("${bagan}")`;
  homePage.appendChild(bgImgDiv);

  const restaurantWelcomeText = document.createElement("p");
  restaurantWelcomeText.textContent = "Welcome to Bagan";
  restaurantWelcomeText.className = "header1";
  const restauranSubText = document.createElement("p");
  restauranSubText.textContent = "Authentic Burmese Cuisine";
  restauranSubText.className = "header3";

  const orderButton = createButton("orderButton");
  orderButton.textContent = "Order Now";

  bgImgDiv.appendChild(restaurantWelcomeText);
  bgImgDiv.appendChild(restauranSubText);
  bgImgDiv.appendChild(orderButton);

  return homePage;
};

export default homeContent;

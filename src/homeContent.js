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
  restaurantWelcomeText.className = "headerText";
  const restauranSubText = document.createElement("p");
  restauranSubText.textContent = "Authentic Burmese Cuisine";
  restauranSubText.className = "subText";

  const orderButton = createButton("orderButton");
  orderButton.textContent = "Order Now";

  bgImgDiv.appendChild(restaurantWelcomeText);
  bgImgDiv.appendChild(restauranSubText);
  bgImgDiv.appendChild(orderButton);

  return homePage;
};

export default homeContent;

import bagan from "./assets/bagan.png";
import "./styles.css";
import { createElement } from "./createFunctions";

const homeContent = () => {
  const homePage = createElement("div", { className: "homePage" });

  const bgImgDiv = createElement("div", { className: "bgImgDiv" });
  bgImgDiv.style.backgroundImage = `url("${bagan}")`;
  homePage.appendChild(bgImgDiv);

  const restaurantWelcomeText = createElement("p");
  restaurantWelcomeText.textContent = "Welcome to Bagan";
  restaurantWelcomeText.className = "header1";
  const restauranSubText = createElement("p");
  restauranSubText.textContent = "Authentic Burmese Cuisine";
  restauranSubText.className = "header3";

  const orderButton = createElement("button", { className: "orderButton" });
  orderButton.textContent = "Order Now";

  bgImgDiv.appendChild(restaurantWelcomeText);
  bgImgDiv.appendChild(restauranSubText);
  bgImgDiv.appendChild(orderButton);

  return homePage;
};

export default homeContent;

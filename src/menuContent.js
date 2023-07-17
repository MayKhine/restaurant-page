import { createElement } from "./createFunctions";

const menuJson = require("./assets/menu.json");

const menuList = [
  "Appetizer",
  "Main Course",
  "Soup and Salads",
  "Specials",
  "Desserts",
  "Drinks",
];

const menuContent = () => {
  const menuPage = createElement("div", { className: "menuPage" });

  const menuHeader = createElement("div", { className: "header" });
  const menuText = createElement("h2", { className: "header2" });
  menuText.textContent = "Our Food Menu";
  const menuSubText = createElement("h2", { className: "header3" });
  menuSubText.textContent = "Discover Your New Favroite Cuisine";

  menuHeader.appendChild(menuText);
  menuHeader.appendChild(menuSubText);

  const menuWrapper = createElement("div", { className: "wrapper2" });
  // menuPage.appendChild(menuWrapper);
  // menuWrapper.appendChild(menuHeader);

  menuPage.appendChild(menuHeader);

  const menuBody = createElement("div", { className: "body" });

  const catogries = menuJson.reduce((acc, cur) => {
    if (!acc[cur.type]) {
      acc[cur.type] = [];
    }
    acc[cur.type].push(cur);
    return acc;
  }, {});

  menuList.forEach((curSection) => {
    if (catogries[curSection]) {
      //create header
      const menuSection = createElement("div", { className: "menuSection" });
      const menuSectionHeader = createElement("h4", {
        className: "menuSectionHeader",
      });
      menuSectionHeader.textContent = curSection;
      const menuSectionDetail = createElement("ul");
      menuSection.appendChild(menuSectionHeader);
      menuSection.appendChild(menuSectionDetail);

      menuBody.appendChild(menuSection);

      catogries[curSection].forEach((item) => {
        //create item
        const menuItem = createElement("li");
        menuItem.textContent = item.name;
        const menuItemIngredient = createElement("p");
        menuItemIngredient.textContent = item.ingredient;
        const menuItemPrice = createElement("p");
        menuItemPrice.className = "itemPrice";
        menuItemPrice.textContent = item.price;

        //add item to header
        menuItem.appendChild(menuItemIngredient);
        menuItem.appendChild(menuItemPrice);
        menuSectionDetail.appendChild(menuItem);
      });
    }
  });
  // const menuWrapper = createElement("div", { className: "wrapper2" });
  // menuPage.appendChild(menuWrapper);
  // menuWrapper.appendChild(menuBody);
  // menuWrapper.appendChild(menuBody);

  menuPage.appendChild(menuBody);
  menuWrapper.appendChild(menuPage);
  return menuWrapper;
  // return menuPage;
};

export default menuContent;

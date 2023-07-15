import { createDiv } from "./createFunctions";

const menuJson = require("./assets/menu.json");

const menuList = [
  "Appetizer",
  "Main Course",
  "Soup and Salads",
  "Specials",
  "Desserts",
  "Drinks",
];

// console.log("menuJSON:", menuJson);
const menuContent = () => {
  const createText = (className) => {
    let text = document.createElement("p");
    if (className) {
      text.classList.add(className);
    }
    return text;
  };

  const createHeader = (type, className) => {
    let header = document.createElement(type);
    if (className) {
      header.classList.add(className);
    }
    return header;
  };
  const menuPage = createDiv("menuPage");

  const menuHeader = createDiv("header");
  const menuText = createHeader("h2", "header2");
  menuText.textContent = "Our Food Menu";
  const menuSubText = createHeader("h2", "header3");
  menuSubText.textContent = "Discover Your New Favroite Cuisine";

  menuHeader.appendChild(menuText);
  menuHeader.appendChild(menuSubText);
  menuPage.appendChild(menuHeader);

  const menuBody = createDiv("body");

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
      const menuSection = createDiv("menuSection");
      const menuSectionHeader = createHeader("h4", "menuSectionHeader");
      menuSectionHeader.textContent = curSection;
      const menuSectionDetail = document.createElement("ul");
      // menuSection.className = curSection;
      menuSection.appendChild(menuSectionHeader);
      menuSection.appendChild(menuSectionDetail);

      menuBody.appendChild(menuSection);

      catogries[curSection].forEach(
        (item) => {
          //create item
          const menuItem = document.createElement("li");
          menuItem.textContent = item.name;
          const menuItemIngredient = document.createElement("p");
          menuItemIngredient.textContent = item.ingredient;
          const menuItemPrice = document.createElement("p");
          menuItemPrice.className = "itemPrice";
          menuItemPrice.textContent = item.price;

          //add item to header
          menuItem.appendChild(menuItemIngredient);
          menuItem.appendChild(menuItemPrice);
          menuSectionDetail.appendChild(menuItem);
        }

        //add header to body
      );
    }
  });

  menuPage.appendChild(menuBody);

  return menuPage;
};

export default menuContent;

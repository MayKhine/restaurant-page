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
  const createDiv = (className) => {
    let div = document.createElement("div");
    if (className) {
      div.classList.add(className);
    }
    return div;
  };

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

  const menuHeader = createDiv("menuHeader");
  const menuText = createHeader("h2", "subText");
  menuText.textContent = "Our Food Menu";
  const menuSubText = createHeader("h2", "subText2");
  menuSubText.textContent = "Discover Your New Favroite Cuisine";
  menuSubText.className = "subText2";

  menuHeader.appendChild(menuText);
  menuHeader.appendChild(menuSubText);
  menuPage.appendChild(menuHeader);

  const menuBody = createDiv("menuBody");

  const appetizersArr = [
    {
      name: "Golden Triangle",
      ingredient: "chicken, peas, tarmarind vinaigrette",
      price: "7",
    },
    {
      name: "Rangoon Crab",
      ingredient: "cream Cheese, crab, hot sauce",
      price: "8.5",
    },
    {
      name: "Fried Fish",
      ingredient: "fish, snap peas, spicy green dressing",
      price: "13",
    },
  ];

  const appetizersHeader = createHeader("h4", "appetizersHeader");
  appetizersHeader.textContent = "Appetizers";
  const appetizersSection = document.createElement("ul");
  appetizersSection.className = "appetizers";

  appetizersArr.forEach((item) => {
    const menuItem = document.createElement("li");
    const menuItemIngredient = document.createElement("p");
    menuItem.textContent = item.name;
    menuItemIngredient.textContent = item.ingredient;
    const menuItemPrice = document.createElement("p");
    menuItemPrice.textContent = item.price;
    menuItem.appendChild(menuItemIngredient);
    menuItem.appendChild(menuItemPrice);
    appetizersSection.appendChild(menuItem);
  });

  // console.log(menuBody);
  // menuBody.appendChild(appetizersHeader);
  // menuBody.appendChild(appetizersSection);
  // menuPage.appendChild(menuBody);

  /*
  menuJson.forEach((item) => {
    // iterate over the json file using menuList order
    menuList.forEach((listItem) => {
      const menuSectionHeader = createHeader("h4", item.type);
      menuSectionHeader.textContent = item.type;
      if (listItem == item.type) {
        //create menu section: app, main
        const menuSection = document.createElement("ul");
        menuSection.className = item.type;
        //create each item
        const menuItem = document.createElement("li");
        menuItem.textContent = item.name;
        const menuItemIngredient = document.createElement("p");
        menuItemIngredient.textContent = item.ingredient;
        const menuItemPrice = document.createElement("p");
        menuItemPrice.textContent = item.price;
        menuItem.appendChild(menuItemIngredient);
        menuItem.appendChild(menuItemPrice);
        //attach item to section
        menuSection.appendChild(menuItem);
        //attach section to body
        menuSectionHeader.appendChild(menuSection);
      }
      menuBody.appendChild(menuSectionHeader);
    });
  });
*/

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

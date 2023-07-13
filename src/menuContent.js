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

  const mainCourse = [
    "Coconut Chicken Curry",
    "Golden Egg Curry",
    "Fish Curry",
    "Pork Curry",
  ];
  const soupSalds = [
    "Tea leaves salad",
    "Tomato Salad",
    "Mixed Noddle Salad",
    "Samoosa Soup",
    "Yellow Bean Soup",
  ];
  const specials = ["Mohinga", "NanGyi Noddle", "DaungLan"];
  const desserts = ["Sanwin Makin", "Falooda"];
  const drinks = ["Burmese Plam Beer", "Royal Myanmar"];

  // const appetizersSection = createDiv("appetizers");
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

  console.log(menuBody);
  menuBody.appendChild(appetizersHeader);
  menuBody.appendChild(appetizersSection);
  menuPage.appendChild(menuBody);
  return menuPage;
};

export default menuContent;

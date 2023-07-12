const menuContent = () => {
  const createDiv = (className) => {
    let div = document.createElement("div");
    if (className) {
      div.classList.add(className);
    }
    return div;
  };

  const menuContent = createDiv("menuContent");
  menuContent.innerHTML = "menuContent test";
  return menuContent;
};

export default menuContent;

const homeContent = () => {
  const createDiv = (className) => {
    let div = document.createElement("div");
    if (className) {
      div.classList.add(className);
    }
    return div;
  };

  const testDiv = createDiv("homeContentTest");
  testDiv.innerHTML = "Home contetnt test";
  return testDiv;
};

export default homeContent;

const contactContent = () => {
  const createDiv = (className) => {
    let div = document.createElement("div");
    if (className) {
      div.classList.add(className);
    }
    return div;
  };

  const contactContent = createDiv("contactContent");
  contactContent.innerHTML = "contactContent test";
  return contactContent;
};

export default contactContent;

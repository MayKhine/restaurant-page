export const createDiv = (className) => {
  return createElement("div", { className });
};

export const createElement = (eleType, options) => {
  const ele = document.createElement(eleType);
  if (options?.className) {
    ele.classList.add(options.className);
  }
  return ele;
};

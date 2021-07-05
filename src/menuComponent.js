import Pasta from "./pasta.jpg";

function createMenuItem(name, image) {
  const menuItem = document.createElement("div");
  const nameElement = document.createElement("p");
  const imageElement = document.createElement("img");

  nameElement.innerHTML = name;
  imageElement.src = image;

  menuItem.appendChild(nameElement);
  menuItem.appendChild(imageElement);
  return menuItem;
}

function menuComponent() {
  const menu = document.createElement("div");

  menu.appendChild(createMenuItem("Pasta Straordinaria", Pasta));

  return menu;
}

export default menuComponent;

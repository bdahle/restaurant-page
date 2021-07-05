import Pasta from "./pasta.jpg";

function menuComponent() {
  const tab = document.createElement("div");
  const introduction = document.createElement("p");
  const image = document.createElement("img");

  introduction.innerHTML = "Pasta Straordinaria";
  image.src = Pasta;

  tab.appendChild(introduction);
  tab.appendChild(image);

  return tab;
}

export default menuComponent;

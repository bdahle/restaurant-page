import Outside from "./images/outside.jpg";

function contactComponent() {
  const tab = document.createElement("div");
  const introduction = document.createElement("p");
  const image = document.createElement("img");

  introduction.innerHTML = `Adresse:
  Fantasticoveien 1`;
  image.src = Outside;

  tab.appendChild(introduction);
  tab.appendChild(image);

  return tab;
}

export default contactComponent;

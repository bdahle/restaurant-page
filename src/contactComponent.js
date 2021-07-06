import Outside from "./images/outside.jpg";

function contactComponent() {
  const tab = document.createElement("div");
  const address = document.createElement("p");
  const image = document.createElement("img");

  address.innerHTML = "Adresse: Fantasticoveien 1, Oslo";
  image.src = Outside;

  tab.appendChild(address);
  tab.appendChild(image);

  return tab;
}

export default contactComponent;

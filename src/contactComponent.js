import Restaurant from "./images/restaurant.jpg";

function contactComponent() {
  const tab = document.createElement("div");
  const introduction = document.createElement("p");
  const image = document.createElement("img");

  introduction.innerHTML = "Kontakt oss";
  image.src = Restaurant;

  tab.appendChild(introduction);
  tab.appendChild(image);

  return tab;
}

export default contactComponent;

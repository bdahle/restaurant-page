import Restaurant from "./images/restaurant.jpg";

function homeComponent() {
  const tab = document.createElement("div");
  const introduction = document.createElement("p");
  const image = document.createElement("img");

  introduction.innerHTML =
    "Hos Ristorante Fantastico lager vi autentisk italiensk mat med en moderne vri.";
  image.src = Restaurant;

  tab.appendChild(introduction);
  tab.appendChild(image);

  return tab;
}

export default homeComponent;

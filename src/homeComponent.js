import Restaurant from "./restaurant.jpg";

function homeComponent() {
  const content = document.getElementById("content");

  const tab = document.createElement("div");
  const headline = document.createElement("h1");
  const introduction = document.createElement("p");
  const image = document.createElement("img");

  headline.innerHTML = "Ristorante Fantastico";
  introduction.innerHTML =
    "Hos Ristorante Fantastico lager vi autentisk italiensk mat med en moderne vri.";
  image.src = Restaurant;

  tab.appendChild(headline);
  tab.appendChild(introduction);
  tab.appendChild(image);
  content.appendChild(tab);
}

export default homeComponent;

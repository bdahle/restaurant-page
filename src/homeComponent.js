import Restaurant from "./restaurant.jpg";

function homeComponent() {
  const content = document.getElementById("content");

  const tab = document.createElement("div");

  const headline = document.createElement("h1");
  headline.innerHTML = "Ristorante Fantastico";

  const introduction = document.createElement("p");
  introduction.innerHTML =
    "Hos Ristorante Fantastico lager vi autentisk italiensk mat med en moderne vri.";

  const image = document.createElement("img");
  image.src = Restaurant;

  tab.appendChild(headline);
  tab.appendChild(introduction);
  tab.appendChild(image);

  content.appendChild(tab);
}

export default homeComponent;

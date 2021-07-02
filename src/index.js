const content = document.getElementById("content");

const headline = document.createElement("h1");
headline.innerHTML = "Ristorante Fantastico";

const introduction = document.createElement("p");
introduction.innerHTML =
  "Hos Ristorante Fantastico lager vi autentisk italiensk mat med en moderne vri.";

const image = document.createElement("img");
image.src = "restaurant.jpg";

content.appendChild(headline);
content.appendChild(introduction);
content.appendChild(image);

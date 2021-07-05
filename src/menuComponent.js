import Pasta from "./pasta.jpg";

function menuComponent() {
  const content = document.getElementById("content");

  const tab = document.createElement("div");
  const headline = document.createElement("h1");
  const introduction = document.createElement("p");
  const image = document.createElement("img");

  headline.innerHTML = "Meny";
  introduction.innerHTML = "Pasta Straordinaria";
  image.src = Pasta;

  tab.appendChild(headline);
  tab.appendChild(introduction);
  tab.appendChild(image);
  content.appendChild(tab);
}

export default menuComponent;

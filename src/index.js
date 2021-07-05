import homeComponent from "./homeComponent";
import menuComponent from "./menuComponent";

const header = document.createElement("div");
header.id = "header";
document.body.appendChild(header);

const headline = document.createElement("h1");
headline.innerHTML = "Ristorante Fantastico";
header.appendChild(headline);

const tabSwitcher = document.createElement("div");
const homeButton = document.createElement("button");
homeButton.addEventListener("click", function () {
  currentTab.innerHTML = "";
  currentTab.appendChild(homeComponent());
});
const menuButton = document.createElement("button");
menuButton.addEventListener("click", function () {
  currentTab.innerHTML = "";
  currentTab.appendChild(menuComponent());
});
homeButton.innerHTML = "Hjem";
menuButton.innerHTML = "Meny";
tabSwitcher.appendChild(homeButton);
tabSwitcher.appendChild(menuButton);

header.appendChild(tabSwitcher);

const currentTab = document.createElement("div");
currentTab.id = "currentTab";
document.body.appendChild(currentTab);

currentTab.appendChild(homeComponent());

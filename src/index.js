import contactComponent from "./contactComponent";
import homeComponent from "./homeComponent";
import menuComponent from "./menuComponent";
import "./styles.css";

const content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);

const header = document.createElement("div");
header.id = "header";
content.appendChild(header);

const headline = document.createElement("h1");
headline.innerHTML = "Ristorante Fantastico";
header.appendChild(headline);

const tabSwitcher = document.createElement("div");
tabSwitcher.id = "tabSwitcher";

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
const contactButton = document.createElement("button");
contactButton.addEventListener("click", function () {
  currentTab.innerHTML = "";
  currentTab.appendChild(contactComponent());
});
homeButton.innerHTML = "Hjem";
menuButton.innerHTML = "Meny";
contactButton.innerHTML = "Kontakt";
tabSwitcher.appendChild(homeButton);
tabSwitcher.appendChild(menuButton);
tabSwitcher.appendChild(contactButton);

header.appendChild(tabSwitcher);

const currentTab = document.createElement("div");
currentTab.id = "currentTab";
content.appendChild(currentTab);

currentTab.appendChild(homeComponent());

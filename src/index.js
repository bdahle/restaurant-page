import homeComponent from "./homeComponent";
import menuComponent from "./menuComponent";

const contentDiv = document.createElement("div");
contentDiv.id = "content";
document.body.appendChild(contentDiv);

menuComponent();

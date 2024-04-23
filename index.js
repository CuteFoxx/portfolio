import { gradients } from "./gradients";

const root = document.querySelector(":root");
const projectLinks = document.querySelector(".projects-nav");
const projects = document.querySelectorAll(".project");
const logo = document.querySelector(".header__logo");
const welcomeMsg = document.querySelector("#welcome");

let prevClickedAnchor = null;
let prevNumber = null;

logo.addEventListener("click", (e) => {
  e.preventDefault();

  switchTab(e.target.closest("a"));
});

projectLinks.addEventListener("click", (e) => {
  e.preventDefault();

  if (!e.target.closest("a")) return;

  switchTab(e.target);
});

const switchTab = (clickedLink) => {
  changeColor();

  const tab = document.querySelector(`${clickedLink.getAttribute("href")}`);
  projects.forEach((project) => {
    project.classList.remove("project-show");
  });
  if (clickedLink === prevClickedAnchor) {
    welcomeMsg.classList.add("project-show");
    prevClickedAnchor = null;
  } else {
    tab.classList.add("project-show");
    prevClickedAnchor = clickedLink;
  }
};

//change border gradient color
const changeColor = () => {
  let randomNumber = Math.floor(Math.random() * gradients.length);

  if (prevNumber === randomNumber) {
    changeColor();
    return;
  }

  prevNumber = randomNumber;

  root.style.setProperty("--gradient-1", gradients[randomNumber]["gradient-1"]);
  root.style.setProperty("--gradient-2", gradients[randomNumber]["gradient-2"]);
};

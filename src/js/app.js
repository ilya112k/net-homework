import Game from "./Game";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.classList.add("game-container");
  document.body.appendChild(container);
  const game = new Game(container);
  game.start();
});

console.log("app.js included");

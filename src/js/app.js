import Game from "./game/Game";
import CardWidget from "./card-checker/CardWidget";

function initGame() {
  const gameContainer = document.querySelector(".widget-game");
  const container = document.createElement("div");
  container.classList.add("game-container");
  gameContainer.appendChild(container);
  const game = new Game(container);
  game.start();
}

function initCardWidget() {
  const cardWidget = new CardWidget(".card-form");
  cardWidget.start();
}

document.addEventListener("DOMContentLoaded", () => {
  initGame();
  initCardWidget();
});

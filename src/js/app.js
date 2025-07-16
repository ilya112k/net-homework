import Game from "./game/Game";

function initGame() {
  const gameContainer = document.querySelector(".widget-game");
  const container = document.createElement("div");
  container.classList.add("game-container");
  gameContainer.appendChild(container);
  const game = new Game(container);
  game.start();
}


document.addEventListener("DOMContentLoaded", () => {
  initGame();
});

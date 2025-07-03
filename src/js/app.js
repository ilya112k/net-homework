import Game from './Game';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  container.classList.add('game-container');
  document.body.appendChild(container);
  new Game(container);
});

console.log("app.js included");

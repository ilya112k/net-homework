import Board from "./Board";
import Goblin from "./Goblin";
import Score from "./Score";

export default class Game {
  constructor(container) {
    this.container = container;
    this.board = new Board();
    this.goblin = new Goblin();
    this.score = new Score();
    this.currentIndex = -1;
    this.timer = null;

    this.container.appendChild(this.score.getElement());
    this.container.appendChild(this.board.getElement());

    this.handleClick = this.handleClick.bind(this);
    this.start();
  }

  start() {
    this.board.getElement().addEventListener("click", this.handleClick);
    this.nextMove();
  }

  nextMove() {
    if (this.score.isGameOver()) {
      alert("Игра окончена!");
      clearTimeout(this.timer);
      return;
    }

    const { element, index } = this.board.getRandomCell(this.currentIndex);
    this.currentIndex = index;
    this.goblin.showIn(element);

    this.timer = setTimeout(() => {
      if (this.goblin.getElement().parentElement) {
        this.score.incrementMiss();
      }
      this.nextMove();
    }, 1000);
  }

  handleClick(event) {
    if (event.target === this.goblin.getElement()) {
      this.score.incrementHit();
      this.goblin.remove();
    }
  }
}

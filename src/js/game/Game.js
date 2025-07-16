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

    this.container.append(this.score.getElement());
    this.container.append(this.board.getElement());

    this.handleClick = this.handleClick.bind(this);
  }

  start() {
    this.board.createBoard();
    this.score.updateView();
    this.board.getElement().addEventListener("click", this.handleClick);
    this.board.getModal().addEventListener("click", () => this.board.modalEl.classList.remove('active'));
    this.nextMove();
  }

  nextMove() {
    if (this.score.isYourLose()) {
      this.board.printLose();
      clearTimeout(this.timer);
      return;
    }

    if (this.score.isYourWin()) {
      this.board.printWin();
      clearTimeout(this.timer);
      return;
    }

    const { element, index } = this.board.getRandomCell(this.currentIndex);
    this.currentIndex = index;
    this.goblin.showIn(element);

    this.timer = setTimeout(() => {
      this.nextMove();
    }, 1000);
  }

  handleClick(event) {
    if (event.target === this.goblin.getElement()) {
      this.score.incrementHit();
      this.goblin.remove();
    } else  {
      this.score.incrementMiss();
      this.goblin.remove();
    }
  }
}

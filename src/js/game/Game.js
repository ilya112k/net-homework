import Board from "./Board";
import Goblin from "./Goblin";
import Score from "./Score";
import Modal from "./Modal";

export default class Game {
  constructor(container) {
    this.container = container;
    this.board = new Board();
    this.goblin = new Goblin();
    this.score = new Score();
    this.modal = new Modal();
    this.currentIndex = -1;
    this.timer = null;

    this.container.append(this.score.getElement());
    this.container.append(this.board.getElement());
    this.container.append(this.modal.getModal());

    this.handleClick = this.handleClick.bind(this);
  }

  start() {
    this.board.createBoard();
    this.score.updateView();
    this.board.getElement().addEventListener("click", this.handleClick);
    this.modal.start();
    this.nextMove();
  }

  nextMove() {
    if (this.score.isYourLose()) {
      this.modal.printLose();
      clearTimeout(this.timer);
      return;
    }

    if (this.score.isYourWin()) {
      this.modal.printWin();
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
    } else  {
      this.score.incrementMiss();
      this.goblin.remove();
    }
  }
}

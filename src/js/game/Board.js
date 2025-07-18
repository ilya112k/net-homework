export default class Board {
  constructor(size = 4) {
    this.size = size;
    this.cells = [];
    this.boardEl = document.createElement("div");
    this.boardEl.classList.add("board");
  }

  createBoard() {
    for (let i = 0; i < this.size * this.size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.boardEl.append(cell);
      this.cells.push(cell);
    }
  }

  getRandomCell(excludeIndex) {
    let index;
    do {
      index = Math.floor(Math.random() * this.cells.length);
    } while (index === excludeIndex);
    return { element: this.cells[index], index };
  }

  getElement() {
    return this.boardEl;
  }
}

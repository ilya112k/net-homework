export default class Score {
  constructor() {
    this.hit = 0;
    this.miss = 0;
    this.scoreEl = document.createElement("div");
  }

  incrementHit() {
    this.hit += 1;
    this.updateView();
  }

  incrementMiss() {
    this.miss += 1;
    this.updateView();
  }

  updateView() {
    this.scoreEl.textContent = `Попаданий: ${this.hit} | Промахов: ${this.miss}`;
  }

  getElement() {
    return this.scoreEl;
  }

  isGameOver() {
    return this.miss >= 5;
  }
}

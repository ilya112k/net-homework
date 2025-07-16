export default class Modal {
  constructor() {
    this.modalEl = document.createElement('div');
    this.modalEl.classList.add('modal');

    this.contentEl = document.createElement('div');
    this.contentEl .classList.add('modal-content');

    this.modalCloseEl = document.createElement('div');
    this.modalCloseEl.classList.add('modal-content_close');
    this.modalCloseEl.innerHTML = '&#65794;';

    this.modalResultEl = document.createElement('div');
    this.modalResultEl.classList.add('modal-content_text');

    this.contentEl.append(this.modalCloseEl,  this.modalResultEl);
    this.modalEl.append(this.contentEl);
  }

  start() {
    this.modalEl.addEventListener("click", () => this.modalEl.classList.remove('active'));
  }

  printWin() {
    this.modalEl.classList.add('active');
    this.modalResultEl.textContent = `Игра окончена! Вы выиграли!`;
  }

  printLose() {
    this.modalEl.classList.add('active');
    this.modalResultEl.textContent = `Игра окончена! Вы проиграли!`;
  }

  getModal() {
    return this.modalEl;
  }
}

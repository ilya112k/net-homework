import goblinImage from './../img/goblin.png';

export default class Goblin {
  constructor() {
    this.img = document.createElement('img');
    this.img.src = goblinImage;
    this.img.classList.add('goblin');
  }

  showIn(cell) {
    this.remove();
    cell.appendChild(this.img);
  }

  remove() {
    if (this.img.parentElement) {
      this.img.parentElement.removeChild(this.img);
    }
  }

  getElement() {
    return this.img;
  }
}

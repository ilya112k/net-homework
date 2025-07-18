export default class Goblin {
  constructor() {
    this.img = document.createElement("img");
    this.img.src = "./img/goblin.png";
    this.img.classList.add("goblin");
    this.img.alt = "Goblin"
  }

  showIn(cell) {
    this.remove();
    cell.append(this.img);
  }

  remove() {
    if (this.img.parentElement) {
      this.img.parentElement.innerHTML = "";
    }
  }

  getElement() {
    return this.img;
  }
}

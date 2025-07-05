import CardValidator from "./cardValidator.js";
import CardType from "./cardType.js";

export default class CardWidget {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.input = this.form.querySelector(".card-form_input");
    this.button = this.form.querySelector(".card-form_button");
    this.icons = this.form.querySelectorAll(".card-form_card-icon");
    this.result = this.form.querySelector(".card-form_validation-result");
  }

  start() {
    this.addEventListeners();
  }

  addEventListeners() {
    this.input.addEventListener("input", () => this.onInput());
    this.button.addEventListener("click", (e) => this.onValidate(e));
  }

  onInput() {
    const cardNumber = this.input.value;
    const type = CardType.detect(cardNumber);

    this.updateIcons(type);
  }

  updateIcons(activeType) {
    this.icons.forEach((icon) => {
      if (icon.dataset.type === activeType) {
        icon.classList.add("active");
        icon.classList.remove("disabled");
      } else {
        icon.classList.remove("active");
        icon.classList.add("disabled");
      }
    });
  }

  onValidate(e) {
    e.preventDefault();

    const cardNumber = this.input.value;
    const isValid = CardValidator.validateLuhn(cardNumber);

    if (this.result) {
      this.result.textContent = isValid ? "✓ Card is valid" : "✗ Invalid card";
      this.result.style.color = isValid ? "green" : "red";
    }
  }
}

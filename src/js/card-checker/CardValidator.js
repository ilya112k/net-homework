export default class CardValidator {
  static validateLuhn(cardNumber) {
    const cleanNumber = cardNumber.replace(/\D/g, "");
    const digits = cleanNumber.split("").reverse().map(Number);

    const sum = digits.reduce((acc, digit, idx) => {
      if (idx % 2 === 1) {
        const doubled = digit * 2;
        return acc + (doubled > 9 ? doubled - 9 : doubled);
      }
      return acc + digit;
    }, 0);

    return sum % 10 === 0;
  }
}

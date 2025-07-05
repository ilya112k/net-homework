export default class CardType {
  static detect(cardNumber) {
    const clean = cardNumber.replace(/\D/g, "");

    const patterns = [
      { type: "visa", regex: /^4[0-9]{12}(?:[0-9]{3})?$/ },
      {
        type: "mastercard",
        regex:
          /^(5[1-5][0-9]{14}|2(2[2-9]|[3-6][0-9]|7[01])[0-9]{12}|2720[0-9]{12})$/,
      },
      { type: "amex", regex: /^3[47][0-9]{13}$/ },
      { type: "discover", regex: /^(6011|65|64[4-9]|622)[0-9]{12,15}$/ },
      { type: "jcb", regex: /^35[2-8][0-9]{12,16}$/ },
      { type: "diners", regex: /^3(0[0-5]|[68])[0-9]{11}$/ },
      { type: "mir", regex: /^220[0-4][0-9]{12}$/ },
    ];

    for (const { type, regex } of patterns) {
      if (regex.test(clean)) return type;
    }

    return "unknown";
  }
}

import CardValidator from "./cardValidator";

describe("CardValidator", () => {
  test("invalid number fails Luhn", () => {
    expect(CardValidator.validateLuhn("1234567890123456")).toBe(false);
  });

  test("valid Visa passes Luhn", () => {
    expect(CardValidator.validateLuhn("4111111111111111")).toBe(true);
  });
});

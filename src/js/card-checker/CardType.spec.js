import CardType from "./CardType";

describe("CardType", () => {
  test("detects Visa", () => {
    expect(CardType.detect("4532752261180157")).toBe("visa");
  });

  test("detects MasterCard", () => {
    expect(CardType.detect("5381313182052477")).toBe("mastercard");
  });

  test("detects American Express", () => {
    expect(CardType.detect("341384227027600")).toBe("amex");
  });

  test("detects Mir", () => {
    expect(CardType.detect("2204888888888888")).toBe("mir");
  });

  test("detects Diners", () => {
    expect(CardType.detect("30492910424186")).toBe("diners");
  });

  test("detects JCB", () => {
    expect(CardType.detect("3589182287130255")).toBe("jcb");
  });

  test("detects Discover", () => {
    expect(CardType.detect("6011118579553730")).toBe("discover");
  });

  test("detects unknown", () => {
    expect(CardType.detect("9999999999999999")).toBe("unknown");
  });
});

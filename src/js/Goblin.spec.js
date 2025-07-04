/**
 * @jest-environment jsdom
 */
/* eslint-env jest */
import Goblin from "./Goblin";

describe("Goblin Tests", () => {
  let goblin;
  beforeEach(function () {
    goblin = new Goblin();
  });

  afterEach(function () {
    goblin = null;
  });

  test("init", () => {
    // arrange
    const goblinImageClass = "goblin";
    const goblinImageName = "goblin.png";
    // assert
    expect(goblin.img.classList.contains(goblinImageClass)).toBe(true);
    expect(goblin.img.src).toContain(goblinImageName);
  });

  test("get element", () => {
    // act
    const result = goblin.getElement();

    // assert
    expect(result).toBe(goblin.img);
  });

  test("remove goblin", () => {
    // arrange
    const parentNode = document.createElement("div");
    parentNode.appendChild(goblin.img);
    const resultAfterRemove = "";
    // act
    goblin.remove();

    // assert
    expect(parentNode.innerHTML).toBe(resultAfterRemove);
  });

  test("show in", () => {
    // arrange
    const parentNode = document.createElement("div");

    // act
    goblin.showIn(parentNode);

    // assert
    expect(parentNode.childNodes[0]).toBe(goblin.getElement());
  });
});

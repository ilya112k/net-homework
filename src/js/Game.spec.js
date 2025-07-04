/**
 * @jest-environment jsdom
 */
/* eslint-env jest */
import Game from "./Game";
import { faker } from "@faker-js/faker";

describe("Game Tests", () => {
  let game;
  let defaultContainer;
  let defaultCurrentIndex = -1;
  let defaultTimer = null;

  beforeEach(() => {
    defaultContainer = document.createElement("div");
    game = new Game(defaultContainer);
  });

  afterEach(() => {
    game = null;
    defaultContainer = null;
  });

  test("init", () => {
    // assert
    expect(game.container).toBe(defaultContainer);
    expect(game.currentIndex).toBe(defaultCurrentIndex);
    expect(game.timer).toBe(defaultTimer);
  });

  test("Next move and game is over", () => {
    game.score = {
      isGameOver() {
        return true;
      },
    };
    window.alert = jest.fn();

    game.nextMove();

    expect(game.timer).toBe(null);
  });

  test("Next move is correct", () => {
    const randomElement = document.createElement("div");
    const randomIndex = faker.number.int({ min: 0, max: 100 });

    game.score = {
      isGameOver() {
        return false;
      },
    };

    game.board = {
      getRandomCell() {
        return {
          element: randomElement,
          index: randomIndex,
        };
      },
    };

    game.nextMove();

    expect(game.currentIndex).toBe(randomIndex);
  });

  test("Game start", () => {
    const node = document.createElement("div");
    // arrange
    game.board = {
      createBoard: jest.fn(),
      getElement: () => node,
    };
    game.score = { updateView: jest.fn() };
    game.nextMove = jest.fn();

    // act
    game.start();

    // assert
    expect(game.nextMove).toHaveBeenCalled();
  });

  test("Handle click", () => {
    const node = document.createElement("div");
    const event = {
      target: node,
    };
    const countHitAfterClick = 1;

    game.goblin = {
      getElement() {
        return node;
      },
      remove() {},
    };

    game.handleClick(event);

    expect(game.score.hit).toBe(countHitAfterClick);
  });
});

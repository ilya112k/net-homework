/**
 * @jest-environment jsdom
 */
import Game from "./Game";
import { faker} from "@faker-js/faker";

describe("Game Tests", () => {
  let game;
  let defaultContainer;
  let defaultCurrentIndex = -1;
  let defaultTimer = null;

  beforeEach(() => {
    defaultContainer = document.createElement("div");
    game = new Game(defaultContainer);
  })

  afterEach(() => {
    game = null;
    defaultContainer = null;
  })

  test('init', () => {
    // assert
    expect(game.container).toBe(defaultContainer);
    expect(game.currentIndex).toBe(defaultCurrentIndex);
    expect(game.timer).toBe(defaultTimer);
  })

  test('Next move and game is over', () => {
    game.score = {
      isGameOver() {
        return true;
      }
    }
    window.alert = jest.fn();

    game.nextMove();

    expect(game.timer).toBe(null);
  })

  test('Next move is correct', () => {
    const randomElement = document.createElement('div');
    const randomIndex = faker.number.int({min: 0, max: 100})

    game.score = {
      isGameOver() {
        return false;
      }
    }

    game.board = {
      getRandomCell() {
        return {
          element: randomElement,
          index: randomIndex
        }
      }
    }

    game.nextMove();

    expect(game.currentIndex).toBe(randomIndex);
  })

  test('game start', () => {
    // arrange
    game.board = { createBoard: jest.fn(), getElement: () => document.createElement('div') };
    game.score = { updateView: jest.fn() };
    game.nextMove = jest.fn();
    // act
    game.start();
  });

  test('handle click', () => {
    const node = document.createElement('div');

    game.handleClick({
      target: node
    })
    game.goblin = {
      getElement() { return node; },
    }

    game.handleClick(node);
  })
})

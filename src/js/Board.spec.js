/**
 * @jest-environment jsdom
 */
import Board from "./Board";
import { faker} from "@faker-js/faker";

describe("Board Tests", () => {
  let board;
  const defaultBoardSize = 4;
  const defaultBoardCellSize = defaultBoardSize * defaultBoardSize;
  const defaultCells = [];
  const defaultClassName = 'board';
  const defaultTagName = 'div';

  beforeEach(() => {
    board = new Board();
  })

  afterEach(() => {
    board = null;
  })

  test('init default', () => {


    //assert
    expect(board.size).toBe(defaultBoardSize);
    expect(board.boardEl.tagName.toLowerCase()).toBe(defaultTagName);
    expect(board.boardEl.classList.contains(defaultClassName)).toBe(true);
  })

  test('init with random board size', () => {
    // arrange
    const randomSize = faker.number.int({min: 2, max: 20});

    // act
    board = new Board(randomSize);

    //assert
    expect(board.size).toBe(randomSize);
  })

  test("get element", () => {
    // act
    const result = board.getElement();

    // assert
    expect(result).toBe(board.boardEl);
  })

  test('create board', () => {
      // arrange
      const randomCellElement = faker.number.int({ min: 0, max: defaultBoardCellSize - 1});
      const cellClassName ="cell";
      // act
      board.createBoard();
      // assert
      expect(board.cells.length).toBe(defaultBoardCellSize);
      expect(board.getElement().children.length).toBe(defaultBoardCellSize);
      expect(board.cells[randomCellElement].classList.contains(cellClassName)).toBe(true);
  })

  test('get random cell', () => {
    // arrange
    const randomElement = document.createElement('div');
    board.cells = [ randomElement ]
    // act
    const result = board.getRandomCell();

    // assert
    expect(board.cells.includes(result.element)).toBe(true);
  })
})

/**
 * @jest-environment jsdom
 */
/* eslint-env jest */
import Score from "./Score";

describe("Score Tests", function () {
  let score;
  beforeEach(function () {
    // act
    score = new Score();
  });

  afterEach(function () {
    score = null;
  });

  test("init score", () => {
    // assert
    expect(score.hit).toBe(0);
    expect(score.miss).toBe(0);
  });

  test("increment hit", () => {
    // arrage
    const hitResult = 1;
    // act
    score.incrementHit();
    // assert
    expect(score.hit).toBe(hitResult);
  });

  test("increment miss", () => {
    // arrage
    const misResult = 1;
    // act
    score.incrementMiss();
    // assert
    expect(score.miss).toBe(misResult);
  });

  test("update view", () => {
    // arrage
    const viewText = `Попаданий: 1 | Промахов: 1`;
    // act
    score.updateView();
    // assert
    score.incrementHit();
    score.incrementMiss();
    expect(score.getElement().innerHTML).toBe(viewText);
  });

  test("get element", () => {
    // assert
    expect(score.getElement()).toBe(score.scoreEl);
  });

  test("game over", () => {
    const maxMissCount = 5;
    // act-
    for (let i = 0; i < maxMissCount; i++) {
      score.incrementMiss();
    }

    // assert
    expect(score.isGameOver()).toBe(true);
  });
});

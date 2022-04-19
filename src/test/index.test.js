 const functions = require("../../src/index");
 const constants = require("../../src/constants/constants")
 const assert = require('assert');

describe("ghvjhv", () => {

    test("when passed null array", function () {
        const expected = constants.nullArrayElementErrorMsg;
        const result = functions.groupArrayElements(null, 5);
        expect(result).toBe(expected);
      });

      test("when passed  negative number", function () {
        const expected = constants.notNaNErrorMsg;
        const result = functions.groupArrayElements([2,4], -5);
        expect(result).toBe(expected);
      });

  test("when empty array passed", function () {
    const expected = constants.arrayLengthErrorMessage;
    const result = functions.groupArrayElements([], 5);
    expect(result).toBe(expected);
  });

  test("when passing number > array length", function () {
    const expected = constants.arrayLengthErrorMessage;
    const result = functions.groupArrayElements([2, 5, 6, 8], 5);
    expect(result).toBe(expected);
  });

  test("when passed array with length 5 and number is 3", function () {
    const expected = [[2,5],[6,8],[9]];
    const result = functions.groupArrayElements([2, 5, 6, 8, 9], 3);
    console.log("result:",result.debug);
    assert.deepStrictEqual(result,[[2,5],[6,8],[9]]);
  });
});
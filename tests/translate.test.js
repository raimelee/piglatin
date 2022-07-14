const translate = require("../src/translate");
// a. words that start with vowels… write tests for several different starting vowels
describe("translate function", () => {
  test("words that start with the vowels", () => {
    let result = translate("apple");
    expect(result).toBe("appleway");
  });
});

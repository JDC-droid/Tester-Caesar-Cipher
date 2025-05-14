const { enDeCode } = require("./cipher.js");

test("fails if the cipher is not a string", () => {
  expect(enDeCode(124566, { checked: true }, 5)).toBe(false);
});

test("fails if the cipher is empty", () => {
  expect(enDeCode("").toBe(false));
});

// test("fails if the cipher does not decrypt", () => {
//   expect(enDeCode("1234567890").toBe(false));
// });

// test("fails if the cipher does not encrypt", () => {
//   expect(enDeCode("1234567890").toBe(false));
// });

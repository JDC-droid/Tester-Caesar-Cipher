const { cipherValidation } = require("./cipher.js");

test("fails if the cipher is not a string", () => {
  expect(() => cipherValidation(123)).toBe(false);
});

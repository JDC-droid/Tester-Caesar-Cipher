const { cipherValidation } = require("./cipher.js");

test("fails if the cipher is not a string", () => {
  expect(cipherValidation(123).toBe(false));
});

test("fials if the cipher is empty", () => {
  expect(cipherValidation("").toBe(false));
});

test("fails if the cipher does not decrypt", () => {
  expect(cipherValidation("1234567890").toBe(false));
});

test("fails if the cipher does not encrypt", () => {
  expect(cipherValidation("1234567890").toBe(false));
});

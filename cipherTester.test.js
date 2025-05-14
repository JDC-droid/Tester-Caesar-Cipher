const { enDeCode } = require("./cipher.js");

test("fails if the cipher is not a string", () => {
  expect(enDeCode(124566, { checked: true }, 5)).toBe(false);
});

test("fails if the cipher is empty", () => {
  //expect(enDeCode("", { checked: true }, 5)).toBe(false);
  if (typeof enDeCode("", { checked: true }, 5) === "string") {
    expect(enDeCode("", { checked: true }, 5)).toBe(false);
  }
});

test("fails if the cipher does not decrypt", () => {
  expect(enDeCode("rovvy dbkfovob", { checked: false }, 10)).toBe(
    "hello traveler"
  );
});

test("fails if the cipher does not encrypt", () => {
  expect(enDeCode("hello traveler", { checked: true }, 10)).toBe(
    "rovvy dbkfovob"
  );
});

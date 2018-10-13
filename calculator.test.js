const add = require("./calculator");
// 1. test 
it("should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});


// 2. test
it("should return number when only one number is in the string", () => {
  expect(add("5")).toBe(5);
});


// 3. test
it("should return the sum of two given numbers", () => {
  expect(add("1,2")).toBe(3);
});


// 4. test
it("should summarize multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
});


const e = require("../dist/index.js")
test("Return list dict data right", () => {
  expect(e.getpresent("one")).toBe("Enter The Gungeon")
})
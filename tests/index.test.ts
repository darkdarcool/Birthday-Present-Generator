const e = require("../dist/index.js")
describe("Returns list data correct", () => {
  test("Return list dict data right", () => {
    expect(e.getpresent("one")).toBe("Enter The Gungeon")
  });
})

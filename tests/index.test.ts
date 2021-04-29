const e = require("../dist/index.js")
describe("Returns list data correct", () => {
  test("Return list dict data one right", () => {
    expect(e.getpresent("one")).toBe("Hyrule Warriors | Age Of Calamity")
  });
  test("Return list dict data two right", () => {
    expect(e.getpresent("two")).toBe("Zelda Breath of the Wild DLC(s)[there are two]")
  });

  test("Return list dict data two right", () => {
    expect(e.getpresent("three")).toBe("Arms the real game, not the demo")
  })
  test("Return list dict data 4 right", () => {
    expect(e.getpresent("four")).toBe("Lego Worlds")
  })
})

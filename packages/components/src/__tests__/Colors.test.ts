import Colors from "../Colors";

it("should contain all colors", () => {
  expect(Colors).toMatchInlineSnapshot(`
    Object {
      "mainBlue": "rgb(0, 82, 255)",
      "mainBlueLight": "rgb(19, 95, 253)",
    }
  `);
});

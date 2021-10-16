import { render } from "@testing-library/react-native";
import React from "react";

import Logo from "../Logo";

it('should respect "fillPathColor" prop', () => {
  const fillPathColor = "rgba(0, 0, 0)";
  const anotherFillPathColor = "rgba(255, 255, 255)";

  const screen = render(<Logo fillPathColor={fillPathColor} />);

  const s1 = screen.toJSON();
  expect(s1).toMatchSnapshot();

  screen.rerender(<Logo fillPathColor={anotherFillPathColor} />);

  const s2 = screen.toJSON();
  expect(s1).not.toMatchObject(s2);
});

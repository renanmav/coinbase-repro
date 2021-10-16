import { render } from "@testing-library/react-native";
import React from "react";

import Button, { ButtonProps } from "../Button";

it('should render "text" prop', () => {
  const props: ButtonProps = {
    text: "TEXT",
  };

  const screen = render(<Button {...props} />);

  expect(screen.getByTestId("button-text")).toHaveTextContent(props.text);
});

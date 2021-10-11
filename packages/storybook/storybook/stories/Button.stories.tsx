import { Button, Colors } from "@coinbase/components";

import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";

import CenterView from "../CenterView";

storiesOf("Button", module)
  .addParameters({
    background: "white",
  })
  .addDecorator((getStory, c) => (
    <CenterView padding={20} backgroundColor={c.parameters.background}>
      {getStory()}
    </CenterView>
  ))
  .add("on white background", () => (
    <Button
      text={text("Button text prop", "Iniciar sessão")}
      onPress={action("press")}
      textStyle={{ color: "white" }}
    />
  ))
  .add(
    "on colored background",
    () => (
      <Button
        text={text("Button text prop", "Começar")}
        onPress={action("press")}
        textStyle={{ color: Colors.mainBlue }}
        backgroundColor="white"
        backgroundPressedColor="white"
      />
    ),
    {
      background: Colors.mainBlue,
    }
  );

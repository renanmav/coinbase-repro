import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import { View } from "react-native";

import Button from "../Button";
import Colors from "../Colors";

export default {
  title: "Button",
  component: Button,
  decorators: [(story) => <View style={{ maxWidth: 200 }}>{story()}</View>],
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const SignUp = Template.bind({});
SignUp.args = {
  text: "Começar",
  onPress: () => window.alert("onPress"),
  backgroundColor: Colors.mainBlue,
  textStyle: { color: "white" },
};

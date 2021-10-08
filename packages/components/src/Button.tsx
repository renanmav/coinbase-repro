import React from "react";
import {
  PixelRatio,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import Animated from "react-native-reanimated";

import Colors from "./Colors";

interface ButtonProps extends Omit<PressableProps, "style"> {
  text: string;
  backgroundColor?: string;
  backgroundPressedColor?: string;
  textStyle?: StyleProp<TextStyle>;
  pressableStyle?: StyleProp<ViewStyle>;
}

export default function Button({
  text,
  backgroundColor = Colors.mainBlue,
  backgroundPressedColor = Colors.mainBlueLight,
  textStyle: textStyleProp,
  pressableStyle: pressableStyleProp,
  ...pressableProps
}: ButtonProps) {
  const pressableStyle: PressableProps["style"] = ({ pressed }) => [
    styles.pressable,
    {
      backgroundColor: pressed ? backgroundPressedColor : backgroundColor,
    },
    pressableStyleProp,
  ];

  const textStyle: TextProps["style"] = [styles.text, textStyleProp];

  return (
    <Animated.View>
      <Pressable style={pressableStyle} {...pressableProps}>
        <Text style={textStyle}>{text}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: "100%",
    borderRadius: PixelRatio.roundToNearestPixel(5),
  },
  text: {
    textAlign: "center",
    marginVertical: PixelRatio.roundToNearestPixel(15),
    fontSize: PixelRatio.roundToNearestPixel(15),
    fontWeight: "bold",
  },
});

import React from "react";
import {
  PixelRatio,
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
} from "react-native";

interface ActionButtonProps extends PressableProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  style,
  textStyle = { color: "white", fontWeight: "bold" },
  ...props
}) => {
  const styleProp: PressableProps["style"] = [
    {
      backgroundColor: "red",
      paddingHorizontal: PixelRatio.roundToNearestPixel(50),
      paddingVertical: PixelRatio.roundToNearestPixel(20),
      borderRadius: PixelRatio.roundToNearestPixel(5),
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    style,
  ];

  return (
    <Pressable style={styleProp} {...props}>
      <Text style={textStyle}>{text}</Text>
    </Pressable>
  );
};

export default ActionButton;

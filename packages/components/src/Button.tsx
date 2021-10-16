import React from "react";
import {
  PixelRatio,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import {
  TapGestureHandler,
  TapGestureHandlerProps,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import Colors from "./Colors";

const DEFAULT_SCALE = 1;
const REDUCED_SCALE = 0.98;

export interface ButtonProps {
  text: string;
  onPress?: () => void;
  backgroundColor?: string;
  backgroundPressedColor?: string;
  textStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
  defaultScale?: number;
  reducedScale?: number;
}

export default function ButtonWithPanGesture({
  text,
  onPress,
  backgroundColor = Colors.mainBlue,
  backgroundPressedColor = Colors.mainBlueLight,
  textStyle: textStyleProp,
  viewStyle: viewStyleProp,
  defaultScale = DEFAULT_SCALE,
  reducedScale = REDUCED_SCALE,
}: ButtonProps) {
  const scaleValue = useSharedValue(defaultScale);
  const backgroundColorValue = useSharedValue<string>(backgroundColor);

  const scaleStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: scaleValue.value,
      },
    ],
  }));

  const backgroundColorStyle = useAnimatedStyle(() => ({
    backgroundColor: backgroundColorValue.value,
  }));

  const timingConfig: Animated.WithTimingConfig = {
    duration: 200,
  };

  const onBegan: TapGestureHandlerProps["onBegan"] = () => {
    scaleValue.value = withTiming(reducedScale);
    backgroundColorValue.value = withTiming(
      backgroundPressedColor,
      timingConfig
    ) as unknown as string;
  };

  const onEnded: TapGestureHandlerProps["onEnded"] = () => {
    scaleValue.value = withTiming(defaultScale);
    backgroundColorValue.value = withTiming(
      backgroundColor,
      timingConfig
    ) as unknown as string;

    if (onPress) onPress();
  };

  const viewStyle: StyleProp<ViewStyle> = [
    styles.pressable,
    { backgroundColor },
    viewStyleProp,
    scaleStyle,
    backgroundColorStyle,
  ];

  const textStyle: StyleProp<TextStyle> = [styles.text, textStyleProp];

  return (
    <TapGestureHandler
      {...{
        onBegan,
        onEnded,
        onFailed: onEnded,
        onCancelled: onEnded,
        maxDeltaY: 20,
        maxDeltaX: 20,
      }}
    >
      <Animated.View style={viewStyle} testID="button-view">
        <Animated.Text style={textStyle} testID="button-text">
          {text}
        </Animated.Text>
      </Animated.View>
    </TapGestureHandler>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: "100%",
    borderRadius: PixelRatio.roundToNearestPixel(5),
    paddingVertical: PixelRatio.roundToNearestPixel(20),
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: PixelRatio.roundToNearestPixel(15),
    fontWeight: "bold",
  },
});

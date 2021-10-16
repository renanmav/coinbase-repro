import GorhomBottomSheet, {
  BottomSheetBackdropProps,
  BottomSheetProps as GorhomBottomSheetProps,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo } from "react";
import { PixelRatio, ViewProps } from "react-native";
import Animated, {
  Extrapolate,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";

const Backdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  const isOpened = useMemo(() => animatedIndex.value === 0, [animatedIndex]);
  const pointerEvents = useMemo<ViewProps["pointerEvents"]>(
    () => (isOpened ? "auto" : "none"),
    [isOpened]
  );

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 1],
      Extrapolate.CLAMP
    ),
  }));

  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  return <Animated.View style={containerStyle} pointerEvents={pointerEvents} />;
};

export type BottomSheetProps = GorhomBottomSheetProps;

const BottomSheet = React.forwardRef<GorhomBottomSheet, BottomSheetProps>(
  (gorhomBottomSheetProps, bottomSheetRef) => {
    const renderBackdrop = useCallback<React.FC<BottomSheetBackdropProps>>(
      ({ ...props }) => <Backdrop {...props} />,
      []
    );

    return (
      <GorhomBottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        style={{ paddingHorizontal: PixelRatio.roundToNearestPixel(20) }}
        backgroundStyle={{ backgroundColor: "white" }}
        backdropComponent={renderBackdrop}
        {...gorhomBottomSheetProps}
      />
    );
  }
);

export default BottomSheet;

export { GorhomBottomSheet as BottomSheetRef };

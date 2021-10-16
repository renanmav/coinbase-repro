import GorhomBottomSheet, {
  BottomSheetProps as GorhomBottomSheetProps,
} from "@gorhom/bottom-sheet";
import React from "react";
import { PixelRatio } from "react-native";

export type BottomSheetProps = GorhomBottomSheetProps;

const BottomSheet = React.forwardRef<GorhomBottomSheet, BottomSheetProps>(
  (gorhomBottomSheetProps, bottomSheetRef) => {
    return (
      <GorhomBottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        style={{ paddingHorizontal: PixelRatio.roundToNearestPixel(20) }}
        backgroundStyle={{ backgroundColor: "white" }}
        {...gorhomBottomSheetProps}
      />
    );
  }
);

export default BottomSheet;

export { GorhomBottomSheet as BottomSheetRef };

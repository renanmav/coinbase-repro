import React, { useEffect } from "react";
import {
  Dimensions,
  Modal,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const DURATION = 300;
const TRANSLATION_OFFSET = Dimensions.get("screen").height;
const BOTTOM_OFFSET = -50;

const timingConfig: Animated.WithTimingConfig = {
  duration: DURATION,
};

const springConfig: Animated.WithSpringConfig = {
  damping: 15,
  mass: 0.6,
  stiffness: 200,
};

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  viewStyle?: StyleProp<ViewStyle>;
}

export default function BottomSheet({
  visible,
  onClose: _onClose,
  children,
  viewStyle = { padding: 20 },
}: BottomSheetProps) {
  const onClose = () => setTimeout(_onClose, DURATION);

  const onRequestClose = () => {
    opacityValue.value = withTiming(0, timingConfig);
    translateYValue.value = withSpring(TRANSLATION_OFFSET, springConfig);

    onClose();
  };

  const opacityValue = useSharedValue(0);
  const translateYValue = useSharedValue(TRANSLATION_OFFSET);

  useEffect(() => {
    if (visible) {
      opacityValue.value = withTiming(1, timingConfig);
      translateYValue.value = withSpring(0, springConfig);
    }
  }, [visible]);

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: opacityValue.value,
  }));

  const translateYStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateYValue.value,
        },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      translateYOrigin: number;
    }
  >({
    onStart: (_, c) => {
      c.translateYOrigin = translateYValue.value;
    },
    onActive: (event) => {
      if (event.translationY > BOTTOM_OFFSET) {
        translateYValue.value = event.translationY;
      }
    },
    onFinish: (event, c) => {
      if (event.translationY < c.translateYOrigin) {
        translateYValue.value = withSpring(c.translateYOrigin, springConfig);
      } else {
        runOnJS(onRequestClose)();
      }
    },
  });

  const PullBar = () => (
    <View style={styles.pullBarContainer}>
      <View style={styles.pullBar} />
    </View>
  );

  return (
    <Modal
      animationType="none"
      transparent
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <Animated.View style={[styles.backgroundContainer, opacityStyle]}>
        <Pressable onPress={onRequestClose} style={styles.background} />
      </Animated.View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.animatedSheet, translateYStyle]}>
          <PullBar />
          <View style={[styles.bottomSheet, viewStyle]}>{children}</View>
        </Animated.View>
      </PanGestureHandler>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  animatedSheet: {
    position: "absolute",
    bottom: BOTTOM_OFFSET,
    width: "100%",
  },
  pullBarContainer: {
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  pullBar: {
    backgroundColor: "white",
    width: 100,
    height: 5,
    borderRadius: 10,
  },
  bottomSheet: {
    width: "100%",
    backgroundColor: "white",
    minHeight: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: -1 * BOTTOM_OFFSET + 50,
  },
});

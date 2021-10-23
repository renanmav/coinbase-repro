import React, { useEffect } from "react";
import { PixelRatio, StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface TransactionProps {
  index: number;
  transaction: number[];
  valueBackground?: string;
}

const Transaction: React.FC<TransactionProps> = ({
  index,
  transaction,
  valueBackground = "red",
}) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1);
  }, []);

  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.row, opacityStyle]} key={index}>
      <Text style={[styles.transactionSizeText]}>
        {transaction[0].toFixed(2)}
      </Text>
      <Text style={{ color: valueBackground }}>
        {transaction[1].toFixed(2)}
      </Text>
    </Animated.View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  transactionSizeText: {
    color: "white",
    marginRight: PixelRatio.roundToNearestPixel(10),
    textAlign: "center",
  },
});

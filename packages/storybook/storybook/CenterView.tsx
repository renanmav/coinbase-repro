import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface CenterViewProps {
  children?: ReactNode;
  backgroundColor?: string;
}

export default function CenterView({
  children,
  backgroundColor = "white",
}: CenterViewProps) {
  return <View style={[styles.center, { backgroundColor }]}>{children}</View>;
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

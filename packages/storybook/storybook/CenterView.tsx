import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface CenterViewProps {
  children?: ReactNode;
  backgroundColor?: string;
  padding?: number;
}

export default function CenterView({
  children,
  backgroundColor = "white",
  padding = 0,
}: CenterViewProps) {
  return (
    <View style={[styles.center, { backgroundColor, padding }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

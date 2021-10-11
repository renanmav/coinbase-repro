import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.center}>
      <Text>@coinbase/app</Text>
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

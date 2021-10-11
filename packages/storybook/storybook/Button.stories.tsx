import { Button } from "@coinbase/components";

import React from "react";
import { Alert } from "react-native";

import CenterView from "./CenterView";

export default function ButtonStories() {
  const onPress = () => Alert.alert("onPress");

  return (
    <CenterView padding={20}>
      <Button
        text="Iniciar sessão"
        textStyle={{ color: "white" }}
        onPress={onPress}
      />
    </CenterView>
  );
}

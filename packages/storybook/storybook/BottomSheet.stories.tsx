import { BottomSheet, Button } from "@coinbase/components";

import React, { useState } from "react";
import { Text, View } from "react-native";

import CenterView from "./CenterView";

export default function BottomSheetStories() {
  const [visible, setVisible] = useState(false);

  return (
    <CenterView padding={20}>
      <Button text="Abrir" onPress={() => setVisible(true)} />
      <BottomSheet visible={visible} onClose={() => setVisible(false)}>
        <View style={{ backgroundColor: "red", padding: 20 }}>
          <Text>Conteúdo</Text>
        </View>
        <View style={{ backgroundColor: "green", padding: 20 }}>
          <Text>Conteúdo</Text>
        </View>
        <View style={{ backgroundColor: "blue", padding: 20 }}>
          <Text>Conteúdo</Text>
        </View>
      </BottomSheet>
    </CenterView>
  );
}

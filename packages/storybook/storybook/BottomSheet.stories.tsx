import { BottomSheet, Button, BottomSheetRef } from "@coinbase/components";

import React, { useMemo, useRef } from "react";
import { Text, View } from "react-native";

import CenterView from "./CenterView";

export default function BottomSheetStories() {
  const bottomSheetRef = useRef<BottomSheetRef>(null);
  const snapPoints = useMemo(() => ["50%"], []);

  return (
    <CenterView padding={20}>
      <Button
        text="Abrir"
        onPress={() => bottomSheetRef.current?.expand()}
        textStyle={{ color: "white" }}
      />
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} index={0}>
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

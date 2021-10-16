import { BottomSheet, Button, Colors } from "@coinbase/components";

import { Header, HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { PixelRatio, StyleSheet, Text, Vibration, View } from "react-native";

import { StackParamList } from "./Navigation";

export default function GetStarted() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, "GetStarted">>();

  const [bsVisible, setBSVisible] = useState(false);
  const onBSClose = () => setBSVisible(false);

  const onGoBack = () => {
    onBSClose();
    Vibration.vibrate(100);
    navigation.goBack();
  };

  const onGoBackCancel = () => {
    onBSClose();
  };

  const onConfirmationGoBack = () => {
    setBSVisible(true);
  };

  const BottomSheetContent = () => (
    <View style={styles.bsContainer}>
      <View style={styles.bsTextContainer}>
        <Text style={styles.bsTextTitle}>
          Tem certeza de que não deseja criar uma nova conta?
        </Text>
        <Text>Você pode tentar mais tarde se desejar.</Text>
      </View>
      <View style={styles.bsButtonContainer}>
        <Button
          text="Sim, tenho certeza"
          onPress={onGoBack}
          backgroundColor="transparent"
          backgroundPressedColor="transparent"
          viewStyle={styles.bsButtonClose}
          textStyle={styles.bsButtonCloseText}
        />
        <Button
          text="Cancelar"
          onPress={onGoBackCancel}
          backgroundColor="transparent"
          backgroundPressedColor="transparent"
          viewStyle={styles.bsButtonCancel}
        />
      </View>
    </View>
  );

  const Content = () => (
    <View style={styles.content}>
      <Text style={styles.contentText}>Webview?</Text>
    </View>
  );

  return (
    <View>
      <StatusBar style="dark" />
      <Header
        title=""
        headerLeft={() => <HeaderBackButton onPress={onConfirmationGoBack} />}
      />
      <Content />
      <BottomSheet visible={bsVisible} onClose={onBSClose}>
        <BottomSheetContent />
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: Colors.mainBlueLight,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentText: {
    color: "white",
    fontSize: PixelRatio.roundToNearestPixel(20),
  },
  bsContainer: {
    flex: 1,
  },
  bsButtonContainer: {
    flexDirection: "row",
  },
  bsTextContainer: {
    marginBottom: PixelRatio.roundToNearestPixel(20),
  },
  bsTextTitle: {
    fontWeight: "bold",
    fontSize: PixelRatio.roundToNearestPixel(20),
    marginBottom: PixelRatio.roundToNearestPixel(10),
  },
  bsButtonClose: {
    flex: 2,
    marginRight: PixelRatio.roundToNearestPixel(20),
    backgroundColor: "transparent",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
  },
  bsButtonCloseText: {
    color: "red",
  },
  bsButtonCancel: {
    flex: 1,
    backgroundColor: "transparent",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
  },
});

import { BottomSheet, BottomSheetRef, Button } from "@coinbase/components";

import { Header, HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useMemo, useRef } from "react";
import { PixelRatio, StyleSheet, Text, Vibration, View } from "react-native";

import { StackParamList } from "./Navigation";

export default function GetStarted() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, "GetStarted">>();

  const bottomSheetRef = useRef<BottomSheetRef>(null);
  const snapPoints = useMemo(() => [PixelRatio.roundToNearestPixel(220)], []);

  const onGoBack = useCallback(() => {
    const DURATION = 300;
    bottomSheetRef.current?.close({
      duration: DURATION,
    });
    Vibration.vibrate(100);
    setTimeout(() => navigation.goBack(), DURATION);
  }, []);

  const onGoBackCancel = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const onConfirmationGoBack = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

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
    <>
      <StatusBar style="dark" />
      <Header
        title=""
        headerLeft={() => <HeaderBackButton onPress={onConfirmationGoBack} />}
      />
      <Content />
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} index={-1}>
        <BottomSheetContent />
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "grey",
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

import { Button, Colors, Logo } from "@coinbase/components";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { PixelRatio, StyleSheet, View } from "react-native";

import { StackParamList } from "./Navigation";

export default function Home() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, "Home">>();

  const GetStartedButton = () => (
    <Button
      text="Começar"
      backgroundColor="white"
      backgroundPressedColor="white"
      textStyle={styles.textBlue}
      viewStyle={styles.firstButtonStyle}
      onPress={() => {
        navigation.navigate("GetStarted");
      }}
    />
  );

  const LoginButton = () => (
    <Button
      text="Iniciar sessão"
      textStyle={styles.textWhite}
      onPress={() => {
        navigation.navigate("Login");
      }}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={Colors.mainBlue} />
      <View style={styles.logo}>
        <Logo fillPathColor="white" />
      </View>
      <GetStartedButton />
      <LoginButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBlue,
    paddingHorizontal: PixelRatio.roundToNearestPixel(20),
    paddingBottom: PixelRatio.roundToNearestPixel(40),
  },
  logo: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: PixelRatio.roundToNearestPixel(100),
  },
  textWhite: {
    color: "white",
  },
  textBlue: {
    color: Colors.mainBlue,
  },
  firstButtonStyle: {
    marginBottom: PixelRatio.roundToNearestPixel(10),
  },
});

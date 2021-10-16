import { Header, HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import { StackParamList } from "./Navigation";

export default function Login() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, "GetStarted">>();

  const onConfirmationGoBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <StatusBar style="dark" />
      <Header
        title=""
        headerLeft={() => <HeaderBackButton onPress={onConfirmationGoBack} />}
      />
    </View>
  );
}

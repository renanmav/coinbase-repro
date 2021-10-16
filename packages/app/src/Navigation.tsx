import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/routers/src/types";
import React, { useMemo } from "react";

import GetStarted from "./GetStarted";
import Home from "./Home";
import Login from "./Login";

export interface StackParamList extends ParamListBase {
  Home: undefined;
  GetStarted: undefined;
  Login: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>();

export default function Navigation() {
  const screenOptions = useMemo<NativeStackNavigationOptions>(
    () => ({
      headerShown: false,
      safeAreaInsets: { top: 0 },
    }),
    []
  );

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

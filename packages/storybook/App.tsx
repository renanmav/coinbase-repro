import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import BottomSheetStories from "./storybook/BottomSheet.stories";
import ButtonStories from "./storybook/Button.stories";
import LogoStories from "./storybook/Logo.stories";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Button" component={ButtonStories} />
        <Drawer.Screen name="Logo" component={LogoStories} />
        <Drawer.Screen name="BottomSheet" component={BottomSheetStories} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

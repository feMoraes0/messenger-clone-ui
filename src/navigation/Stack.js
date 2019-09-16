import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Tabs from "./Tabs";
import Me from "../screens/Me";

const stack = createStackNavigator(
  {
    Tabs: {
      screen: Tabs,
      navigationOptions: () => ({
        header: null
      })
    },
    Me: {
      screen: Me,
      navigationOptions: () => ({
        header: null
      })
    }
  }
);

export default createAppContainer(stack);
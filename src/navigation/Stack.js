import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Tabs from "./Tabs";

const stack = createStackNavigator(
  {
    Tabs: {
      screen: Tabs,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
  }
);

export default createAppContainer(stack);
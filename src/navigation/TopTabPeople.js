import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import StoriesScreen from "../screens/Stories";
import ActiveScreen from "../screens/Active";
import Label from "../components/LabelTabs";

const topTab = createMaterialTopTabNavigator(
  {
    Stories: {
      screen: StoriesScreen,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => {
          return <Label text={"STORIES"} tintColor={tintColor} focused={focused}/>
        }
      }
    },
    Active: {
      screen: ActiveScreen,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => {
          return <Label text={"ACTIVE"} tintColor={tintColor} focused={focused}/>
        }
      }
    }
  },
  {
    initialRouteName: "Stories",
    tabBarOptions: {
      activeTintColor: "#1a1b1c",
      inactiveTintColor: "#999999",
      style: {
        backgroundColor: "#ffffff",
        elevation: 0
      },
      indicatorStyle: {
        backgroundColor: "#ffffff"
      }
    }
  }
);

export default createAppContainer(topTab);
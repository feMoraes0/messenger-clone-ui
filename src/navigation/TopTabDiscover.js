import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import Bussinesses from "../screens/Bussinesses";
import Games from "../screens/Games";
import Label from "../components/LabelTabs";

const topTabDiscover = createMaterialTopTabNavigator(
  {
    Bussinesses: {
      screen: Bussinesses,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => {
          return <Label text={"BUSSINESSES"} tintColor={tintColor} focused={focused}/>
        }
      }
    },
    Games: {
      screen: Games,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => {
          return <Label text={"GAMES"} tintColor={tintColor} focused={focused}/>
        }
      }
    }
  },
  {
    initialRouteName: "Games",
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

export default createAppContainer(topTabDiscover);
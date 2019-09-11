import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from "react-native-vector-icons/Feather";

import ChatsScreen from "../screens/Chats";
import PeopleScreen from "../screens/People";
import DiscoverScreen from "../screens/Discover";

const tabs = createBottomTabNavigator(
  {
    Chats: ChatsScreen,
    People: PeopleScreen,
    Discover: DiscoverScreen
  },
  {
    tabBarOptions: {
      activeTintColor: "#1a1b1c",
      inactiveTintColor: "#898989",
      showLabel: false,
      style: {
        backgroundColor: "#ffffff",
        borderTopColor: "#ffffff",
        marginBottom: 5
      },
      tabStyle: {
        padding: 0
      }
    },
    
  }
);

export default createAppContainer(tabs);

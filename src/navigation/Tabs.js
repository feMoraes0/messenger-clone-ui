import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import ChatsScreen from "../screens/Chats";
import PeopleScreen from "../screens/People";
import DiscoverScreen from "../screens/Discover";

const tabs = createBottomTabNavigator(
  {
    Chats: ChatsScreen,
    People: PeopleScreen,
    Discover: DiscoverScreen
  }
);

export default createAppContainer(tabs);

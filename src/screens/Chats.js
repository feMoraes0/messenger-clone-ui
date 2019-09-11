import React from "react";
import { SafeAreaView, StatusBar, View, Text } from "react-native";

import Icon from "react-native-vector-icons/Feather";

import Header from "../components/Header";

export default class Chats extends React.Component {
  static navigationOptions = {
    title: "Chats",
    tabBarIcon: ({tintColor}) => { return (<Icon name={"message-circle"} size={30} color={tintColor}/> ) }
  }

  render() {
    return(
      <SafeAreaView>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <Header screen={"Chats"} />
      </SafeAreaView>
    );
  }
}
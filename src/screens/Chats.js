import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import Header from "../components/Header";

export default class Chats extends React.Component {
  render() {
    return(
      <SafeAreaView>
        <Header screen={"Chats"} />
      </SafeAreaView>
    );
  }
}
import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import Icon from "react-native-vector-icons/Feather";

import * as data from "../../demos/data.json";
import { Header, HeaderIcon } from "../components/Header";

export default class People extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => { return (<Icon name={"users"} size={30} color={tintColor} />)}
  }

  render() {
    return(
      <SafeAreaView>
        <Header screen={"People"}>
          <HeaderIcon name={"address-book-o"}/>
          <HeaderIcon name={"user-plus"}/>
        </Header>

      </SafeAreaView>
    );
  }
}
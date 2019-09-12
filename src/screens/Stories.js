import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Stories extends Component {
  static navigationOptions = {
    title: "Hello"
  }
  
  render() {
    return(
      <View>
        <Text>Stories</Text>
      </View>
    );
  }
}
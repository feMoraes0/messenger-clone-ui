import React from "react";
import { SafeAreaView, View, Text } from "react-native";

export default class Me extends React.Component {
  render() {
    const { navigation } = this.props;
    return(
      <SafeAreaView>
        <Text> Me </Text>
      </SafeAreaView>
    )
  }
}
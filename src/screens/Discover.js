import React from "react";
import { View, Text } from "react-native";

import Icon from "react-native-vector-icons/Feather";
export default class Discover extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => { return (<Icon name={"compass"} size={25} color={tintColor} />) }
  }

  render() {
    return(
      <View>
        <Text> Discover </Text>
      </View>
    );
  }
}
import React from "react";
import { View, Text } from "react-native";

export default class Label extends React.Component {
  render() {
    const tintColor = this.props.tintColor;
    return(
      <View
        backgroundColor={this.props.focused ? "#f1f1f1" : "#ffffff"}
        style={{ width: 165, paddingVertical: 2, borderRadius: 20, alignItems: "center" }}
      >
        <Text style={{fontWeight: "bold", fontSize: 14, color: tintColor}}>{this.props.text}</Text>
      </View>
    )
  }
}
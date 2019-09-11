import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class HeaderIcon extends Component {
  render() {
    return(
      <Icon name={this.props.name} size={18} style={styles.icon} />
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    borderRadius: 18,
    padding: 9,
    backgroundColor: "#EFEFEF",
    marginLeft: 10,
  }
})
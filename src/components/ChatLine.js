import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import RoundedImage from "./RoundedImage";

export default class ChatLine extends Component {
  render() {
    return(
      <View style={styles.line}>
        <View style={styles.lineBody}>
          <RoundedImage uri={this.props.item.uri} size={60}/>
          <View style={styles.lineBodyChat}>
            <Text style={styles.lineBodyChatName}>{this.props.item.name}</Text>
            <Text style={styles.lineBodyChatMessage}>You: {this.props.item.message} - {this.props.item.date}</Text>
          </View>
        </View>
        <RoundedImage uri={this.props.item.uri} size={20}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  line: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  lineBody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  lineBodyChat: {
    marginLeft: 15
  },
  lineBodyChatName: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 2
  },
  lineBodyChatMessage: {
    fontSize: 15,
    color: "#999999"
  }
})
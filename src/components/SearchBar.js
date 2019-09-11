import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

export default class SearchBar extends Component {
  render() {
    return(
      <View style={styles.searchBar}>
        <Icon name={"search"} size={20} color={"#aaaaaa"} />
        <Text style={styles.searchBarText}>Search</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 11,
    borderRadius: 20,
    backgroundColor: "#f1f1f1"
  },
  searchBarText: {
    fontSize: 16,
    marginLeft: 5,
    color: "#aaaaaa"
  }
})
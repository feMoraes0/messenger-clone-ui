import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import * as data from "../../demos/data.json";

import RoundedImage from "../components/RoundedImage";

export default class Active extends Component {
  _renderContact = ({item}) => {
    return(
      <TouchableOpacity style={styles.contact}>
        <View style={styles.contactUser}>
          <RoundedImage uri={item.uri} size={45} />
          <Text style={styles.contactUserText}>{item.name}</Text>
        </View>
        <TouchableOpacity style={styles.contactIcon}>
          <Icon name={"hand-spock-o"} size={22} />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  render() {
    return(
      <View>
        <FlatList
          data={data.contacts}
          renderItem={this._renderContact}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contact: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 9
  },
  contactUser: {
    flexDirection: "row",
    alignItems: "center"
  },
  contactUserText: {
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 18
  },
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    alignItems: "center"
  }
})
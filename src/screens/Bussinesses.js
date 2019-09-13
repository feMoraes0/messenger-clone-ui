import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import * as data from "../../demos/data.json";
import RoundedImage from "../components/RoundedImage";

export default class Bussinesses extends React.Component {

  _renderSuggested = ({item}) => {
    return(
      <View style={styles.line}>
        <View style={styles.content}>
          <RoundedImage uri={item.image} size={50} />
          <View style={styles.contentTexts}>
            <Text style={styles.contentTextsTitle}>{item.title}</Text>
            <Text style={styles.contentTextsSubtitle}>{item.reason}</Text>
          </View>
        </View>
        <View style={styles.status}/>
      </View>
    );
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Suggested</Text>
        <FlatList
          data={data.bussinesses.suggested}
          renderItem={this._renderSuggested}
        />
        <Text style={styles.title}>Recent</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10
  },
  //
  line: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 7
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  contentTexts: {
    marginLeft: 15
  },
  contentTextsTitle: {
    fontSize: 17,
    fontWeight: "bold"
  },
  contentTextsSubtitle: {
    fontSize: 14,
    color: "#999999"
  },
  status: {
    height: 12,
    width: 12,
    borderRadius: 12,
    backgroundColor: "#42a5f5"
  }
});
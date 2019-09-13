import React from "react";
import { TouchableOpacity, View, Text, FlatList, StyleSheet } from "react-native";

import * as data from "../../demos/data.json";
import RoundedImage from "../components/RoundedImage";

export default class Bussinesses extends React.Component {

  _renderSuggested = ({item}) => {
    return(
      <TouchableOpacity style={styles.line}>
        <View style={styles.content}>
          <RoundedImage uri={item.image} size={50} />
          <View style={styles.contentTexts}>
            <Text style={styles.contentTextsTitle}>{item.title}</Text>
            <Text style={styles.contentTextsSubtitle}>{item.reason}</Text>
          </View>
        </View>
        <View style={styles.status}/>
      </TouchableOpacity>
    );
  }

  _renderRecent = ({item}) => {
    return (
      <TouchableOpacity style={styles.recentItem}>
        <RoundedImage uri={item.image} size={55} />
        <Text style={styles.recentItemText}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  _renderFeatured = ({item}) => {
    return(
      <TouchableOpacity style={styles.line}>
        <View style={styles.content}>
          <RoundedImage uri={item.image} size={60} />
          <View style={styles.contentTexts}>
            <Text style={styles.contentTextsTitle}>{item.title}</Text>
            <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.contentTextsSubtitle}>{item.subtitle}</Text>
          </View>
        </View>
      </TouchableOpacity>
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
        <FlatList
          data={data.bussinesses.recent}
          renderItem={this._renderRecent}
          horizontal={true}
        />

        <View style={styles.boxTitle}>
          <Text style={styles.title}>Featured</Text>
          <Text>SEE MORE</Text>
        </View>
        <FlatList
          data={data.bussinesses.featured}
          renderItem={this._renderFeatured}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  boxTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
    marginTop: 20
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
    color: "#999999",
  },
  status: {
    height: 12,
    width: 12,
    borderRadius: 12,
    backgroundColor: "#42a5f5"
  },
  // recent
  recentItem: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10
  },
  recentItemText: {
    marginTop: 10,
    fontSize: 15
  }
});
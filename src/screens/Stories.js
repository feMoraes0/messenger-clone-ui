import React, { Component } from "react";
import { FlatList, View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import * as data from "../../demos/data.json";

import RoundedImage from "../components/RoundedImage";
export default class Stories extends Component {
  static navigationOptions = {
    title: "Hello"
  }

  _renderCard = ({item}) => {
    return((item.user_story !== null) ?
      <TouchableOpacity style={styles.story}>
        <Image style={styles.storyImage} source={{uri: item.user_story}} />
        <View style={styles.storyUser}>
          <RoundedImage uri={item.user_img} size={40} />
        </View>
        <Text style={styles.storyText}>{item.user_name}</Text>
        <View style={styles.storyCover}/>
      </TouchableOpacity>
      :
      <TouchableOpacity style={styles.story}>
        <Image style={styles.storyImage} source={{uri: item.user_img}} />
        <View style={styles.storyIcon}>
          <Icon name={"plus"} size={35} />
        </View>
        <Text style={styles.storyText}>Add to story</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return(
      <View style={styles.container}>
        <FlatList
          data={data.stories}
          renderItem={this._renderCard}
          numColumns={2}
        />
      </View>
    );
  }
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  story: {
    width: (width/2)-10,
    height: 240,
    padding: 10
  },
  storyUser: {
    position: "absolute",
    top: 20,
    left: 20
  },
  storyIcon: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#fafafa",
    justifyContent: "center",
    alignItems: "center"
  },
  storyImage: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: 15
  },
  storyText: {
    position: "absolute",
    fontWeight: "bold",
    color: "#ffffff",
    bottom: 20,
    left: 20
  },
  storyCover: {
    position: "absolute",
    top: 10,
    left: 10,
    borderRadius: 15,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, .4)"
  }
})
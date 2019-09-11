import React from "react";
import { SafeAreaView, StatusBar, TouchableOpacity, ScrollView, View, Text, FlatList, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import * as data from "../../demos/data.json";
import Header from "../components/Header";
import HeaderIcon from "../components/HeaderIcon";
import SearchBar from "../components/SearchBar";
import RoundedImage from "../components/RoundedImage";

export default class Chats extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => { return (<Icon name={"chat-bubble-outline"} size={30} color={tintColor}/> ) }
  }

  _renderStories = ({item}) => {
    return((item.user_story !== null) ?
      <View style={styles.stories}>
        <RoundedImage uri={item.user_story} size={55}/>
        <Text style={styles.storiesText}>{item.user_name.split(" ")[0]}</Text>
      </View>
      :
      <View style={styles.stories}>
        <View style={styles.storiesAdd}>
          <Icon name={"add"} size={35} color={"#cccccc"}/>
        </View>
        <Text style={styles.storiesText}>Your story</Text>
      </View>
    )
  }

  render() {
    return(
      <SafeAreaView>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        
        <Header screen={"Chats"}>
          <HeaderIcon name={"camera"}/>
          <HeaderIcon name={"pencil"}/>
        </Header>

        <TouchableOpacity>
          <SearchBar />
        </TouchableOpacity>

        <ScrollView style={styles.boxStories}>
          <FlatList
            data={data.stories}
            renderItem={this._renderStories}
            horizontal={true}
            style={styles.storiesList}
          />
        </ScrollView>

        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  boxStories: {
    marginVertical: 10
  },
  storiesList: {
    marginLeft: 20
  },
  stories: {
    alignItems: "center",
    marginRight: 15
  },
  storiesText: {
    marginTop: 5,
    fontSize: 15,
    color: "#aaaaaa",
  },
  storiesAdd: {
    width: 55,
    height: 55,
    borderRadius: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
  }
})
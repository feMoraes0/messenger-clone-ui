import React from "react";
import { SafeAreaView, StatusBar, TouchableOpacity, ScrollView, View, Text, FlatList, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Feather";

import * as data from "../../demos/data.json";
import { Header, HeaderIcon } from "../components/Header";
import SearchBar from "../components/SearchBar";
import RoundedImage from "../components/RoundedImage";
import ChatLine from "../components/ChatLine";

export default class Chats extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => { return (<Icon name={"message-circle"} size={25} color={tintColor}/> ) }
  }

  _renderStories = ({item}) => {
    return((item.user_story !== null) ?
      <TouchableOpacity style={styles.stories}>
        <RoundedImage uri={item.user_story} size={55}/>
        <Text style={styles.storiesText}>{item.user_name.split(" ")[0]}</Text>
      </TouchableOpacity>
      :
      <TouchableOpacity style={styles.stories}>
        <View style={styles.storiesAdd}>
          <Icon name={"plus"} size={35} color={"#1a1b1c"}/>
        </View>
        <Text style={styles.storiesText}>Your story</Text>
      </TouchableOpacity>
    )
  }

  _renderChatLine = ({item}) => {
    return(
      <TouchableOpacity>
        <ChatLine item={item} />
      </TouchableOpacity>
    )
  }

  render() {
    const { navigation } = this.props;
    return(
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        
        <Header screen={"Chats"} navigation={navigation}>
          <HeaderIcon name={"camera"}/>
          <HeaderIcon name={"pencil"}/>
        </Header>

        <ScrollView>
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

          <View>
            <FlatList
              data={data.contacts}
              renderItem={this._renderChatLine}
            />
          </View>
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
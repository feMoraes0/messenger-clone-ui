import React from "react";
import { SafeAreaView, StatusBar, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import Header from "../components/Header";
import HeaderIcon from "../components/HeaderIcon";
import SearchBar from "../components/SearchBar";

export default class Chats extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => { return (<Icon name={"chat-bubble-outline"} size={30} color={tintColor}/> ) }
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
      
      </SafeAreaView>
    );
  }
}
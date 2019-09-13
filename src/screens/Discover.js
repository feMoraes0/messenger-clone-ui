import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Feather";

import { Header } from "../components/Header";
import SearchBar from "../components/SearchBar";
import TopTab from "../navigation/TopTabDiscover";

export default class Discover extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => { return (<Icon name={"compass"} size={25} color={tintColor} />) }
  }

  render() {
    return(
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <Header screen={"Discover"}/>
        <ScrollView>
          <SearchBar />
          <TopTab />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
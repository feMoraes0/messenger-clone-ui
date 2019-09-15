import React from "react";
import { View, StatusBar } from "react-native";
import Stack from "./src/navigation/Stack";
import changeNavigationBarColor from "react-native-navigation-bar-color";

console.disableYellowBox = true;


export default class App extends React.Component {
  componentDidMount() {
    changeNavigationBarColor("#f1f1f1")
  }

  render() {
    return(
      <Stack />
    )
  }
}
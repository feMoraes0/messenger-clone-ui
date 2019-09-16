import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StatusBar, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Feather";
import RoundedImage from "../components/RoundedImage";

export default class Me extends React.Component {
  render() {
    const { navigation } = this.props;
    return(
      <SafeAreaView>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.navigate("Tabs")}>
           <Icon name={"arrow-left"} size={30} />
          </TouchableOpacity>
          <Text style={styles.headerText}> Me </Text>
        </View>
        <View style={styles.userContainer}>
          <RoundedImage
            uri={"https://azure.wgp-cdn.co.uk/app-yourdog/posts/pembroke_welsh_corgi.jpg"}
            size={120}
          />
          <Text style={styles.userContainerName}>Corgilius</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  headerIcon: {
    paddingHorizontal: 20
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  //
  userContainer: {
    paddingVertical: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  userContainerName: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10
  }
})
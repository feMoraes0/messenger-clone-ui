import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Header extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <TouchableOpacity>
            <Image
              source={{uri: "https://azure.wgp-cdn.co.uk/app-yourdog/posts/pembroke_welsh_corgi.jpg"}}
              style={styles.userImage}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{this.props.screen}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Icon name={"camera"} size={18} style={styles.icon} />
          <Icon name={"pencil"} size={18} style={styles.icon}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginLeft: 10
  },
  icon: {
    borderRadius: 18,
    padding: 9,
    backgroundColor: "#EFEFEF",
    marginLeft: 10,
  },
  userImage: {
    height: 35,
    width: 35,
    borderRadius: 45
  }
});
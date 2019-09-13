import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export class HeaderIcon extends React.Component {
  render() {
    return(
      <TouchableOpacity>
        <Icon name={this.props.name} size={18} style={styles.icon} />
      </TouchableOpacity>
    )
  }
}

export class Header extends React.Component {

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
          { this.props.children }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10
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
    fontSize: 26,
    fontWeight: "bold",
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
    borderRadius: 35
  }
});
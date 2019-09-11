import React, { Component } from "react";
import { View, Image } from "react-native";

export default class RoundedImage extends Component {
  render() {
    return(
      <Image
        source={{uri: this.props.uri}}
        style={{width: this.props.size, height: this.props.size, borderRadius: this.props.size}}
      />
    )
  }
}
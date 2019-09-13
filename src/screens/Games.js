import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";

import * as data from "../../demos/data.json";
import RoundedImage from "../components/RoundedImage";

export default class Games extends React.Component {

  _renderFriendsGame = ({item}) => {
    return(
      <TouchableOpacity style={styles.line}>
        <View style={styles.content}>
          <RoundedImage uri={item.image} size={50} />
          <View style={styles.contentTexts}>
            <Text style={styles.contentTextsTitle}>{item.name}</Text>
            <Text style={styles.contentTextsSubtitle}>{item.game}</Text>
          </View>
        </View>
        <View style={styles.status}/>
      </TouchableOpacity>
    );
  }

  _renderGame = ({item}) => {
    return(
      <TouchableOpacity style={styles.gameCard}>
        <Image source={{uri: item.game_image}} style={styles.gameCardImage}/>
        <View style={styles.gameCardInternal}>
          <View style={styles.gameCardInternalTop}>
            <RoundedImage uri={item.company_image} size={50} />
            <View>
              <Text style={styles.gameCardInternalTopTitle}>{item.game}</Text>
              <Text style={styles.gameCardInternalTopSubtitle}>Dog and 10.0M others play</Text>
            </View>
          </View>
          <View style={styles.gameCardInternalBottom}>
            <Text style={styles.gameCardInternalBottomText}>
              Friends, 
              connections and other people you play with will be able to see your game activity. 
              The game will have acess to your public profile information and the people you 
              know who also play this game.
            </Text>
            <View style={styles.gameCardInternalBottomButton}>
              <Text style={styles.gameCardInternalBottomButtonText}>Play</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>What friends are playing</Text>
        <FlatList
          data={data.games.friends}
          renderItem={this._renderFriendsGame}
        />

        <Text style={styles.title}>Games</Text>
        <FlatList
          data={data.games.games}
          renderItem={this._renderGame}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
    marginTop: 20
  },
  //
  line: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 7
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  contentTexts: {
    marginLeft: 15
  },
  contentTextsTitle: {
    fontSize: 17,
    fontWeight: "bold"
  },
  contentTextsSubtitle: {
    fontSize: 14,
    color: "#999999",
  },
  status: {
    height: 12,
    width: 12,
    borderRadius: 12,
    backgroundColor: "#42a5f5"
  },
  //
  gameCard: {
    height: 450,
    marginBottom: 15,
    borderRadius: 20
  },
  gameCardImage: {
    position: "relative",
    borderRadius: 20,
    height: "100%",
    width: "100%"
  },
  gameCardInternal: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  gameCardInternalTop: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  gameCardInternalTopTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
    color: "#ffffff"
  },
  gameCardInternalTopSubtitle: {
    fontSize: 14,
    marginLeft: 10,
    color: "#ffffff"
  },
  gameCardInternalBottomText: {
    color: "#ffffff",
    fontSize: 15,
    marginBottom: 20
  },
  gameCardInternalBottomButton: {
    backgroundColor: "#42a5f5",
    padding: 10,
    borderRadius: 10,
    alignItems: "center"
  },
  gameCardInternalBottomButtonText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#ffffff"
  }
})
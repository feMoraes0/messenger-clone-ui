import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import StoriesScreen from "../screens/Stories";
import ActiveScreen from "../screens/Active";

class Label extends React.Component {
  render() {
    const tintColor = this.props.tintColor;
    return(
      <View
        backgroundColor={this.props.focused ? "#f1f1f1" : "#ffffff"}
        style={{ paddingHorizontal: 55, paddingVertical: 2, borderRadius: 20 }}
      >
        <Text style={{fontWeight: "bold", fontSize: 15, color: tintColor}}>{this.props.text}</Text>
      </View>
    )
  }
}

const topTab = createMaterialTopTabNavigator(
  {
    Stories: {
      screen: StoriesScreen,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => {
          return <Label text={"STORIES"} tintColor={tintColor} focused={focused}/>
        }
      }
    },
    Active: {
      screen: ActiveScreen,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => {
          return <Label text={"ACTIVE"} tintColor={tintColor} focused={focused}/>
        }
      }
    }
  },
  {
    initialRouteName: "Stories",
    tabBarOptions: {
      activeTintColor: "#1a1b1c",
      inactiveTintColor: "#999999",
      style: {
        backgroundColor: "#ffffff",
        elevation: 0
      },
      indicatorStyle: {
        backgroundColor: "#ffffff"
      }
    }
  }
);

export default createAppContainer(topTab);
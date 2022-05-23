import {statusBar} from "expo-status-bar";
import React, { useState } from "react";
import AppNavigator from "./src/navigations/Navigator";
import * as Font from "expo-font";
import {Text, View, Stylesheet} from "react-native";
import {AppLoading} from "expo";
import Register from './src/screens/Register'
import Login from './src/screens/Login'

export default class App extends React.Component {
  state = {
    isFontLoad: false
  }

  render() {
    return (
      <AppNavigator/>
    );
  }
}

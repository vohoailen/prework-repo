/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
  Navigator,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import Setting from './settings';
import MainScreen from './mainscreen.android'

export default class PreWorkProject extends Component {
  constructor(props){
    super(props);
  }

  configureScene(route, routeStack){
    try{
      let sceneTransitionValue =  AsyncStorage.getItem("SCENE_SELECTED");
      let transision = this.getTransition(sceneTransitionValue);
      console.log(" TRansision: ", transision, " With sceneTransitionValue: "+ sceneTransitionValue);
      return transision;
    }catch(error){
      console.log("Hmm, something when wrong when get data..." + error);
    }
    return Navigator.SceneConfigs.FloatFromRight;
  }


  getTransition(scene) {
    var transition = Navigator.SceneConfigs.FloatFromRight;
    switch (scene) {
      case "FloatFromRight":
          transition = Navigator.SceneConfigs.FloatFromRight;
        break;
      case "FloatFromLeft":
          transition = Navigator.SceneConfigs.FloatFromLeft;
        break;
      case "FloatFromBottom":
          transition = Navigator.SceneConfigs.FloatFromBottom;
      case "FloatFromBottomAndroid":
          transition = Navigator.SceneConfigs.FloatFromBottomAndroid;
        break;
      case "SwipeFromLeft":
          transition = Navigator.SceneConfigs.SwipeFromLeft;
        break;
      case "HorizontalSwipeJump":
          transition = Navigator.SceneConfigs.HorizontalSwipeJump;
        break;
      case "HorizontalSwipeJumpFromRight":
          transition = Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
        break;
      default:

    }

    console.log("Main Screen: scene: " + scene, " transition: ", transition)
    return transition;
  }

  _renderScene(route, navigator) {
   if (route.id === 1) {
     return <MainScreen navigator={navigator} />
   } else if (route.id === 2) {
     return <Setting navigator={navigator} />
   }
 }
  render() {
    return (
      <Navigator
        initialRoute={{id: 1, }}
        renderScene={this._renderScene}
        configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }}
        configureScene={this.configureScene}
         />
    );
  }
}
AppRegistry.registerComponent('PreWorkProject', () => PreWorkProject);

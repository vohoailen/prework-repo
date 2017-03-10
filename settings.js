import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  AsyncStorage,
  Navigator
} from 'react-native';

export default class Setting extends Component {
  constructor(props){
    super(props);
    this.state = {
      sceneTransition: 0
    };
  }
  // action to set select value to AsyncStorage
  setSelectSceneTransition(scene){
    try {
      console.log(this.props.navigator);
      this.setSceneTransition(scene);
      this.setState({
        sceneTransition: scene
      });
    } catch (error) {
      console.log("Oop!! Something went wrong !!!" + error);
    }
  }
  // set data to AsyncStorage
  async setSceneTransition(scene){
    try{
      await AsyncStorage.setItem('SCENE_SELECTED', scene);
      this.setState({
        sceneTransition : scene
      })
    }catch(error){
       console.log("Hmm, something when wrong when set data..." + error);
    }
  }
  // this method will be called when scene loaded
  async componentDidMount(){
    try{
      let sceneTransitionValue = await AsyncStorage.getItem("SCENE_SELECTED");
      // Store value to State
      this.setState({
        sceneTransition : sceneTransitionValue
      });
    }catch(error){
      console.log("Hmm, something when wrong when get data..." + error);
    }
  }
  // get data to AsyncStorage
  async getSceneTransition(){
    try{
      let sceneTransitionValue = await AsyncStorage.getItem("SCENE_SELECTED");
      // Store value to State
      this.setState({
        sceneTransition : sceneTransitionValue
      });
    }catch(error){
      console.log("Hmm, something when wrong when get data..." + error);
    }
  }
  _handlePress() {
   this.props.navigator.pop();
 }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this._handlePress()}>
            <Text style={styles.tabbarHeadr}>Save</Text>
        </TouchableOpacity>
        <View>
          <Text style={{fontSize:25}}>Scene Transitions</Text>
          <Picker
            selectedValue={this.state.sceneTransition}
            onValueChange={(scene) => this.setSelectSceneTransition(scene)}>
            <Picker.Item label="FloatFromRight" value="FloatFromRight" />
            <Picker.Item label="FloatFromLeft" value="FloatFromLeft" />
            <Picker.Item label="FloatFromBottom" value="FloatFromBottom" />
            <Picker.Item label="FloatFromBottomAndroid" value="FloatFromBottomAndroid" />
            <Picker.Item label="SwipeFromLeft" value="SwipeFromLeft" />
            <Picker.Item label="HorizontalSwipeJump" value="HorizontalSwipeJump" />
            <Picker.Item label="HorizontalSwipeJumpFromRight" value="HorizontalSwipeJumpFromRight" />
          </Picker>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabbarHeadr: {
    textAlign: 'right',
    marginTop: 10,
    marginRight: 10,
    fontSize: 15
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
   //  alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

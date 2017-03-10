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
   TouchableOpacity,
   TouchableHighlight,
   AsyncStorage
 } from 'react-native';
 import SegmentedControlTab from 'react-native-segmented-control-tab'


 export default class MainScreen extends Component {
   constructor(props){
     super(props);
     console.log(props)
     this.state = {
       bill : 0,
       percent: 0.1,
       tip: 0,
       result: 0
     };
   }
   onPercentTipChanged(index) {
     var percent = this.state.percent;
     switch (index) {
       case 0:
         percent = 0.1;
         break;
       case 1:
         percent = 0.15;
         break;
       case 2:
         percent = 0.5;
         break;
       default:
     }
     var tip = parseFloat(this.state.bill*percent).toFixed(1);
     var result = parseFloat(this.state.bill)+ parseFloat(tip);
     this.setState({
                   percent: percent,
                   tip: tip,
                   result: result
                 });

   console.log("On Segmented Changed: " + this.state.bill + " - percent: " + percent + " -Tip: " + tip)
   }
   onBillAmountChanged(billAmount) {
     var tip = parseFloat(billAmount*this.state.percent).toFixed(1);
     var result = parseFloat(billAmount)+ parseFloat(tip);
     this.setState({bill : billAmount,
                   tip: tip,
                   result: result
                 });
     console.log("Text Changed: " + this.state.bill)
   }
   _handlePress() {
    this.props.navigator.push({id:2
    })
  }
   render() {
     return (
       <View style={styles.container}>
        <TouchableOpacity onPress={() => this._handlePress()}>
            <Text style={styles.tabbarHeadr}>Setting</Text>
        </TouchableOpacity>
         <Text style={styles.welcome}>
           Tip Calculator
         </Text>
         <View style={{height: 40, flexDirection: 'row'}}>
               <Text style={{width: 100, height: 40, backgroundColor: 'powderblue'}} >
                 Bill amount:
               </Text>
                 <TextInput style={{flex: 1,height: 40, backgroundColor: 'skyblue'}}
                   keyboardType="numeric"
                   autoCorrect={false}
                   onChangeText={(billAmount) => this.onBillAmountChanged(billAmount)}
                 />
         </View>

         <View style={{height: 30, flexDirection: 'row'}}>
               <Text style={{width: 100, height: 30, backgroundColor: 'powderblue'}}>
                 Tip amount
               </Text>
               <Text style={{flex: 1,height: 30, backgroundColor: 'skyblue'}}>
                 {this.state.tip}
               </Text>
         </View>
         <SegmentedControlTab
                     values={['10%', '15%', '50%']}
                     onTabPress= {index => this.onPercentTipChanged(index)}
                   />

           <View style={{height: 30, flexDirection: 'row'}}>
               <Text  style={{width: 100, height: 30, backgroundColor: 'powderblue'}}>
                 Bill amount:
               </Text>
               <Text style={{flex: 1,height: 30, backgroundColor: 'skyblue'}}>
                 {this.state.bill}
               </Text>
           </View>
           <View style={{height: 30, flexDirection: 'row'}}>
               <Text  style={{width: 100, height: 30, backgroundColor: 'powderblue'}}>
                 Tip amount:
               </Text>
               <Text style={{flex: 1,height: 30, backgroundColor: 'skyblue'}}>
                 {this.state.tip}
               </Text>
           </View>
           <View style={{height: 30, flexDirection: 'row'}}>
               <Text  style={{width: 100, height: 30, backgroundColor: 'powderblue'}}>
                 Percent:
               </Text>
               <Text style={{flex: 1,height: 30, backgroundColor: 'skyblue'}}>
                 {this.state.percent}
               </Text>
           </View>

           <View style={{height: 30, flexDirection: 'row'}}>
               <Text  style={{width: 100, height: 30, backgroundColor: 'powderblue'}}>
                 Result:
               </Text>
               <Text style={{flex: 1,height: 30, backgroundColor: 'skyblue'}}>
                 {this.state.result}
               </Text>
           </View>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     // justifyContent: 'center',
    //  alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   tabbarHeadr: {
     textAlign: 'right',
     marginTop: 10,
     marginRight: 10,
     fontSize: 15
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
   billView: {
     flex: 1,
     flexDirection: 'row'
   },
   billViewInput:  {

   }
 });

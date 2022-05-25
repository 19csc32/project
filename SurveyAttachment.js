import React, { Component } from "react";
import {
  Alert,
  ImageBackground,
  AppRegistry,
  Button,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Linking
} from "react-native";
import KommunicateChat from "./Chatbot";
import Form from "./Form";
import NumericInput from 'react-native-numeric-input';
const SurveyAttachment = (props) => {
  {
      /*Nested_If_Else=()=>{
 
    if( this.state.text > 44 )
    {
 
        navigation.navigate('Home')
 
    }
    else if(this.state.text > 25)
    {
 
        navigation.navigate('Log')
 
    }
    
    else
    {
 
        navigation.navigate('Game')
 
    }
  }*/
    return (
      <ImageBackground
        style={styles.background}
        source={{
          uri:
            "https://img.wallpapersafari.com/phone/1125/2436/76/23/CMlYyE.jpg"
        }}
      >
        <View style={styles.nav}>
          <Text style={styles.headerh1}>Young minds</Text>
        </View>

        <View style={styles.multiButtonContainer}>
          <View style={{alignItems:'center'}}>
         <TouchableOpacity activeOpacity={0.5} 
         alignItems='center'
         onPress={() => {
            Linking.openURL("https://formfaca.de/sm/Ru6p0ZYdw");
          }}>
         <Text style={{ color: "white",  height:90,width:450, fontSize: 45, padding:10 , margin:5, paddingLeft:95, backgroundColor:'purple', justifyContent:'center' }}>
             Memory Test
                </Text>
         </TouchableOpacity></View>
         
         <View style={{height:20}}></View>

         <View style={{alignItems:'center'}}>
         <TouchableOpacity activeOpacity={0.5}>
         <Text style={{ color: "white", height:60,width:800, fontSize: 30,padding:10 , margin:5, paddingLeft:70, backgroundColor:'red', justifyContent:'center' }}>
             Do you remember your score ? Then press Let's Go
                </Text>
         </TouchableOpacity></View>
         
         <View style={{height:20}}></View>

         <View style={{alignItems:'center'}}>
         <TouchableOpacity activeOpacity={0.5} onPress={()=>props.navigation.navigate('Eval')}>
         <Text style={{ color: "white", height:100,width:350, fontSize: 55,padding:10 , margin:5, paddingLeft:65, backgroundColor:'#009933', justifyContent:'center' }}>
             Let's Go !
                </Text>
         </TouchableOpacity></View>


       
        </View>
      
        <KommunicateChat />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end"
    //position:'absolute',
    // flexDirection:'column'
  },
  nav: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "orange",
    height: 50,
    position: "absolute"
  },
  headerh1: {
    color: "#fff",
    fontfamily: "McLaren",
    fontSize: 25,
    fontWeight: "bold",
    position: "absolute",
    // cursive,
    fontweight: 200
  }, 
  multiButtonContainer: {
   margin: 10,
   flexDirection: "column",
   justifyContent: "space-between",
   alignContent:'space-between',
   alignItems:'flex-start',
   position:'relative'
 },
  background: {
    flex: 1,
    //justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "217%"
  },
  buttonContainer: {
    margin: 20,
    top: 100
  },
  multiButtonContainer: {
    margin: 5,
    flexDirection: "column",
    justifyContent: "center",
    top: 110
  }
});
export default SurveyAttachment;
 /* <View style={styles.buttonContainer}>
          
          <Form/>
        </View>
        <View>
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "rgb(100,140,205)",
                  height: 40,
                  top:-2
                }}
              >
                <Text style={{ color: "white", fontSize: 25 }}>
                  ENTER YOUR SCORE
                </Text>
              </View>
              
              <TextInput
                style={{
                  height: 70,
                  alignItems: "center",
                  backgroundColor: "azure",
                  fontSize: 30,
                  
                }}
                
                //onChangeText = { ( text ) => { this.setState({ TextInputValue: text })} }
                onChangeText={(text) => this.setState({ text })}
              />
            </View>

            <View style={styles.multiButtonContainer}>
              <Button
                //onPress={this.Nested_If_Else}
                onPress={()=>props.navigation.navigate('Home')}
                title="SUBMIT"
                color="orange"

              />
            </View>

            <View style={{ padding: 10 }}></View>
          </View>
        </View> */
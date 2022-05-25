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

const MediScore = (props) => {
  {
     
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
          <Text style={{ color: "white",  height:80,width:550, fontSize: 20, padding:10 , margin:5, paddingLeft:50, backgroundColor:'dodgerblue', justifyContent:'center' }}>
             Woohoo my friend, Now that that's over let's check out the things you can do
                </Text></View><View style={{height:30}}></View>
                <View style={{alignItems:'center'}}>
         <TouchableOpacity activeOpacity={0.5} 
         alignItems='center'
         onPress={()=>props.navigation.navigate('Music')}>
         <Text style={{ color: "white",  height:50,width:350, fontSize: 20, padding:10 , margin:5, paddingLeft:65, backgroundColor:'purple', justifyContent:'center' }}>
             Chill out with some Tunes
                </Text>
         </TouchableOpacity></View>
         
         <View style={{height:20}}></View>

         <View style={{alignItems:'center'}}>
         <TouchableOpacity activeOpacity={0.5} onPress={()=>props.navigation.navigate('Exercise')}>
         <Text style={{ color: "white", height:50,width:350, fontSize: 20,padding:10 , margin:5, paddingLeft:60, backgroundColor:'purple', justifyContent:'center' }}>
             Check out these Exercises
                </Text>
         </TouchableOpacity></View>
         
         <View style={{height:20}}></View>

         <View style={{alignItems:'center'}}>
         <TouchableOpacity activeOpacity={0.5} onPress={()=>props.navigation.navigate('Game')}>
         <Text style={{ color: "white", height:50,width:300, fontSize: 20,padding:10 , margin:5, paddingLeft:80, backgroundColor:'purple', justifyContent:'center' }}>
         See your quote
                </Text>
         </TouchableOpacity></View>

         <View style={{height:20}}></View>

         <View style={{alignItems:'center'}}>
         <TouchableOpacity activeOpacity={0.5} onPress={()=>props.navigation.navigate('Articles')}>
         <Text style={{ color: "white", height:50,width:500, fontSize: 20,padding:10 , margin:5, paddingLeft:40, backgroundColor:'purple', justifyContent:'center' }}>
         Here you might see articles you can make use of
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
   flexDirection: "row",
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
export default MediScore;
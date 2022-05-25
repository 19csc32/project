import React, { Component } from "react";
import {
 AppRegistry,
 Image,
 ImageBackground,
 Text,
 StyleSheet,
 View,
 TouchableOpacity
} from "react-native";
import audio from "./assets/Spring-Flowers.mp3";
import audios from "./assets/Guitar-Gentle.mp3";
export default class Music extends Component {
 // Binding function with this class.
 callFun = () => {
   new Audio(audio).play();
 };
 callFunc = () => {
   new Audio(audios).play();
 };
 
 render() {
   return (
     <ImageBackground
       style={styles.background}
       source={{
         uri:
           "https://img.wallpapersafari.com/phone/1125/2436/76/23/CMlYyE.jpg"
       }}
     >
       <View style={styles.MainContainer}>
         <View>
           <Text style={styles.headerh1}>vaanga kekkalam</Text>
           <Text>peace</Text>
           <TouchableOpacity activeOpacity={0.5} onPress={this.callFun}>
             <Image
               source={require("./assets/peace2.png")}
               style={styles.ImageClass}
             />
           </TouchableOpacity>
           <Text>calm</Text>
           <TouchableOpacity activeOpacity={0.5} onPress={this.callFunc}>
             <Image
               source={require("./assets/calm2.png")}
               style={styles.ImageClass}
             />
           </TouchableOpacity>
           <Text>happiness</Text>
           <TouchableOpacity activeOpacity={0.5} onPress={this.callFun}>
             <Image
               source={require("./assets/happy2.png")}
               style={styles.ImageClass}
             />
           </TouchableOpacity>
         </View>
       </View>
     </ImageBackground>
   );
 }
}
 
const styles = StyleSheet.create({
 MainContainer: {
   flex: 10,
 
   // Set content's vertical alignment.
   justifyContent: "center",
 
   // Set content's horizontal alignment.
   alignItems: "center"
 },
 
 background: {
   width: "100%",
   height: "150%",
   position: "absolute"
 },
 headerh1: {
   color: "black",
   fontSize: 25,
   fontFamily: "times new roman",
   fontWeight: 300,
   fontWeight: "bold"
 },
 
 ImageClass: {
   // Setting up image width.
   width: 200,
 
   // Setting up image height.
   height: 200,
   alignItems: "center"
 }
});
 


import React from "react";
import { StyleSheet, Button, View, ImageBackground } from "react-native";
import email from "react-native-email";
import Calen from "./Calen";
export default class Email extends React.Component {
 render() {
   return (
     <ImageBackground
       style={{ height: "100%", width: "100%", position: "absolute" }}
       source={{
         uri:
           "https://img.wallpapersafari.com/phone/1125/2436/76/23/CMlYyE.jpg"
       }}
     >
       <View>
       <Calen/></View>
       <View style={styles.container}>
         <Button title="Send Mail" onPress={this.handleEmail} />
       </View>
     </ImageBackground>
   );
 }
 
 handleEmail = () => {
   const to = ["youngminds103@gmail.com"]; // string or array of email addresses
   email(to, {
     // Optional additional arguments
     cc: ["type your email for example", "doooo@daaa.com"], // string or array of email addresses
     bcc: "mee@mee.com", // string or array of email addresses
     subject: "Regarding appointment booking.",
     body:
       "I Would Like To Talk With YOUNGMINDS people...If you want add some more informations "
   }).catch(console.error);
 };
}
 
const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: "center",
   justifyContent: "center",
   top:120,  
 }
});

import React from "react";
import {
 Alert,
 Image,
 ImageBackground,
 StyleSheet,
 View,
 Text,
 Button,
} from "react-native";
import KommunicateChat from "./Chatbot";
import { useState } from "react";
const words = [
  {
    text: "Today, you should remember to smile",
    key: 1
  },
  {
    text: "The key to success is a happy mind",
    key: 2
  },
  {
    text: "You deserve your breaks, you've done well",
    key: 3
  },
  {
    text:
      "No matter what anyone says, it's upto you to take it so do it your way",
    key: 4
  },
  {
    text: "Sometimes being selfish is fine",
    key: 5
  },
  {
    text:
      "Outside world can be cruel today but still there's a new day everday",
    key: 6
  },
  {
    text: "Treat yourself, you deserve it",
    key: 7
  },
  {
    text: "Your friend misses you",
    key: 8
  },
  {
    text: "Come on, giddy up ! You can be yourself now !",
    key: 9
  },
  {
    text: "I love you, no matter what the world says",
    key: 10
  }
];
const GameScreen = (props) => {
//const {r,g,b}=route.params;
const [textValue, setTextValue] = useState("");

const changeTextValue = () => {
  const len = words.length;
  setTextValue(words[Math.floor(Math.random() * len)].text);
};
return (
   <ImageBackground
     style={styles.background}
     source={{
       uri: "https://img.wallpapersafari.com/phone/1125/2436/76/23/CMlYyE.jpg"
     }}>
       <View style={styles.nav}>
          <Text style={styles.headerh1}>Young minds</Text>
        </View><View style={{height:20}}> </View>
       <View>
     <Image
         style={styles.logo}
         source={{
           uri:
           "https://th.bing.com/th/id/OIP.mYwLzkDEBqAqPQsxBE7zVQAAAA?pid=ImgDet&rs=1"
         }}
       ></Image>
     <View style={{height:270, width:350,left: 70, position:'absolute',
   top:105, borderRadius: 180 , backgroundColor:colorMix()}} />
     <Text
          style={{
            height: 270,
            width: 270,
            left: 110,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            top: 220,
            color: "white"
          }}
        >
          {textValue}
        </Text>
     </View>
     <View style={{height:20}}> </View>
         
     <Button onPress={changeTextValue} color="#009933" title="Get your quote" />
       
       <KommunicateChat/>
     </ImageBackground>
   );
  };
 const r=200, b=200, g=200; 
  const colorMix=()=>{
    //export rgb values from database
    const r =Math.floor(Math.random()*256);
    const b =Math.floor(Math.random()*256);
    const g =Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  const colorRed=()=>{
    //update database rgb values and reload to props navigate.
   // red=red-50;
    //props.navigation.navigate('Log');
  }
 
 /*
      const [red, setRed] = React.useState(0);
  const [blue, setBlue] = React.useState(0);
  const [green, setGreen] = React.useState(0);
    
*/
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      //justifyContent: "flex-end",
      alignItems: "center",
      position: "absolute",
      width: "100%",
      height: "100%"
    },
     logo: {
   width: 500,
   height: 500,
   
 },
 nav: {
  alignItems: "center",
  width: "100%",
  backgroundColor: "orange",
  height: 50
},
headerh1: {
  color: "#fff",
  fontfamily: "McLaren",
  fontSize: 25,
  fontWeight: "bold",
  // cursive,
  fontweight: 200
},
});
  export default GameScreen;


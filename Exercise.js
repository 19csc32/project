import React, { Component } from "react";
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  View,
  ImageBackground,
  button
} from "react-native";
const Exer = (props) => {

  
    return (
      <ImageBackground
        style={styles.background}
        source={{
          uri:
            "https://img.wallpapersafari.com/phone/1125/2436/76/23/CMlYyE.jpg"
        }}
      >
        <View style={styles.nav1}>
          <Text style={styles.headerh1}>YOUNG MINDS</Text>
          <View></View>
        </View>
        <Text style={styles.titleStyle}>
          "Daily exercise is one of the keys to excellent health.”
        </Text>

        <SafeAreaView style={styles.container}>
          <View style={{height:20}}></View>
          <SafeAreaView></SafeAreaView>
          <SafeAreaView style={styles.buttonContainer}></SafeAreaView>

          <Image
            source={require("./assets/5.png")}
            style={styles.ImageClass}
          />
          <SafeAreaView style={styles.multiButtonContainer}>
            <Button
              onPress={()=>props.navigation.navigate('Phy')}
              title="Start Now"
              color="#000000"
            />
          </SafeAreaView>
          <SafeAreaView></SafeAreaView>
          <Image
            source={require("./assets/6.png")}
            style={styles.ImageClass}
          />

          <SafeAreaView style={styles.multiButtonContainer}>
           
          <Button
              
              title="TYPES"
              color="#000000"
              onPress={()=>props.navigation.navigate('Ment')}
            /><View style={{width:10}}></View>
             <Button
              onPress={()=>props.navigation.navigate('Ment1')}
              title="VIEW"
              color="#000000"
            />
          </SafeAreaView>
        </SafeAreaView>
      </ImageBackground>
    );
  }

export default Exer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  background: {
    flex: 1,
    fontsize: 50,
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "120%"
  },
  titleStyle: {
    fontSize: 30,
    margin: 20,
    textAlign: "center"
  },
  ImageClass: {
    width: 230,

    height: 230,
    alignItems: "center"
  },
  tex: {
    fontSize: 500,
    fontWeight: "bold"
  },

  multiButtonContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  nav1: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "pink",
    height: 50,
    fontsize: 50,
    fontFamily: "times new roman"
  }
});

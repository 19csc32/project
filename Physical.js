import React, { Component } from "react";
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  button
} from "react-native";
const Phy = (props) => {

  
    return (
        <ImageBackground
        style={styles.background}
        source={{
          uri:
            "https://img.wallpapersafari.com/phone/1125/2436/76/23/CMlYyE.jpg"
        }}
      >
        <SafeAreaView style={styles.nav1}>
          <Text style={styles.headerh1}>YOUNG MINDS</Text>
          <SafeAreaView></SafeAreaView>
        </SafeAreaView>
        <Text style={styles.titleStyle}>1. Front Squat</Text>
        <Text style={styles.titleStyle}>STEPS:</Text>

        <Text style={styles.titleStyle1}>
          1. Set a barbell on a power rack at about shoulder height of your
          body.
        </Text>
        <Text style={styles.titleStyle1}>
          2. Grab the power with an overhand grip at shoulder width and raise
          your elbows until your upper arms are parallel to the floor.
        </Text>
        <Text style={styles.titleStyle1}>
          3. Take the bar out of the rack and let it rest on your fingertips.
          Your elbows should be all the way up throughout the movement..
        </Text>
        <Text style={styles.titleStyle}>
          2. Thumb Pinch Strengthening Exercise:
        </Text>
        <Text style={styles.titleStyle}>STEPS:</Text>
        <Text style={styles.titleStyle1}>
          1. Extend your arm with your palm facing up toward the ceiling of your
          body.
        </Text>
        <Text style={styles.titleStyle1}>
          2.Gently pull your fingers back toward your body. Hold for 10 to 30
          seconds.
        </Text>
        <Text style={styles.titleStyle}>3. BICYCLE CRUNCH</Text>
        <Text style={styles.titleStyle}>STEPS:</Text>
        <Text style={styles.titleStyle1}>
          1. Lie on the ground with one leg extended straight out and one leg
          bent with your knee pulled in towards your chest
        </Text>

        <SafeAreaView style={styles.container}>
          
          <SafeAreaView style={styles.buttonContainer}></SafeAreaView>

          <SafeAreaView style={styles.multiButtonContainer}>
            <Button
              onPress={()=>props.navigation.navigate('timer')}
              title="TIMER"
              color="#000283"
            />
          </SafeAreaView>
          <SafeAreaView></SafeAreaView>

          <SafeAreaView></SafeAreaView>

          <SafeAreaView style={styles.multiButtonContainer}>
            <Button onPress={()=>props.navigation.navigate('Phy1')} title="lets see how to do" color="#000000" />
          </SafeAreaView>
        </SafeAreaView>
      </ImageBackground>
    );
  
}

export default Phy;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  background: {
    flex: 1,
    fontsize: 50,
    position: "absolute",
    width: "100%",
    height: "150%"
  },

  titleStyle: {
    fontSize: 30,
    margin: 20,
    textAlign: "center"
  },
  titleStyle1: {
    fontSize: 15,
    margin: 20,
    textAlign: "left"
  },
  ImageClass: {
    width: 230,

    height: 170,
    alignItems: "center"
  },
  tex: {
    fontSize: 500,
    fontWeight: "bold"
  },

  multiButtonContainer: {
    margin: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems:'center'
  },
  headerh1: {
    color: "#fff",
    fontfamily: "McLaren",
    fontSize: 25,
    fontWeight: "bold",
    // cursive,
    fontweight: 200
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

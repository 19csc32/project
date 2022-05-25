import React, { Component } from "react";
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  ImageBackground,
  button,
  View,
} from "react-native";

const Articles1 = (props) => {
 
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
        <View style={{top:50,backgroundColor: "pink",color:"pink"}}>
        <View style={styles.nav1}>
          <Text style={styles.headerh1}>ARTICLES</Text>
        </View></View>

        <View style={styles.container}>
          
          <View style={styles.multiButtonContainer}>
            <Button
              onPress={()=>props.navigation.navigate('Exam')}
              title="Exam stress"
              color="#008080"
            />
          </View>
          <View style={styles.multiButtonContainer}>
            <Button
              onPress={()=>props.navigation.navigate('Relation')}
              title="Friendship problems"
              color="#008080"
            />
          </View>
          <View style={styles.multiButtonContainer}>
            <Button
              onPress={()=>props.navigation.navigate('Stage')}
              title="Stage fear"
              color="#008080"
            />
          </View>
          </View>

        
      </ImageBackground>
    );
  }

  /*
    <View>
        <View style={styles.nav1}>
          <Text style={styles.headerh1}>YOUNG MINDS</Text>
          <View></View>
        </View>
        <View style={styles.nav1}>
          <Text style={styles.headerh1}>ARTICLES</Text>
          <View></View>
        </View>

        <View style={styles.container}>
          
          <View style={styles.multiButtonContainer}>
            <Button
              
              title=" Stress"
              color="#008080"
            />
          </View>
          <View></View>
          <View style={styles.multiButtonContainer}>
            <Button
              
              title="depression"
              color="#008080"
            />
          </View>
          
          <View style={styles.multiButtonContainer}>
            <Button
              
              title="anxeity"
              color="#008080"
            />
          </View>
          <View style={styles.multiButtonContainer}>
            <Button  title="fear" color="#008080" />
          </View>
        </View></View>
  */
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
    height: "100%",
  },
  headerh1: {
    color: "#fff",
    fontfamily: "McLaren",
    fontSize: 25,
    fontWeight: "bold",
    position: "absolute",
    // cursive,
    //fontweight: 200
  },
  tex: {
    fontSize: 500,
    fontWeight: "bold"
  },
  buttonContainer: {
    margin: 10,
    backgroundColor: "lightblue"
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
  },
  nav: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "orange",
    height: 50,
    position: "absolute"
  },
});

export default Articles1;
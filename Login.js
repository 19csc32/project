import React, { Component } from "react";
import {
  Alert,
  ImageBackground,
  AppRegistry,
  Button,
  StyleSheet,
  View,
  TextInput,
  Text
} from "react-native";
import KommunicateChat from './Chatbot';

const Login = (props) => {
 

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
        <View style={styles.container}>
        
          <View>
            <View style={styles.buttonContainer}>
              <Button
                
                title="Enter your User name"
              />
              <TextInput
                style={{ height: 40, backgroundColor: "azure", fontSize: 20 }}
                onChangeText={(text) => this.setState({ text })}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                
                title=" Enter your Password"
                color=""
              />
              <TextInput
                style={{ height: 40, backgroundColor: "azure", fontSize: 20 }}
                onChangeText={(text) => this.setState({ text })}
              />
            </View>

            <View style={styles.multiButtonContainer}>
              <Button
                onPress={()=>props.navigation.navigate('Home')}
                title="LOGIN"
                color="orange"
              />
            </View>
            <View style={styles.multiButtonContainer}>
              <Button
              
                title="SIGN UP"
                color="orange"
              />
            </View>
            <View style={{ padding: 10 }}></View>
          </View>
        </View>
        <KommunicateChat />
      </ImageBackground>
      
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: "center"
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
  background: {
    flex: 1,
    //justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  tex: {
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonContainer: {
    margin: 20
  },
  multiButtonContainer: {
    margin: 5,
    flexDirection: "column",
    justifyContent: "center"
  }
});

export default Login;
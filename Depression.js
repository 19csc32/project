import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Linking
} from "react-native";

const Relationship = (props) => {
  
    return (
      <View style={styles.MainContainer}>
        <SafeAreaView style={styles.nav}>
          <Text style={styles.titleStyle}>Young minds</Text>
          <SafeAreaView></SafeAreaView>
        </SafeAreaView>

        <Text style={styles.titleStyle}>
          1. Young Adolescents' Conflicts with Siblings and Friends
        </Text>
        <Image
          source={require("./assets/relation.png")}
          style={styles.ImageClass}
        />

        <Text style={styles.textStyle}>
          One hundred twelve white, middle class 10–14-year-olds participated in
          a descriptive study of conflict with their closest sibling and best
          friend. Analysis of questionnaire ratings (completed by all
          participants) revealed that frequency of conflict was significantly
          related to ratings of the friend's importance and satisfaction with
          the friendship but was not related to sibling relationship ratings.
          Descriptions of specific conflicts in the two relationships (provided
          by 81 youngsters) were compared to examine the onset, process, and
          aftermath of conflict. Conflicts between siblings and friends differed
          in how they were structured and experienced, suggesting that conflict
          functions differently in each relationship..{" "}
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL(
                "https://link.springer.com/article/10.1023/A:1024529921987"
              );
            }}
          >
            Read more
          </Text>
        </Text>
        <View style={styles.empty}></View>
        <View>
          <Text style={styles.titleStyle}>
            2. Representation of Friendship and Aggressive Behavior
          </Text>
        </View>
        <Image
          source={require("./assets/relation2.png")}
          style={styles.ImageClass}
        />

        <Text style={styles.textStyle}>
          This study examines the representation of friendship during middle
          childhood and its impact on aggressive behavior. The literature shows
          that friendship is almost a “gym of social skills,” which, in turn,
          are protective factors against aggressive behavior; in this regard,
          the quality of friendship is especially important, but this quality
          becomes less and less accessible to direct observation as children
          grow older and spend most of their time in the externally regulated
          environment of primary school.{" "}
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL(
                "https://www.frontiersin.org/articles/10.3389/fpsyg.2022.835672/full"
              );
            }}
          >
            Read more
          </Text>
        </Text>

        <View>
          <View style={styles.empty}></View>
        </View>

        <Text style={styles.titleStyle}>
          3.12 Expert Solutions for Your Everyday Friendship Problems
        </Text>
        <Image
          source={require("./assets/relation3.png")}
          style={styles.ImageClass}
        />

        <Text style={styles.textStyle}>
          Friends are crucial for our physical and mental well-being but these
          relationships aren’t always smooth sailing. In fact, it’s common to
          experience some serious hurt from your friends and a major way this
          happens is through broken promises, says Jan Yager, PhD, friendship
          coach, sociologist, and author of When Friendship Hurts and
          Friendshifts. Perhaps he canceled plans at the last minute or she
          declined to attend an important party{" "}
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL(
                "https://www.thehealthy.com/family/relationships/friendship-problems/"
              );
            }}
          >
            Read more
          </Text>
        </Text>
        <View style={styles.empty}></View>
      </View>
    );
  }

const styles = StyleSheet.create({
  MainContainer: {
    flex: 10,

    // Set content's vertical alignment.

    // Set content's horizontal alignment.
    alignItems: "center",

    backgroundColor: "#FFF8E1",
    width: "100%",
    height: "320%",
    position: "absolute"
  },
  textStyle: {
    margin: 20,
    alignSelf: "center",
    textAlign: "left"
  },
  empty: {
    height: "10"
  },
  titleStyle: {
    fontSize: 30,
    margin: 10,
    textAlign: "center"
  },
  headerh: {
    alignment: "center",
    width: "100%",
    backgroundcolor: "pink",
    height: "50"
  },
  ImageClass: {
    // Setting up image width.
    width: 250,

    // Setting up image height.
    height: 250,
    alignItems: "center",
    justifyContent: "center"
  },
  hyperlinkStyle: {
    color: "red"
  }
});
export default Relationship;
//AppRegistry.registerComponent("Myproject", () => Myproject);
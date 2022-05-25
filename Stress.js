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

const ExamStress = (props) => {
  
    return (
      <View style={styles.MainContainer}>
        <SafeAreaView style={styles.nav}>
          <Text style={styles.titleStyle}>Young minds</Text>
          <SafeAreaView></SafeAreaView>
        </SafeAreaView>

        <Text style={styles.titleStyle}>
        1. How to overcome exam anxiety
        </Text>
        <Image
          source={require("./assets/exam.png")}
          style={styles.ImageClass}
        />

        <Text style={styles.textStyle}>
          Do you feel like your mind freezes during exams? Do you find yourself
 thinking “I really can’t do this”? Does your heart race fast or do you
 find it hard to breathe during exams? Most people feel anxious when
 taking an exam, but research shows that some people are more likely to
 suffer from exam anxiety than others. So why is this? And what can you
 do to calm your nerves{" "}
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL(
                "https://theconversation.com/how-to-overcome-exam-anxiety-67445/"
              );
            }}
          >
            Read more
          </Text>
        </Text>
        <View style={styles.empty}></View>
        <View>
          <Text style={styles.titleStyle}>
          2. What Is Exam Anxiety: Everything You Need To Know About Exam
          </Text>
        </View>
        <Image
          source={require("./assets/exam1.png")}
          style={styles.ImageClass}
        />

        <Text style={styles.textStyle}>
        Exam anxiety is normal, especially to first-time candidates or when
 taking a major or final test. Although it is typical, it can have both
 positive and adverse impacts on the candidate and the overall
 performance, depending on the anxiety level, how you deal with the
 exam anxiety and your perspectives..{" "}
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL(
                "https://insightfulcounselling.com/exam-anxiety/"
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
        3. 10 Fast and Effective Ways to Overcome Exam Fright
        </Text>
        <Image
          source={require("./assets/exam2.png")}
          style={styles.ImageClass}
        />

        <Text style={styles.textStyle}>
        Exams are often considered a ‘fear’ factor among children. Students of
 all age groups do undergo exam anxiety and have ‘exam phobia’ when
 it’s around the corner. Some do take it easy while some cannot. The
 extent of exam stress is too much that drives them to take extreme
 measures. The fear of exams is more before the exams causing them to
 under perform on that day..{" "}
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL(
                "https://content.wisestep.com/how-to-overcome-exam-fear/"
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
export default ExamStress;
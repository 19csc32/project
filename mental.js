import React, { Component } from "react";
import { Text, Image, View, StyleSheet, ScrollView } from "react-native";

class Ment extends Component {
    
  state = {
    names: [
      { name: "YOGA heals the soul", id: 1 },
      { name: "WALK towards good", id: 2 },
      { name: "MEDITATE your mind", id: 3 },
      { name: "CYCLING, bicycling is a life", id: 4 },
      { name: "LISTEN MUSIC, music is life itself ", id: 5 },
      { name: "FRIENDS, beautiful friends refresh soul", id: 6 },
      { name: "FAMILY, happiness is homemade", id: 7 },
      { name: "NATURE, look deep into nature", id: 8 },
      { name: "PETS, everything i know, i learned for dogs", id: 9 },
      { name: "ART, art is not a thing its a way", id: 10 },
      { name: "CHILDREN, the soul is healed with childrens", id: 11 },
      { name: "ALONE, its okay to bloom alone", id: 12 }
    ]
  };
  render() {
    return (
      <View>
        <ScrollView>
          {this.state.names.map((item, index) => (
            <View key={item.id} style={styles.item}>
              <Text>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
export default Ment;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    margin: 2,
    borderColor: "#2a4944",
    borderWidth: 1,
    backgroundColor: "#d2f7f1"
  }
});

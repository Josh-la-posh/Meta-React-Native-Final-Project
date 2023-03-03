import * as React from "react";
import { Pressable, View, Text, Image, StyleSheet } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.regularText}>Little Lemon, your local Mediterranean Bistro</Text>

      <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("Subscribe")}>
        <Text style={styles.button}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 120
  },
  image: {
    width: 150,
    height: 150,
  },
  regularText: {
    fontSize: 30,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonContainer: {
    width: 350,
    borderRadius: 6,
    backgroundColor: 'green',
    marginTop: 150,
    padding: 7,
  },
  button: {
    color: '#fff',
    textAlign: 'center',
  }
})

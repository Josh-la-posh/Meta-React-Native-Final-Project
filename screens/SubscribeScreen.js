import * as React from "react";
import { View, Image, Text, Pressable, StyleSheet, TextInput, Alert } from "react-native";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  const [email, onChangeEmail] = React.useState('');
  const isEmailValid = validateEmail(email);
  // Add subscribe screen code here
  return (
      <View style={styles.container}>
        <Image
          source={require("../assets/little-lemon-logo-grey.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.regularText}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>

        <TextInput 
          style={styles.textInput}
          placeholder="Type your email"
          value={email}
          onChangeText={onChangeEmail}
          textContentType="emailAddress"
          keyboardType={'email-address'}
        />

        <Pressable style={isEmailValid ? styles.buttonContainer : styles.disabled} onPress={() => Alert.alert("Thank you for subscribing, stay tuned!")} disabled={!isEmailValid} >
          <Text style={styles.button}>Subscribe</Text>
        </Pressable>
      </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  image: {
    width: 100,
    height: 100,
  },
  regularText: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 30
  },
  textInput: {
    borderWidth: 1,
    height: 40,
    width: 340,
    paddingLeft: 6,
    marginBottom: 30,
    borderRadius: 8
  },
  buttonContainer: {
    width: 340,
    borderRadius: 8,
    backgroundColor: 'green',
    padding: 7,    
  },
  disabled: {
    width: 340,
    borderRadius: 8,
    backgroundColor: 'grey',
    opacity: 0.5,
    padding: 8
  },
  button: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
})

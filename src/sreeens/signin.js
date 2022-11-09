import {View, Text, TextInput, ScrollView, StyleSheet, Button, SafeAreaView,} from "react-native";
import React from "react";

const SignIn = () => {
  return (
    <ScrollView style={styles.main}>
      <SafeAreaView style={styles.l}>
        <View style={styles.top}>
          <Text style={styles.texttop}>Sign In</Text>
        </View>

        <View style={styles.center}>
          <View style={{ marginTop: 40 }}>
            <Text style={styles.textcenter}>Your email</Text>
            <TextInput
              style={styles.input}
              placeholder="example@email.com"
              keyboardType="email-address"
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.textcenter}>Your password</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••••••••••••"
              keyboardType="visible-password"
            />
          </View>
          <View style={{ marginTop: 50, marginHorizontal: 100 }}>
            <Button title="Sign In" color={"#2196F3"} width="40"/>
          </View>
          <View style={{ marginTop: 50, marginHorizontal: 100 }}>
            <Text style={styles.textbottom}>Create Account?</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#000000",
    width: "100%",
  },
  top: {
    backgroundColor: "#ff6347",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  texttop: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 20,
    backgroundColor: "#ff6347",
    color: "#ffffff",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 700,
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ff6347",
    marginHorizontal: 20,
    paddingHorizontal: 20,
    height: 50,
  },

  textbottom: {
    marginTop: 20,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  textcenter: {
    marginLeft: 20,
    color: "#a9a9a9",
  },
  l: {
    flex: 1,
    display: "flex",
  },
  button:{
  },
  
});
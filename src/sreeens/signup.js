import {View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput, Button, } from "react-native";
import React from "react";
 
const SignUp = () => {
   return (
     <ScrollView style={styles.main}>
       <SafeAreaView style={styles.l}>
         <View style={styles.top}>
           <Text style={styles.texttop}>Sign Up</Text>
         </View>
 
         <View style={styles.center}>
           <View>
             <Text style={styles.textcenter}>Address</Text>
             <TextInput style={styles.input} placeholder="123 Street Rd" />
           </View>
           <View style={{ marginTop: 30 }}>
             <Text style={styles.textcenter}>State</Text>
             <TextInput style={styles.input} placeholder="Victoria" />
           </View>
           <View style={{ marginTop: 30 }}>
             <Text style={styles.textcenter}>Your phone number</Text>
             <TextInput
               style={styles.input}
               placeholder="+61 1234567890"
               keyboardType="phone-pad"
             />
           </View>
           <View style={{ marginTop: 100, marginHorizontal: 100 }}>
             <Button title="Register" color={"#2196F3"} width="40" />
           </View>
         </View>
       </SafeAreaView>
     </ScrollView>
   );
 };
 
 export default SignUp;
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
   button: {
   },
   
 });
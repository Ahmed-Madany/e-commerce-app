import React from 'react'
import { ImageBackground, Text, View, StyleSheet, TextInput  , TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
export default function Login({navigation}) {
  return (
    <View style={{ flex: 1 }}>

      <ImageBackground 
        source={require('../assets/back.jpg')}
        style={styles.header}
      >
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.subtitle}>Please sign in to your existing account</Text>
      </ImageBackground>

      <View style={styles.form}>
        
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordBox}>
          <TextInput 
            style={{ flex: 1 }}
            placeholder="Enter your password"
            secureTextEntry
            placeholderTextColor="#aaa"
          />
          <AntDesign name="eye-invisible" size={20} color="black" />
        </View>

     
        <View style={styles.rememberRow}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="check-box-outline-blank" size={22} color="black" />
            <Text>Remember me</Text>
          </View>
          <Text style={styles.coloor}>Forgot Password?</Text>
        </View>

       
        <TouchableOpacity style={styles.loginBtn} activeOpacity={0.7}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

       
        <View style={styles.signupRow}>
          <Text>Don’t have an account?</Text>
          <Text style={styles.coloor}> Sign Up</Text>
        </View>

    
        <Text style={ {textAlign:"center",marginVertical: 20,color: "#aaa"}}>Or login with</Text>

        
        <View style={styles.socialRow}>
          <View style={styles.social}>
            <AntDesign name="google" size={26} color="#DB4437" />
          </View>

          <View style={styles.social}>
            <Entypo name="facebook-with-circle" size={26} color="#1877F2" />
          </View>

          <View style={styles.social}>
            <AntDesign name="apple" size={26} color="black" />
          </View>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 280,
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 14,
    color: "#ccc",
    marginTop: 10,
  },

  form: {
    
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    marginTop: -40
  },

  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },

  input: {
    padding: 15,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    marginBottom: 15
  },

  passwordBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 15
  },


  rememberRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
loginBtn: {
    backgroundColor: "#FF6F00",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5
  },

  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },

  coloor: {
    color: "#FF6F00",
    fontWeight: "bold"
  },


  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
  },

  social: {
    width: 55,
    height: 55,
    backgroundColor: "#f1f1f1",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  }
})


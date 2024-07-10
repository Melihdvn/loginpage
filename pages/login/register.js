import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, View, Image, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as EmailValidator from 'email-validator';

const RegisterInput = ({icon = null, children, styles = null, borderNone = null, height = null}) => {
  return (
      <View
          style={[
              {
                  width: borderNone !== null ? '100%' : '80%',
                  alignItems: 'center',
                  flexDirection: 'row',
                  borderBottomColor: "red",
                  borderBottomWidth: 1,
                  borderColor: borderNone !== null ? border : null,
                  borderWidth: borderNone !== null ? 1 : 0,
                  marginBottom: 16,
                  height: height !== null ? 150 : 54,
              },
              styles,
          ]}>
          {icon === null ? null : (
              <View style={{height: '100%', width: 50, justifyContent: 'center', alignItems: 'center'}}>{icon}</View>
          )}
          {children}
      </View>
  );
};

export default function Register({navigation}) {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [seePassword, setseePasword] = useState(1);
  var setError = useState(['']);

  const returnLogin = () => {
    navigation.navigate('Login');
  }

  const checkValid = () => {
    if (setPassword === '') {
        setError=(['Please enter your password.']);
        return false;
    }
    if (setRepeatPassword === '') {
        setError=(['Please enter your password again.']);
        return false;
    }
    if (setPassword !== setRepeatPassword) {
        setError=(['Passwords don\'t match.']);
        return false;
    }
    if (setMail === '') {
        setError=(['Please enter your e-mail address.']);
        return false;
    }
    if (!EmailValidator.validate(setMail)) {
        setError=(['Please enter a valid e-mail address.']);
        return false;
    }
    return true;
};

  const handleRegister = () => {

    valid = checkValid();

    if (valid) {
      Alert.alert('Register successful');
      console.log("User registered: " + mail )
    }
    else
    {
        console.log("User registered: " + setError )
    }
  };

  const switchSeePassword = () => {
    {seePassword === 1 ? setseePasword(0) : setseePasword(1)}
  };

  return (
    
<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{ flex: 1 }}>
              <View style={{flex:0.75, backgroundColor: "#990000"}}>
              <TouchableOpacity style={{paddingLeft:10, marginTop: 10, height:90, justifyContent: "flex-start", alignItems: "center", flexDirection: "row"}}
                                onPress={() => returnLogin()}>
      <Ionicons name="caret-back" size={20} color="white"/>
      <Text style={{fontSize: 20, color:"white"}}>Login</Text>
      </TouchableOpacity>
              </View>
      <View style={{ flex: 1.25, backgroundColor: "#990000", justifyContent: "flex-start", alignItems: "center" }}>
        <Image source={{ uri: "https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png-300x300.png" }} style={{ width: 100, height: 100, tintColor: "white" }} />
      </View>
      <View style={{ backgroundColor: "#222222", flexDirection: "row", paddingBottom:10 }}>
        <View style={{
          height: 50,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderBottomColor: "darkred",
          borderBottomWidth:2,
          marginBottom: 10
        }}>
          <Text style={{ color: "white" }}>Register</Text>
        </View>
        </View>
      <View style={{ flex: 5, backgroundColor: "#222222", alignItems: "center", justifyContent: "flex-start" }}>
          <RegisterInput
          icon={
              <Ionicons
                  name="mail"
                  size={20}
                  color="gray"
              />
          }>
          <TextInput
            placeholder="E-Mail Address"
            placeholderTextColor={"gray"}
            style={{
              height: 50,
              width: "80%",
              justifyContent: "center",
              color: "white",
              paddingLeft: 10,
              paddingTop: 5
            }}
            value={mail}
            onChangeText={setMail}
          />
          </RegisterInput>
          <RegisterInput
          icon={
              <Ionicons
                  name="lock-closed"
                  size={17}
                  color="gray"
              />
          }>
          <TextInput
            placeholder="Password"
            placeholderTextColor={"gray"}
            style={{
              height: 50,
              width: "80%",
              justifyContent: "center",
              color: "white",
              paddingLeft: 10,
              paddingTop: 5
            }}
          value={password}
          onChangeText={setPassword}
          secureTextEntry= {seePassword === 1 ? true : false}
        />
        <TouchableOpacity onPress={switchSeePassword} style={{}}>
        {seePassword ? (
                                <TouchableOpacity onPress={() => switchSeePassword()}>
                                    <Ionicons name="eye-off" size={20} color="red" />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => switchSeePassword()}>
                                    <Ionicons name="eye" size={20} color="red" />
                                </TouchableOpacity>
                            )}
        </TouchableOpacity>
        </RegisterInput>
        <RegisterInput
          icon={
              <Ionicons
                  name="lock-closed"
                  size={17}
                  color="gray"
              />
          }>
          <TextInput
            placeholder="Repeat Password"
            placeholderTextColor={"gray"}
            style={{
              height: 50,
              width: "80%",
              justifyContent: "center",
              color: "white",
              paddingLeft: 10,
              paddingTop: 5
            }}
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          secureTextEntry= {true}
        />
        </RegisterInput>
        <TouchableOpacity onPress={handleRegister} style={{
          height: 45,
          width: "80%",
          backgroundColor: "#990000",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          marginTop:10
        }}>
          <Text style={{ color: "white" }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}
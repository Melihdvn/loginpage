import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, View, Image, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoginInput = ({icon = null, children, styles = null, borderNone = null, height = null}) => {
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

export default function Login({navigation}) {
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState(0);
  const [seePassword, setseePasword] = useState(1);

  const handleLogin = () => {
    const correctMail = 'melih';
    const correctPhone = '5335632792'
    const correctPassword = 'sifre';

    if ((mail === correctMail || phone === correctPhone) && password === correctPassword) {
      Alert.alert('Login successful');
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const guestLogin = () => {
      Alert.alert('Login successful');
  };


  const switchPhone = () => {
    setSelectedOption(0);
  };

  const switchMail = () => {
    setSelectedOption(1);
  };

  const switchSeePassword = () => {
    {seePassword === 1 ? setseePasword(0) : setseePasword(1)}
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: "#990000", justifyContent: "flex-start", alignItems: "center" }}>
        <Image source={{ uri: "https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png-300x300.png" }} style={{ marginTop:82.5 , width: 100, height: 100, tintColor: "white" }} />
      </View>
      <View style={{ backgroundColor: "#222222", flexDirection: "row", paddingBottom:20 }}>
        <TouchableOpacity onPress={switchPhone} style={{
          height: 50,
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
          borderBottomColor: "red",
          borderBottomWidth: selectedOption === 0 ? 2 : 0
        }}>
          <Text style={{ color: "white" }}>Phone Number</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={switchMail} style={{
          height: 50,
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
          borderBottomColor: "red",
          borderBottomWidth: selectedOption === 1 ? 2 : 0
        }}>
          <Text style={{ color: "white" }}>E-Mail Address</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 5, backgroundColor: "#222222", alignItems: "center", justifyContent: "flex-start" }}>
        {selectedOption === 0 ? (
          <LoginInput
          icon={
              <Ionicons
                  name="phone-portrait-outline"
                  size={20}
                  color="gray"
              />
          }>
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor={"gray"}
            style={{
              height: 50,
              width: "80%",
              justifyContent: "center",
              color: "white",
              paddingLeft: 10,
              paddingTop: 5
            }}
            value={phone}
            onChangeText={setPhone}
          />
          </LoginInput>
        ) : (
          <LoginInput
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
          </LoginInput>
        )}
          <LoginInput
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
        </LoginInput>
        <TouchableOpacity onPress={handleLogin} style={{
          height: 45,
          width: "80%",
          backgroundColor: "#990000",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          marginTop:10
        }}>
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister} style={{}}>
          <Text style={{fontSize:17, color:"red", marginTop:20}}>Don't have an account ? Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={guestLogin} style={{}}>
          <Text style={{color:"lightblue", marginTop:25}}>Continue without Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}
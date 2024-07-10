import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    View,
    Image,
    TextInput,
    Alert,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import * as EmailValidator from 'email-validator';

const RegisterInput = ({icon, children}) => {
    return (
        <View
            style={{
                width: '80%',
                alignItems: 'center',
                flexDirection: 'row',
                borderBottomColor: 'red',
                borderBottomWidth: 1,
                marginBottom: 16,
                height: 54,
                backgroundColor: '#242424',
            }}>
            {icon && (
                <View
                    style={{
                        height: '100%',
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    {icon}
                </View>
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

    const returnLogin = () => {
        navigation.goBack();
    };

    const checkValid = () => {
        if (mail === '') {
            Alert.alert('Registration Failed', 'Please enter your e-mail address.');
            return false;
        }
        if (password === '') {
            Alert.alert('Registration Failed', 'Please enter your password.');
            return false;
        }
        if (repeatPassword === '') {
            Alert.alert('Registration Failed', 'Please enter your password again.');
            return false;
        } else if (password !== repeatPassword) {
            Alert.alert('Registration Failed', "Passwords don't match.");
            return false;
        } else if (!EmailValidator.validate(mail)) {
            Alert.alert('Registration Failed', 'Please enter a valid e-mail address.');
            return false;
        }
        return true;
    };

    const handleRegister = () => {
        valid = checkValid();

        if (valid) {
            Alert.alert('Register successful');
            console.log('User registered: ' + mail);
        } else {
            console.log('Registration fail');
        }
    };

    const switchSeePassword = () => {
        {
            seePassword === 1 ? setseePasword(0) : setseePasword(1);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{flex: 1}}>
                <View style={{flex: 0.75, backgroundColor: '#990000'}}>
                    <TouchableOpacity
                        style={{
                            paddingLeft: 10,
                            marginTop: 10,
                            height: 90,
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}
                        onPress={() => returnLogin()}>
                        <Ionicons name="caret-back" size={20} color="white" />
                        <Text style={{fontSize: 20, color: 'white'}}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 1.5,
                        backgroundColor: '#990000',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        borderBottomColor: '#333333',
                        borderBottomWidth: 1.5,
                    }}>
                    <Image source={require('../../assets/logo.png')} style={{width: 175, height: 175}} />
                </View>
                <View style={{backgroundColor: '#222222', flexDirection: 'row', paddingBottom: 10}}>
                    <View
                        style={{
                            height: 50,
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottomColor: 'darkred',
                            borderBottomWidth: 2,
                            marginBottom: 10,
                        }}>
                        <Text style={{color: 'white'}}>Register</Text>
                    </View>
                </View>
                <View style={{flex: 5, backgroundColor: '#222222', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <RegisterInput icon={<Ionicons name="mail" size={20} color="gray" />}>
                        <TextInput
                            placeholder="E-Mail Address"
                            placeholderTextColor={'gray'}
                            style={{
                                height: 50,
                                width: '80%',
                                justifyContent: 'center',
                                color: 'white',
                                paddingLeft: 10,
                                paddingTop: 5,
                            }}
                            value={mail}
                            onChangeText={setMail}
                        />
                    </RegisterInput>
                    <RegisterInput icon={<Ionicons name="lock-closed" size={17} color="gray" />}>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={'gray'}
                            style={{
                                height: 50,
                                width: '75%',
                                justifyContent: 'center',
                                color: 'white',
                                paddingLeft: 10,
                                paddingTop: 5,
                            }}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={seePassword === 1 ? true : false}
                        />
                        <TouchableOpacity onPress={() => switchSeePassword()}>
                            <Ionicons name={seePassword ? 'eye-off' : 'eye'} size={20} color="red" />
                        </TouchableOpacity>
                    </RegisterInput>
                    <RegisterInput icon={<Ionicons name="lock-closed" size={17} color="gray" />}>
                        <TextInput
                            placeholder="Repeat Password"
                            placeholderTextColor={'gray'}
                            style={{
                                height: 50,
                                width: '80%',
                                justifyContent: 'center',
                                color: 'white',
                                paddingLeft: 10,
                                paddingTop: 5,
                            }}
                            value={repeatPassword}
                            onChangeText={setRepeatPassword}
                            secureTextEntry={true}
                        />
                    </RegisterInput>
                    <TouchableOpacity
                        onPress={handleRegister}
                        style={{
                            height: 45,
                            width: '80%',
                            backgroundColor: '#990000',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                            marginTop: 10,
                        }}>
                        <Text style={{color: 'white'}}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

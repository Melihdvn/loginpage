import React, {useState, useEffect} from 'react';
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

const LoginInput = ({icon, children}) => {
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
                        paddingBottom: 2,
                    }}>
                    {icon}
                </View>
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
    const [seePassword, setSeePassword] = useState(1);
    const [error, setError] = useState('');
    const [cooldownCount, setCooldownCount] = useState(0);
    const [loginTryCounter, setLoginTryCounter] = useState(0);
    const [loginCorrect, setLoginCorrect] = useState(0);
    const [loginCorrectTimer, setLoginCorrectTimer] = useState(3);
    const [intervalId, setIntervalId] = useState(null);

    const checkValid = () => {
        const correctMail = 'melih';
        const correctPhone = '1';
        const correctPassword = 'a';

        if (selectedOption === 0) {
            if (phone === correctPhone && password === correctPassword) {
                setError('Login successful');
                return true;
            } else {
                if (phone === '') {
                    setError('Please enter your phone number.');
                    return false;
                }
                if (password === '') {
                    setError('Please enter your password.');
                    return false;
                } else {
                    if (phone === correctPhone) {
                        // Database bağlayınca databasede böyle bir kullanıcı var mı bakarız.
                        setError('Wrong password.');
                        return false;
                    } else setError('No such user found.');
                    return false;
                }
            }
        } else {
            if (mail === correctMail && password === correctPassword) {
                setError('Login successful');
                return true;
            } else {
                if (mail === '') {
                    setError('Please enter your e-mail address.');
                    return false;
                }
                if (password === '') {
                    setError('Please enter your password.');
                    return false;
                } else {
                    if (mail === correctMail) {
                        setError('Wrong password.');
                        return false;
                    } else setError('No such user found.');
                    return false;
                }
            }
        }
    };

    const handleLogin = () => {
        const valid = checkValid();
        if (valid) {
            setError('');
            setLoginTryCounter(0);
            setLoginCorrect(1);

            const id = setInterval(() => {
                setLoginCorrectTimer(prevTimer => prevTimer - 1);
            }, 1000);
            setIntervalId(id);
        } else {
            setLoginTryCounter(loginTryCounter + 1);
            if (loginTryCounter >= 2) {
                setCooldownCount(30);
                setLoginTryCounter(0);
            }
        }
    };

    useEffect(() => {
        if (loginCorrectTimer === 0) {
            clearInterval(intervalId);
            navigation.replace('HomeTabs');
        }
    }, [loginCorrectTimer]);

    useEffect(() => {
        var timer;
        if (cooldownCount > 0) {
            timer = setTimeout(() => {
                setCooldownCount(cooldownCount - 1);
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [cooldownCount]);

    const handleRegister = () => {
        navigation.navigate('Register');
    };

    const guestLogin = () => {
        setLoginCorrect(1);
    };

    const switchSeePassword = () => {
        setSeePassword(seePassword ? 0 : 1);
    };

    useEffect(() => {
        let timer;
        if (cooldownCount > 0) {
            timer = setTimeout(() => {
                setCooldownCount(cooldownCount - 1);
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [cooldownCount]);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{flex: 1}}>
                <View
                    style={{
                        flex: 2.25,
                        backgroundColor: '#990000',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        borderBottomColor: '#333333',
                        borderBottomWidth: 1.5,
                    }}>
                    <Image source={require('../../assets/logo.png')} style={{width: 175, height: 175}} />
                </View>
                <View
                    style={{
                        backgroundColor: '#222222',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingBottom: 20,
                    }}>
                    <TouchableOpacity
                        onPress={() => setSelectedOption(0)}
                        style={{
                            height: 50,
                            width: '50%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottomColor: 'red',
                            borderBottomWidth: selectedOption === 0 ? 2 : 0,
                        }}>
                        <Text style={{color: 'white'}}>Phone Number</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setSelectedOption(1)}
                        style={{
                            height: 50,
                            width: '50%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottomColor: 'red',
                            borderBottomWidth: selectedOption === 1 ? 2 : 0,
                        }}>
                        <Text style={{color: 'white'}}>E-Mail Address</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 5,
                        backgroundColor: '#222222',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    }}>
                    {selectedOption === 0 ? (
                        <LoginInput icon={<Ionicons name="phone-portrait-outline" size={20} color="gray" />}>
                            <TextInput
                                keyboardType="phone-pad"
                                placeholder="Phone Number"
                                placeholderTextColor={'gray'}
                                style={{
                                    height: 50,
                                    width: '80%',
                                    justifyContent: 'center',
                                    color: 'white',
                                    paddingLeft: 10,
                                }}
                                value={phone}
                                onChangeText={setPhone}
                            />
                        </LoginInput>
                    ) : (
                        <LoginInput icon={<Ionicons name="mail" size={20} color="gray" />}>
                            <TextInput
                                placeholder="E-Mail Address"
                                placeholderTextColor={'gray'}
                                style={{
                                    height: 50,
                                    width: '80%',
                                    justifyContent: 'center',
                                    color: 'white',
                                    paddingLeft: 10,
                                }}
                                value={mail}
                                onChangeText={setMail}
                            />
                        </LoginInput>
                    )}
                    <LoginInput icon={<Ionicons name="lock-closed" size={17} color="gray" />}>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={'gray'}
                            style={{
                                height: 50,
                                width: '75%',
                                justifyContent: 'center',
                                color: 'white',
                                paddingLeft: 10,
                            }}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={seePassword === 1 ? true : false}
                        />
                        <TouchableOpacity onPress={() => switchSeePassword()}>
                            <Ionicons name={seePassword ? 'eye-off' : 'eye'} size={20} color="red" />
                        </TouchableOpacity>
                    </LoginInput>

                    {error ? (
                        <Text
                            style={{
                                fontSize: 17,
                                color: 'red',
                                backgroundColor: '#222222',
                                borderWidth: 1,
                                borderColor: 'red',
                                borderRadius: 5,
                                paddingHorizontal: 10,
                                paddingVertical: 3,
                            }}>
                            {error}
                        </Text>
                    ) : null}

                    {cooldownCount > 0 ? (
                        <Text
                            style={{
                                fontSize: 17,
                                color: 'red',
                                backgroundColor: '#222222',
                                borderWidth: 1,
                                borderColor: 'red',
                                borderRadius: 5,
                                paddingHorizontal: 10,
                                paddingVertical: 3,
                                marginTop: 5,
                            }}>
                            {'Too many wrong attempts! Please wait: ' + cooldownCount + ' seconds'}
                        </Text>
                    ) : null}

                    {loginCorrect ? (
                        <Text
                            style={{
                                fontSize: 17,
                                color: 'green',
                                backgroundColor: '#222222',
                                borderWidth: 1,
                                borderColor: 'green',
                                borderRadius: 5,
                                paddingHorizontal: 10,
                                paddingVertical: 3,
                                marginTop: 5,
                            }}>
                            {'Login succesful! You will be redirected in ' + loginCorrectTimer + ' seconds.'}
                        </Text>
                    ) : null}

                    <TouchableOpacity
                        onPress={cooldownCount === 0 ? handleLogin : null}
                        style={{
                            height: 45,
                            width: '80%',
                            backgroundColor: cooldownCount === 0 ? '#990000' : '#444444',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                            marginTop: 10,
                        }}>
                        <Text style={{color: cooldownCount === 0 ? 'white' : '#333'}}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleRegister} style={{}}>
                        <Text style={{fontSize: 17, color: 'lightblue', marginTop: 20}}>
                            Don"t have an account ? Register
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={guestLogin} style={{}}>
                        <Text style={{color: '#666666', marginTop: 25}}>Continue without Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

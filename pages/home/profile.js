import React, {useRef, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const ProfileInput = ({icon, children, height = 54}) => {
    return (
        <View
            style={{
                width: '80%',
                alignItems: 'center',
                flexDirection: 'row',
                borderBottomColor: 'red',
                borderBottomWidth: 1,
                marginBottom: 16,
                height: height,
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

export default function Home({navigation}) {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneNumberRef = useRef(null);
    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const stateRef = useRef(null);
    const postalCodeRef = useRef(null);
    const countryRef = useRef(null);
    const dobRef = useRef(null);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [dob, setDob] = useState('');

    const formRefs = [
        firstNameRef,
        lastNameRef,
        emailRef,
        phoneNumberRef,
        addressRef,
        cityRef,
        stateRef,
        postalCodeRef,
        countryRef,
        dobRef,
    ];

    const formData = [firstName, lastName, email, phoneNumber, address, city, state, postalCode, country, dob];

    const returnHome = () => {
        navigation.goBack();
    };

    const handleSubmit = () => {
        formData.forEach((value, index) => {
            if (value === '') {
                formRefs[index].current.focus();
            }
        });
    };

    return (
        <View style={{flex: 1, backgroundColor: '#222222'}}>
            <View style={{height: 50}}></View>
            <ScrollView style={{paddingTop: 90}}>
                <View style={{paddingBottom: 100, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'white', fontSize: 25, marginBottom: 20}}>Profile</Text>
                    <ProfileInput>
                        <TextInput
                            ref={firstNameRef}
                            placeholder="First Name"
                            placeholderTextColor={'gray'}
                            style={{
                                height: '100%',
                                width: '80%',
                                justifyContent: 'center',
                                color: 'white',
                                paddingLeft: 10,
                            }}
                            onChangeText={text => setFirstName(text)}
                            value={firstName}
                        />
                    </ProfileInput>
                    <ProfileInput>
                        <TextInput
                            ref={lastNameRef}
                            placeholder="Last Name"
                            placeholderTextColor={'gray'}
                            style={{
                                height: '100%',
                                width: '80%',
                                justifyContent: 'center',
                                color: 'white',
                                paddingLeft: 10,
                            }}
                            onChangeText={text => setLastName(text)}
                            value={lastName}
                        />
                    </ProfileInput>
                    <ProfileInput>
                        <TextInput
                            ref={emailRef}
                            placeholder="Email Address"
                            placeholderTextColor={'gray'}
                            style={{
                                height: '100%',
                                width: '80%',
                                justifyContent: 'center',
                                color: 'white',
                                paddingLeft: 10,
                            }}
                            onChangeText={text => setEmail(text)}
                            value={email}
                        />
                    </ProfileInput>
                    <ProfileInput>
                        <TextInput
                            ref={phoneNumberRef}
                            placeholder="Phone Number"
                            placeholderTextColor={'gray'}
                            style={{
                                height: '100%',
                                width: '80%',
                                justifyContent: 'center',
                                color: 'white',
                                paddingLeft: 10,
                            }}
                            onChangeText={text => setPhoneNumber(text)}
                            value={phoneNumber}
                        />
                    </ProfileInput>
                    <ProfileInput height={100}>
                        <TextInput
                            ref={addressRef}
                            placeholder="Address"
                            placeholderTextColor={'gray'}
                            multiline
                            style={{
                                height: '100%',
                                width: '80%',
                                justifyContent: 'center',
                                color: 'white',
                                paddingLeft: 10,
                            }}
                            onChangeText={text => setAddress(text)}
                            value={address}
                        />
                    </ProfileInput>
                    <ProfileInput>
                        <TextInput
                            ref={cityRef}
                            placeholder="City"
                            placeholderTextColor={'gray'}
                            style={{
                                height: '100%',
                                width: '80%',
                                justifyContent: 'center',
                                color: 'white',
                                paddingLeft: 10,
                            }}
                            onChangeText={text => setCity(text)}
                            value={city}
                        />
                    </ProfileInput>
                    <ProfileInput>
                        <TextInput
                            ref={stateRef}
                            placeholder="State/Province"
                            placeholderTextColor={'gray'}
                            style={{
                                height: '100%',
                                width: '80%',
                                justifyContent: 'center',
                                color: 'white',
                                paddingLeft: 10,
                            }}
                            onChangeText={text => setState(text)}
                            value={state}
                        />
                    </ProfileInput>
                    <ProfileInput>
                        <TextInput
                            ref={postalCodeRef}
                            placeholder="Postal Code"
                            placeholderTextColor={'gray'}
                            style={{
                                height: '100%',
                                width: '80%',
                                justifyContent: 'center',
                                color: 'white',
                                paddingLeft: 10,
                            }}
                            onChangeText={text => setPostalCode(text)}
                            value={postalCode}
                        />
                    </ProfileInput>
                    <ProfileInput>
                        <TextInput
                            ref={countryRef}
                            placeholder="Country"
                            placeholderTextColor={'gray'}
                            style={{
                                height: '100%',
                                width: '80%',
                                justifyContent: 'center',
                                color: 'white',
                                paddingLeft: 10,
                            }}
                            onChangeText={text => setCountry(text)}
                            value={country}
                        />
                    </ProfileInput>
                    <ProfileInput>
                        <TextInput
                            ref={dobRef}
                            placeholder="Date of Birth"
                            placeholderTextColor={'gray'}
                            style={{
                                height: '100%',
                                width: '80%',
                                justifyContent: 'center',
                                color: 'white',
                                paddingLeft: 10,
                            }}
                            onChangeText={text => setDob(text)}
                            value={dob}
                        />
                    </ProfileInput>
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={{
                            height: 45,
                            width: '80%',
                            backgroundColor: '#990000',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                            marginTop: 15,
                        }}>
                        <Text style={{color: 'white'}}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View
                style={{
                    height: 100,
                    backgroundColor: '#111111',
                    borderTopWidth: 2,
                    borderColor: '#333',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    paddingTop: 15,
                    justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity onPress={() => returnHome(navigation)}>
                    <Ionicons name="home" size={35} color="gray" style={{flex: 1}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="person" size={35} color="gray" style={{flex: 1}} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

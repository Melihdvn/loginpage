import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Home({navigation}) {
    const signOut = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
        });
    };

    const openProfile = () => {
        navigation.navigate('Profile');
    };

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 9, alignItems: 'center', justifyContent: 'center', backgroundColor: '#222222'}}>
                <Text style={{color: 'white'}}>Home</Text>
                <TouchableOpacity
                    onPress={signOut}
                    style={{
                        height: 45,
                        width: '80%',
                        backgroundColor: '#990000',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        marginTop: 10,
                    }}>
                    <Text style={{color: 'white'}}>Sign Out</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#111111',
                    borderTopWidth: 2,
                    borderColor: '#333',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    paddingTop: 15,
                    justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity>
                    <Ionicons name="home" size={35} color="gray" style={{flex: 1}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={openProfile}>
                    <Ionicons name="person" size={35} color="gray" style={{flex: 1}} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

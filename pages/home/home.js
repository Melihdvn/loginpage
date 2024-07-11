import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
    const signOut = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
        });
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
        </View>
    );
}

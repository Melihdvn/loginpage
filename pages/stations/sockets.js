import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';

export default function Sockets({navigation}) {
    const route = useRoute();
    const {unit} = route.params || {};

    return (
        <View style={{flex: 1, backgroundColor: '#222222'}}>
            <View style={{flex: 0.2}}>
                <TouchableOpacity
                    style={{
                        paddingLeft: 10,
                        marginTop: 10,
                        height: 90,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}
                    onPress={() => navigation.goBack()}>
                    <Ionicons name="caret-back" size={20} color="white" />
                    <Text style={{fontSize: 20, color: 'white'}}>Units</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 75,
                    paddingBottom: 75,
                }}>
                <Text style={{color: 'white', fontSize: 25, marginBottom: 20}}>Sockets</Text>
                {unit ? (
                    unit.sockets.map((socket, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{
                                height: 45,
                                width: '80%',
                                backgroundColor: '#990000',
                                borderRadius: 5,
                                marginTop: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 5,
                            }}>
                            <Text style={{color: 'white', fontSize: 20}}>{unit.sockets[index].name}</Text>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text style={{color: 'white', fontSize: 20}}>No sockets available</Text>
                )}
            </ScrollView>
        </View>
    );
}

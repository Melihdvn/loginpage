import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';

export default function Units({navigation}) {
    const route = useRoute();
    const {station} = route.params || {};

    function navigateToSockets(unit) {
        navigation.navigate('Sockets', {unit});
    }

    const renderItem = ({item}) => (
        <TouchableOpacity
            onPress={() => navigateToSockets(item)}
            style={{
                height: 45,
                width: '80%',
                backgroundColor: '#990000',
                borderRadius: 5,
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
                alignSelf: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20, paddingHorizontal: 3}}>{item.title}</Text>
        </TouchableOpacity>
    );

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
                    <Text style={{fontSize: 20, color: 'white'}}>Stations</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={station ? station.unites : []}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingTop: 75,
                    paddingBottom: 75,
                }}
                ListHeaderComponent={() => (
                    <View style={{alignItems: 'center', marginBottom: 20}}>
                        <Text style={{color: 'white', fontSize: 25}}>Units</Text>
                    </View>
                )}
                ListEmptyComponent={() => <Text style={{color: 'white', fontSize: 20}}>No units available</Text>}
            />
        </View>
    );
}

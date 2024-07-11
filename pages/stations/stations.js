import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import axios from 'axios';

export default function Stations({navigation}) {
    const [stations, setStations] = useState([]);

    useEffect(() => {
        axios
            .get('https://mapi.kolaysarj.com/api/getAllAndFilteredStations')
            .then(response => {
                if (response.data.success) {
                    setStations(response.data.data);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    function navigateToUnits(station) {
        navigation.navigate('Units', {station});
    }

    const renderItem = ({item}) => (
        <TouchableOpacity
            onPress={() => navigateToUnits(item)}
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
            <Text style={{color: 'white', fontSize: 20, paddingHorizontal: 3}}>{item.stationTitle}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{flex: 1, backgroundColor: '#222222'}}>
            <FlatList
                data={stations}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingTop: 75,
                    paddingBottom: 75,
                }}
                ListHeaderComponent={() => (
                    <View style={{alignItems: 'center', marginBottom: 20}}>
                        <Text style={{color: 'white', fontSize: 25}}>Stations</Text>
                    </View>
                )}
            />
        </View>
    );
}

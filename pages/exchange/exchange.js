import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import {XMLParser} from 'fast-xml-parser';

export default function Exchange({navigation}) {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://www.tcmb.gov.tr/kurlar/today.xml');
            const text = response.data;

            const parser = new XMLParser();
            const jsonData = parser.parse(text);
            setData(jsonData.Tarih_Date.Currency);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <ScrollView contentContainerStyle={{alignItems: 'center'}} style={styles.container}>
            {data ? (
                data.map((currency, index) => (
                    <View key={index} style={styles.currencyBox}>
                        <View style={styles.currencyContainer}>
                            <Text style={styles.currencyName}>{currency.CurrencyName}</Text>
                            <Text style={styles.currencyDefinition}>Forex Buying: {currency.ForexBuying}</Text>
                            <Text style={styles.currencyDefinition}>Forex Selling: {currency.ForexSelling}</Text>
                        </View>
                    </View>
                ))
            ) : (
                <Text>Loading...</Text>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 50,
        paddingHorizontal: 10,
        backgroundColor: '#222',
    },
    currencyBox: {
        width: '90%',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#900',
        borderRadius: 8,
        overflow: 'hidden',
    },
    currencyContainer: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#111',
    },
    currencyName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#D00',
    },
    currencyDefinition: {
        fontSize: 16,
        marginTop: 5,
        color: 'white',
    },
});

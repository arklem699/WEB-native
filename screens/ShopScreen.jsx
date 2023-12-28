import { ScrollView, StyleSheet, View, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../api';
import { setDevices } from '../store/deviceSlice';
import DeviceCard from '../components/DeviceCard';
import InputField from '../components/InputField';


export default function ShopScreen({ navigation }) {

    const dispatch = useDispatch();
    const { devices } = useSelector((store) => store.device);
    const [query, setQuery] = useState('');
    const backgroundImage = require('../assets/back.jpg');

    useEffect(() => {
        async function getAllDevices() {
            await axiosInstance.get('/search', { params: { query } })
                .then((response) => dispatch(setDevices(response?.data)));
        }
        getAllDevices();
    }, [dispatch, query]);

    return (
        <ImageBackground source={backgroundImage}  style={styles.back}>
            <View style={styles.container}>
                <InputField setQuery={setQuery} />
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {devices.map((device) => (
                        <View key={device.id} style={styles.cardContainer}>
                            <DeviceCard {...device} navigation={navigation} />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2a2a2a',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        marginBottom: 10,
        width: '100%',
        flex: 1,
        justifyContent: 'center', // Добавьте эту строку
    },
    back: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
});
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { resetDevice, setDevice } from '../store/deviceSlice';
import { axiosInstance } from '../api';

export default function DeviceScreen({ route }) {

    const { id } = route.params;
    const dispatch = useDispatch();
    const { device } = useSelector((store) => store.device);

    useEffect(() => {
        async function getOneDevice() {
            await axiosInstance.get(`/appointment/${id}`).then((response) => dispatch(setDevice(response?.data)));
        }
        getOneDevice();
        return () => {
            dispatch(resetDevice());
        };
    }, [dispatch]);

    const new_time = new Date(`1970-01-01T${ device.time }Z`);

    const formattedTime = new_time
        ? new Date(new_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
        : '';

    const formattedDate = new Date(device.date)
    .toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })
    .replace(/\//g, '.');

    return (
        <View>
            <Text style={ styles.text }>Вы записаны на { formattedDate }</Text>
            <Text style={ styles.text }>Врач: { device.doctor }</Text>
            <Text style={ styles.text }>Время: { formattedTime }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 20, // Установите желаемый размер шрифта
      fontWeight: 'bold', // Сделайте текст жирным
    },
  });
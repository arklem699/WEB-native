import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React from 'react';

export default function DeviceCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Подробнее', { id: props.id });
    };

    const new_time = new Date(`1970-01-01T${ props.time }Z`);

    const formattedTime = new_time
        ? new Date(new_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
        : '';

    const formattedDate = new Date(props.date)
    .toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })
    .replace(/\//g, '.');

    return (
        <View style={ styles.card }>
            <Image
                style={ styles.image }
                source={{ uri: `data:image/jpeg;base64,${ props.image.slice(2, -1) }` }}
                resizeMode='contain'
            />
            <View style={ styles.container }>
                <Text style={ styles.brandTitle }>{ props.doctor }</Text>
                <Text style={ styles.text }>{ formattedDate }</Text>
                <Text style={ styles.text }>{ formattedTime }</Text>
            </View>
            <Button title='Записаться' onPress={ handlePress } />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 320,
        backgroundColor: '#303030',
        borderRadius: 12,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    image: { height: 320, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8 },
    brandTitle: { color: '#4287f5', fontSize: 16 },
    text: { color: '#f0f0f0', fontSize: 16 },
});
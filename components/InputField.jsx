import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

const InputField = ({ setQuery }) => {
    const [value, setValue] = useState('');

    const handleChange = (text) => {
        setValue(text);
    };

    const handleClick = () => {
        setQuery(value);
    };

    return (
        <View style={styles.inputField}>
            <Text style={styles.title}>Поиск по дате:</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={value}
                    placeholder='ДД.ММ.ГГГГ'
                    onChangeText={handleChange}
                    onSubmitEditing={handleClick}
                />
                <TouchableOpacity onPress={handleClick} style={styles.button}>
                    <Text style={styles.buttonText}>Поиск</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputField: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        marginBottom: 5,
        color: 'white',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 5,
        color: 'black',
        backgroundColor: 'white',
        flex: 1,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default InputField;
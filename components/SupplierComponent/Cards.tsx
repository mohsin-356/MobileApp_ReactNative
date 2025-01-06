import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CardItem = () => {
    // Defining static parameters within the component
    const iconName = "people"; // Icon name for the card
    const title = "Users"; // Title for the card
    const count = 100; // Count for the card
    const color = "#4CAF50"; // Color for the light theme
    const isDarkTheme = false; // Dark theme toggle

    return (
        <TouchableOpacity style={[styles.card, { borderColor: isDarkTheme ? color : '#BDBDBD' }]}>
            <View style={[styles.iconContainer, { borderColor: isDarkTheme ? color : 'black' }]}>
                <Ionicons name={iconName} size={24} color={isDarkTheme ? color : '#4CAF50'} />
            </View>
            <Text style={[styles.cardText, { color: isDarkTheme ? color : 'black' }]}>{title}</Text>
            <Text style={[styles.cardCount, { color: isDarkTheme ? color : '#555' }]}>{count}</Text>
        </TouchableOpacity>
    );
};

const CardRow = () => {
    return (
        <View style={styles.row}>
       <CardItem />
            <CardItem />
            <CardItem />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 10,
    },
    card: {
        width: '30%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 30,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    cardText: {
        marginTop: 2,
        fontSize: 14,
    },
    cardCount: {
        marginTop: 5,
        fontSize: 14,
        color: '#555',
    },
});

export default CardRow;

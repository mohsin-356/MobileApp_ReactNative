import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import themeContext from '@/themes/themeContext'; // Adjust the import path as necessary

const Cards = () => {
    const { theme, color, background } = useContext(themeContext); // Accessing theme, color, and background from context
    const totalCount = 100;
    const activeCount = 25;
    const suppliersCount = 50; // Example count for Suppliers
    const productsCount = 75; // Example count for Products
    const workersCount = 10; // Example count for Workers
    const isDarkTheme = theme === 'dark';

    // Function to handle card press
    const handleCardPress = (cardType: string) => {
        console.log(`${cardType} card pressed!`);
        // Add your navigation or action logic here based on cardType
    };

    return (
        <View style={styles.container}>
            {/* Users Card */}
            <TouchableOpacity style={[styles.card, {
                backgroundColor: isDarkTheme ? background : '#E8F5E9',
                borderColor: isDarkTheme ? color : '#BDBDBD' // Set border color based on theme
            }]} onPress={() => handleCardPress('Users')}>
                <View style={[styles.iconContainer, { borderColor: isDarkTheme ? color : 'black' }]}>
                    <Ionicons name="people" size={24} color={isDarkTheme ? color : '#4CAF50'} />
                </View>
                <Text style={[styles.cardText, { color: isDarkTheme ? color : 'black' }]}>Users</Text>
                <Text style={[styles.cardCount, { color: isDarkTheme ? color : '#555' }]}>{totalCount}</Text>
            </TouchableOpacity>

            {/* Active Card */}
            <TouchableOpacity style={[styles.card, {
                backgroundColor: isDarkTheme ? background : '#E3F2FD',
                borderColor: isDarkTheme ? color : '#BDBDBD' // Set border color based on theme
            }]} onPress={() => handleCardPress('Active')}>
                <View style={[styles.iconContainer, { borderColor: isDarkTheme ? color : 'black' }]}>
                    <Ionicons name="checkmark" size={24} color={isDarkTheme ? color : '#2196F3'} />
                </View>
                <Text style={[styles.cardText, { color: isDarkTheme ? color : 'black' }]}>Active</Text>
                <Text style={[styles.cardCount, { color: isDarkTheme ? color : '#555' }]}>{activeCount}</Text>
            </TouchableOpacity>

            {/* Suppliers Card */}
            <TouchableOpacity style={[styles.card, {
                backgroundColor: isDarkTheme ? background : '#FFF3E0',
                borderColor: isDarkTheme ? color : '#BDBDBD' // Set border color based on theme
            }]} onPress={() => handleCardPress('Suppliers')}>
                <View style={[styles.iconContainer, { borderColor: isDarkTheme ? color : 'black' }]}>
                    <Ionicons name="people-outline" size={24} color={isDarkTheme ? color : '#FF9800'} />
                </View>
                <Text style={[styles.cardText, { color: isDarkTheme ? color : 'black' }]}>Suppliers</Text>
                <Text style={[styles.cardCount, { color: isDarkTheme ? color : '#555' }]}>{suppliersCount}</Text>
            </TouchableOpacity>

            {/* Products Card */}
            <TouchableOpacity style={[styles.card, {
                backgroundColor: isDarkTheme ? background : '#F3E5F5',
                borderColor: isDarkTheme ? color : '#BDBDBD' // Set border color based on theme
            }]} onPress={() => handleCardPress('Products')}>
                <View style={[styles.iconContainer, { borderColor: isDarkTheme ? color : 'black' }]}>
                    <Ionicons name="pricetag" size={24} color={isDarkTheme ? color : '#9C27B0'} />
                </View>
                <Text style={[styles.cardText, { color: isDarkTheme ? color : 'black' }]}>Products</Text>
                <Text style={[styles.cardCount, { color: isDarkTheme ? color : '#555' }]}>{productsCount}</Text>
            </TouchableOpacity>

            {/* Workers Card */}
            <TouchableOpacity style={[styles.card, {
                backgroundColor: isDarkTheme ? background : '#F3E5F5',
                borderColor: isDarkTheme ? color : '#BDBDBD' // Set border color based on theme
            }]} onPress={() => handleCardPress('Workers')}>
                <View style={[styles.iconContainer, { borderColor: isDarkTheme ? color : 'black' }]}>
                    <Ionicons name="hammer" size={24} color={isDarkTheme ? color : '#FF5722'} />
                </View>
                <Text style={[styles.cardText, { color: isDarkTheme ? color : 'black' }]}>Workers</Text>
                <Text style={[styles.cardCount, { color: isDarkTheme ? color : '#555' }]}>{workersCount}</Text>
            </TouchableOpacity>

            {/* Earning Card */}
            <TouchableOpacity style={[styles.card, {
                backgroundColor: isDarkTheme ? background : '#F3E5F5',
                borderColor: isDarkTheme ? color : '#BDBDBD' // Set border color based on theme
            }]} onPress={() => handleCardPress('Earning')}>
                <View style={[styles.iconContainer, { borderColor: isDarkTheme ? color : 'black' }]}>
                    <Ionicons name="wallet" size={24} color={isDarkTheme ? color : '#9C27B0'} />
                </View>
                <Text style={[styles.cardText, { color: isDarkTheme ? color : 'black' }]}>Earning</Text>
                <Text style={[styles.cardCount, { color: isDarkTheme ? color : '#555' }]}>$1500</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 1,
    },
    card: {
        width: '48%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1, // Set border width for the cards
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

export default Cards;

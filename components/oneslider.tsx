import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const MyScreen = () => {
    const [sliderValue, setSliderValue] = useState(92); // Default value for Total Sales slider

    const handleValueChange = (newValue: number) => {
        setSliderValue(newValue); // Update slider value
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Revenue and Sales Overview</Text>

            {/* Total Sales Slider */}
            <View style={styles.cardContainer}>
                <Text style={styles.label}>Total Sales</Text>
                <View style={styles.sliderWrapper}>
                    <Slider
                        style={styles.slider}
                        value={sliderValue}
                        maximumValue={100}
                        minimumValue={0}
                        onValueChange={handleValueChange}
                        thumbTintColor="#FF6347" // Tomato color for thumb
                        minimumTrackTintColor="#32CD32" // Lime green for active track
                        maximumTrackTintColor="#A9A9A9" // Dark gray for inactive track
                    />
                    <Text style={styles.value}>{sliderValue}%</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#f7f7f7', // Light gray background for the entire screen
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    cardContainer: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 10,
        width: '90%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5, // Adds shadow for Android
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    sliderWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    slider: {
        flex: 1,
        height: 10, // Increased height for thicker track
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default MyScreen;

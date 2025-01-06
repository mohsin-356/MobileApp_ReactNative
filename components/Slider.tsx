import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

// Define the props type for MySlider
interface MySliderProps {
    label: string;
    value: number;
    maxValue: number;
}

const MyScreen = () => {
    // Slider component
    const MySlider = ({ label, value, maxValue }: MySliderProps) => {
        return (
            <View style={styles.cardContainer}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.sliderWrapper}>
                    <Slider
                        style={styles.slider}
                        value={value} // Fixed value
                        maximumValue={maxValue}
                        minimumValue={0}
                        thumbTintColor="#FF6347" // Tomato color for thumb
                        minimumTrackTintColor="#32CD32" // Lime green for active track
                        maximumTrackTintColor="#A9A9A9" // Dark gray for inactive track
                        disabled={true} // Makes slider static
                    />
                    <Text style={styles.value}>{value}%</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Revenue and Sales Overview</Text>

            {/* MySlider components for each metric */}
            <MySlider
                label="Start Selle"
                value={75} // Fixed value
                maxValue={100}
            />
            <MySlider
                label="Total Sales"
                value={92} // Fixed value
                maxValue={100}
            />
            <MySlider
                label="Total Orders"
                value={58} // Fixed value
                maxValue={100}
            />
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
        height: 30, // Increases the perceived thickness of the track
        borderRadius: 10, // Ensures the track looks rounded
        backgroundColor: '#E0E0E0', // Optional: Set background color to blend with inactive track
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default MyScreen;

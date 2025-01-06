import React, { useState } from 'react';
import { VictoryPie } from 'victory-native';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PiDounutChart = () => {
    const [showDetails, setShowDetails] = useState(false);
    const data = [
        { x: '25%', y: 123 },
        { x: '40%', y: 321 },
        { x: '15%', y: 123 },
        { x: '10%', y: 789 },
        { x: '10%', y: 537 },
    ];
    const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
    const colors = ['#ff9100', '#0000FF', '#008000', '#FF0000', '#FFFF00'];

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <Text style={styles.title}>Basic Pie Chart</Text>
                <View style={styles.chartContainer}>
                    <VictoryPie
                        data={data}
                        innerRadius={40}
                        width={400}
                        height={250}
                        style={{
                            data: { fillOpacity: 0.9, stroke: "white", strokeWidth: 2 },
                            labels: { fontSize: 14, fill: 'black' },
                        }}
                        colorScale={colors}
                        startAngle={0}
                        endAngle={360}
                        padAngle={1}
                        cornerRadius={2}
                        animate={{ duration: 300 }}
                    />
                    <View style={styles.legendContainer}>
                        {categories.map((category, index) => (
                            <View key={index} style={styles.legendItem}>
                                <View style={[styles.colorBox, { backgroundColor: colors[index] }]} />
                                <Text style={styles.legendText}>{category}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <TouchableOpacity style={styles.detailsButton} onPress={toggleDetails}>
                    <Text style={styles.buttonText}>Details</Text>
                    <Ionicons name={showDetails ? "chevron-up" : "chevron-down"} size={20} color="red" />
                </TouchableOpacity>

                {showDetails && (
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailsText}>Details</Text>
                        {data.map((item, index) => (
                            <Text key={index} style={styles.detailItem}>{categories[index]}: {item.y}</Text>
                        ))}
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        paddingLeft: 0, // Ensure no extra padding is added
        alignItems: 'flex-start',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 2,
    },
    title: {
        fontSize: 24,
        margin: 10,
    },
    chartContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    legendContainer: {
        marginTop: 35,
        marginLeft: 1,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    colorBox: {
        width: 14,
        height: 14,
        marginRight: 5,
    },
    legendText: {
        fontSize: 12,
    },
    detailsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#ddd',
        padding: 8,
        borderRadius: 5,
        marginBottom: 20,
        alignSelf:'flex-end'
    },
    buttonText: {
        fontSize: 14,
        marginLeft: 7,
        marginRight: 5,
    },
    detailsContainer: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        width: '100%',
        alignItems: 'flex-start',
    },
    detailsText: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    detailItem: {
        marginBottom: 5,
    },
});

export default PiDounutChart;

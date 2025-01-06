import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';

const BarGraph = () => {
    const data = [
        { x: 'Jan', y: 30 },
        { x: 'Feb', y: 45 },
        { x: 'Mar', y: 78 },
        { x: 'Apr', y: 20 },
        { x: 'May', y: 55 },
        { x: 'Jun', y: 40 },
        { x: 'Jul', y: 90 },
        { x: 'Aug', y: 60 },
        { x: 'Sep', y: 35 },
        { x: 'Oct', y: 80 },
        { x: 'Nov', y: 50 },
        { x: 'Dec', y: 70 },
    ];

    const colors = ['#4CAF50', '#FF5722', '#2196F3', '#FFC107', '#9C27B0', '#00BCD4', '#E91E63', '#8BC34A', '#3F51B5', '#FF9800', '#FF6347', '#32CD32'];

    return (
        <ScrollView horizontal>
            <View style={styles.container}>
                <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 15, y: 10 }}>
                    <VictoryAxis
                        dependentAxis
                        style={{
                            grid: {
                                stroke: "#D3D3D3", // Color of the grid lines
                                strokeWidth: 2, // Width of the grid lines
                            },
                            ticks: {
                                stroke: "transparent", // Hides the tick marks
                            },
                        }}
                    />
                    <VictoryAxis // Optional: Add this to show the independent axis labels
                        style={{
                            ticks: {
                                stroke: "black", // Color of the ticks
                            },
                            tickLabels: {
                                fill: "black", // Color of the tick labels
                            },
                        }}
                    />
                    <VictoryBar
                        data={data}
                        barRatio={0.8} // Adds spacing between bars
                        style={{
                            data: {
                                fill: ({ index }) => {
                                    if (typeof index === 'number') {
                                        return colors[index % colors.length]; // Assign different colors
                                    }
                                    return '#000'; // Default color in case index is undefined
                                },
                                width: 20, // Customize bar width
                                stroke: "#fff", // Add a white stroke around the bars
                                strokeWidth: 2, // Width of the stroke
                            },
                        }}
                    />
                </VictoryChart>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f9fa', // Light background color for contrast
        borderRadius: 10, // Rounded corners
        shadowColor: '#000', // Shadow for depth
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Android shadow
    },
});

export default BarGraph;

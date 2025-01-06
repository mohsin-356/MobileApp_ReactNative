import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { VictoryChart, VictoryTheme, VictoryAxis, VictoryLine, VictoryScatter, VictoryArea, VictoryLabel, VictoryZoomContainer } from 'victory-native';

const LineGraph = () => {
    // Data for the line graph
    const lineData = [
        { x: 'Jan', y: 20 },
        { x: 'Feb', y: 30 },
        { x: 'Mar', y: 50 },
        { x: 'Apr', y: 40 },
        { x: 'May', y: 60 },
        { x: 'Jun', y: 70 },
        { x: 'Jul', y: 80 },
        { x: 'Aug', y: 90 },
        { x: 'Sep', y: 100 },
        { x: 'Oct', y: 110 },
        { x: 'Nov', y: 120 },
        { x: 'Dec', y: 130 },
    ];

    // Calculate percentage change
    const percentageData = lineData.map((point, index) => {
        if (index === 0) return { x: point.x, percentage: 0 }; // No percentage for the first point
        const previousY = lineData[index - 1].y;
        const percentage = ((point.y - previousY) / previousY) * 100;
        return { x: point.x, percentage: percentage.toFixed(2) }; // Round to 2 decimal places
    });

    return (
        <ScrollView horizontal>
            <View style={styles.container}>
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{ x: 20, y: 10 }}
                    containerComponent={<VictoryZoomContainer />} // Enable zoom
                    width={400} // Set explicit width
                    height={300} // Set explicit height
                >
                    <VictoryAxis
                        dependentAxis
                        style={{
                            grid: {
                                stroke: "#D3D3D3",
                                strokeWidth: 2,
                            },
                            ticks: {
                                stroke: "transparent",
                            },
                        }}
                    />
                    <VictoryAxis
                        style={{
                            ticks: {
                                stroke: "black",
                            },
                            tickLabels: {
                                fill: "black",
                            },
                        }}
                    />
                    <VictoryArea
                        data={lineData}
                        style={{
                            data: {
                                fill: "#007bff",
                                opacity: 0.3, // Adjust opacity for shadow effect
                            },
                        }}
                    />
                    <VictoryLine
                        data={lineData}
                        style={{
                            data: {
                                stroke: "#007bff",
                                strokeWidth: 2,
                            },
                        }}
                    />
                    <VictoryScatter
                        data={lineData}
                        size={5} // Size of the dots
                        style={{
                            data: {
                                fill: "#007bff",
                            },
                        }}
                    />
                    {percentageData.map((point, index) => (
                        <VictoryLabel
                            key={index}
                            text={`${point.percentage}%`} // Display percentage
                            x={index * (400 / lineData.length) + 20} // Calculate x position based on width
                            y={lineData[index].y + 5} // Position above the point
                            style={{ fill: "#000", fontSize: 10 }} // Label style
                        />
                    ))}
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
        width: '100%', // Ensure the container has a defined width
        height: 300, // Ensure the container has a defined height
    },
});

export default LineGraph;

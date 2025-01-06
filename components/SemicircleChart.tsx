import React from 'react';
import { VictoryPie } from 'victory-native';
import { View, StyleSheet } from 'react-native';

const SemicircleChart = () => {
    return (
        <View style={styles.container}>
            <VictoryPie
                data={[
                    { x: 'Paying', y: 30 },
                    { x: 'Non-Paying', y: 70 },
                ]}
                innerRadius={50} // Increase for a more pronounced donut shape
                width={500} // Increased width
                height={250} // Increased height
                colorScale={['blue', 'red']} // Set colors directly
                padAngle={2}
                cornerRadius={4}
                animate={{ duration: 300 }}
                startAngle={270} // Start from the top
                endAngle={450}  // End at the bottom
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Align to top
        alignItems: 'center',
        paddingVertical: 15,
    },
});

export default SemicircleChart;

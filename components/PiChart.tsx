import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PieChart from 'react-native-pie-chart'; // Ensure you have this library installed
import { Ionicons } from '@expo/vector-icons'; // Use Expo's vector icons

interface PiChartProps {
  // Define props if needed, currently no props used
}

interface PiChartState {
  showDetails: boolean; // State to control the visibility of details
}

export default class PiChart extends Component<PiChartProps, PiChartState> {
  constructor(props: PiChartProps) {
    super(props);
    this.state = {
      showDetails: false, // Initial state
    };
  }

  toggleDetails = () => {
    this.setState(prevState => ({ showDetails: !prevState.showDetails }));
  };

  render() {
    const widthAndHeight = 200;
    const series = [123, 321, 123, 789, 537]; // Hardcoded data
    const sliceColor = ['#ff9100', '#0000FF', '#008000', '#FF0000', '#FFFF00']; // Hardcoded colors
    const labels = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']; // Hardcoded labels

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Basic Pie Chart</Text>
        <View style={styles.chartContainer}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
          />
          <View style={styles.legendContainer}>
            {sliceColor.map((color, index) => (
              <View key={index} style={styles.legendItem}>
                <View style={[styles.colorBox, { backgroundColor: color }]} />
                <Text style={styles.legendText}>{labels[index]}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Button to toggle details */}
        <TouchableOpacity style={styles.detailsButton} onPress={this.toggleDetails}>
          <Text style={styles.buttonText}>Details</Text>
          <Ionicons name={this.state.showDetails ? "chevron-up" : "chevron-down"} size={20} color="red" />
        </TouchableOpacity>

        {this.state.showDetails && (
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Details</Text>
            {labels.map((label, index) => (
              <Text key={index} style={styles.detailItem}>{label}: {series[index]}</Text>
            ))}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 15,
    flex: 1, 
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
    marginLeft: 15, 
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5, // Space between legend items
  },
  colorBox: {
    width: 12, // Width of the colored box
    height: 12, // Height of the colored box
    marginRight: 5, // Space between box and text
  },
  legendText: {
    fontSize: 10,
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
    backgroundColor: '#ddd',
    padding: 2,
    borderRadius: 5,
    alignSelf:'flex-end',
    marginBottom:20,
    marginRight:20
  },
  buttonText: {
    fontSize: 12,
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

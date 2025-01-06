import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import PieChart from "react-native-pie-chart"; // Import from react-native-pie-chart

interface RevenueCardProps { }

interface RevenueCardState {
    revenueGenerated: number; // Revenue generated
    totalRevenue: number; // Total revenue target
}

export default class RevenueCard extends Component<
    RevenueCardProps,
    RevenueCardState
> {
    constructor(props: RevenueCardProps) {
        super(props);
        this.state = {
            revenueGenerated: 700, // Example: $700 revenue generated
            totalRevenue: 1000, // Example: $1000 total revenue target
        };
    }

    render() {
        const { revenueGenerated, totalRevenue } = this.state;

        // Calculate revenue left
        const revenueLeft = totalRevenue - revenueGenerated;
        const revenueLeftPercentage = ((revenueLeft / totalRevenue) * 100).toFixed(
            1
        );

        // Pie chart values
        const series = [revenueGenerated, revenueLeft];
        const sliceColor = ["#626567", "#4CAF50"]; // Colors for generated and left

        return (
            <View style={styles.container}>
                {/* Heading */}
                <Text style={styles.title}>Revenue</Text>

                {/* Percentage of revenue left */}
                <Text style={styles.percentage}>
                    {revenueLeftPercentage}% Revenue Left
                </Text>

                {/* Pie chart */}
                <PieChart
                    widthAndHeight={200}
                    series={series}
                    sliceColor={sliceColor}
                    coverRadius={0.7} // Adjust for doughnut effect
                    coverFill={"#FFF"} // Fill color for the center
                />

                {/* Details */}
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailItem}>
                        Revenue Generated: ${revenueGenerated}
                    </Text>
                    <Text style={styles.detailItem}>Revenue Left: ${revenueLeft}</Text>
                    <Text style={styles.detailItem}>Total Revenue: ${totalRevenue}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        margin: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    percentage: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FF5722",
        marginBottom: 20,
    },
    detailsContainer: {
        marginTop: 20,
        width: "100%",
    },
    detailItem: {
        fontSize: 14,
        fontWeight: "400",
        color: "#555",
        marginVertical: 2,
    },
});

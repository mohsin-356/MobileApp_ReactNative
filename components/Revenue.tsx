import React from "react";
import { VictoryPie } from "victory-native";
import { View, StyleSheet, Text } from "react-native";

const Revenue = () => {
    // Revenue details
    const totalRevenue = 1000; // Example: Total revenue target
    const revenueGenerated = 700; // Example: Revenue already generated
    const revenueLeft = totalRevenue - revenueGenerated; // Calculate revenue left
    const revenueLeftPercentage = ((revenueLeft / totalRevenue) * 100).toFixed(1);

    return (
        <View style={styles.container}>
            {/* Heading */}
            <Text style={styles.title}>Revenue</Text>

            {/* Donut Chart */}
            <VictoryPie
                data={[
                    { x: "Generated", y: revenueGenerated },
                    { x: "Left", y: revenueLeft },
                ]}
                innerRadius={60} // More pronounced donut shape
                width={300}
                height={300}
                colorScale={["blue", "red"]} // Set colors
                padAngle={2}
                cornerRadius={4}
                animate={{ duration: 300 }}
                startAngle={0} // Start from the top
                endAngle={360} // Full circle
            />

            {/* Revenue Details */}
            <View style={styles.cardsContainer}>
                {/* Revenue Generated Card */}
                <View style={[styles.card, { backgroundColor: "#4CAF50" }]}>
                    <Text style={styles.cardText}>
                        Revenue Generated: ${revenueGenerated}
                    </Text>
                </View>

                {/* Revenue Left Card */}
                <View style={[styles.card, { backgroundColor: "#FF5722" }]}>
                    <Text style={styles.cardText}>Revenue Left: ${revenueLeft}</Text>
                </View>

                {/* Total Revenue Card */}
                <View style={[styles.card, { backgroundColor: "#2196F3" }]}>
                    <Text style={styles.cardText}>Total Revenue: ${totalRevenue}</Text>
                </View>

                {/* Revenue Left Percentage Card */}
                <View style={[styles.card, { backgroundColor: "#FFC107" }]}>
                    <Text style={styles.cardText}>
                        {revenueLeftPercentage}% Revenue Left
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
    },
    cardsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 20,
    },
    card: {
        width: "40%", // Card width adjusted for two per row
        marginVertical: 10,
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    cardText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#fff",
    },
});

export default Revenue;

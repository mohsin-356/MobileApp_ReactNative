import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Share } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'; // For icons
import { useRouter } from 'expo-router'; // For navigation and parameters
import { ScrollView } from 'react-native-gesture-handler';
import { useSettings } from "@/themes/SettingsContext"; // Import Settings Context

const Invoice = () => {
    const router = useRouter();
    const { isDarkMode } = useSettings(); // Use dark mode state

    // Dummy data for demonstration purposes
    const order = {
        id: 1,
        supplierName: 'Ali Traders',
        supplierAddress: '123 Main Street, Lahore, Pakistan',
        paymentMethod: 'Credit Card',
        paymentStatus: 'Paid',
        productImage: 'https://via.placeholder.com/150',
        productName: 'Electric Kettle',
        orderDate: '2024-11-20',
        status: 'Delivered',
        quantity: 2,
        totalPrice: 45.99,
        description: 'High-quality electric kettle with fast boiling technology.',
    };

    // Function to handle print action
    const handlePrint = () => {
        Alert.alert('Print Invoice', 'Printing functionality coming soon!');
    };

    // Function to handle share action
    const handleShare = async () => {
        try {
            await Share.share({
                message: `Invoice for Order ID: ${order.id}\n\nProduct: ${order.productName}\nQuantity: ${order.quantity}\nTotal Price: $${order.totalPrice}`,
            });
        } catch (error) {
            Alert.alert('Error', 'Unable to share the invoice.');
        }
    };

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={[styles.container, { backgroundColor: isDarkMode ? '#1F2937' : '#F3F4F6' }]}
        >
            {/* Header Section */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
                </TouchableOpacity>
                <Text style={[styles.headerText, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}>Invoice</Text>
            </View>

            {/* Product Image */}
            <Image source={{ uri: order.productImage }} style={styles.productImage} />

            {/* Order Details */}
            <View
                style={[
                    styles.detailsContainer,
                    { backgroundColor: isDarkMode ? '#374151' : '#F9F9F9' },
                ]}
            >
                <Text style={[styles.title, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}>
                    {order.productName}
                </Text>
                <Text style={[styles.supplierName, { color: isDarkMode ? '#D1D5DB' : '#555' }]}>
                    Supplier: {order.supplierName}
                </Text>
                <Text style={[styles.address, { color: isDarkMode ? '#9CA3AF' : '#777' }]}>
                    Address: {order.supplierAddress}
                </Text>
                <Text style={[styles.description, { color: isDarkMode ? '#9CA3AF' : '#777' }]}>
                    {order.description}
                </Text>

                <View style={styles.row}>
                    <Text style={[styles.label, { color: isDarkMode ? '#FFFFFF' : '#333' }]}>
                        Order Date:
                    </Text>
                    <Text style={[styles.value, { color: isDarkMode ? '#D1D5DB' : '#555' }]}>
                        {order.orderDate}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.label, { color: isDarkMode ? '#FFFFFF' : '#333' }]}>
                        Quantity:
                    </Text>
                    <Text style={[styles.value, { color: isDarkMode ? '#D1D5DB' : '#555' }]}>
                        {order.quantity}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.label, { color: isDarkMode ? '#FFFFFF' : '#333' }]}>
                        Total Price:
                    </Text>
                    <Text style={[styles.value, { color: isDarkMode ? '#D1D5DB' : '#555' }]}>
                        ${order.totalPrice.toFixed(2)}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.label, { color: isDarkMode ? '#FFFFFF' : '#333' }]}>
                        Payment Method:
                    </Text>
                    <Text style={[styles.value, { color: isDarkMode ? '#D1D5DB' : '#555' }]}>
                        {order.paymentMethod}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.label, { color: isDarkMode ? '#FFFFFF' : '#333' }]}>
                        Payment Status:
                    </Text>
                    <Text
                        style={[
                            styles.value,
                            styles[`status${order.paymentStatus}`],
                            { color: isDarkMode ? '#D1D5DB' : '#555' },
                        ]}
                    >
                        {order.paymentStatus}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.label, { color: isDarkMode ? '#FFFFFF' : '#333' }]}>
                        Order Status:
                    </Text>
                    <Text
                        style={[
                            styles.value,
                            styles.status,
                            styles[`status${order.status}`],
                            { color: isDarkMode ? '#D1D5DB' : '#555' },
                        ]}
                    >
                        {order.status}
                    </Text>
                </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionContainer}>
                <TouchableOpacity style={styles.actionButton} onPress={handlePrint}>
                    <Feather name="printer" size={24} color="white" />
                    <Text style={styles.actionText}>Print</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
                    <Feather name="share" size={24} color="white" />
                    <Text style={styles.actionText}>Share</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    productImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 16,
    },
    detailsContainer: {
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    supplierName: {
        fontSize: 16,
        color: '#555',
        marginBottom: 8,
    },
    address: {
        fontSize: 14,
        color: '#777',
        marginBottom: 16,
    },
    description: {
        fontSize: 14,
        color: '#777',
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    label: {
        fontWeight: 'bold',
        color: '#333',
    },
    value: {
        color: '#555',
    },
    status: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    statusDelivered: {
        color: 'green',
    },
    statusPaid: {
        color: 'green',
    },
    statusPending: {
        color: 'orange',
    },
    statusProgress: {
        color: 'blue',
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007BFF',
        padding: 12,
        borderRadius: 8,
        flex: 1,
        marginHorizontal: 4,
        marginBottom: 15
    },
    actionText: {
        color: 'white',
        marginLeft: 8,
        fontWeight: 'bold',
    },
});

export default Invoice;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSettings } from "@/themes/SettingsContext";

const CombinedOrderComponent = () => {
    const { isDarkMode, setIsDarkMode } = useSettings();
    const [showModal, setShowModal] = useState(false);
    const [orderToEdit, setOrderToEdit] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const orders = [
        {
            id: 1,
            supplierName: 'Ali Traders',
            productImage: 'https://via.placeholder.com/50',
            productName: 'Electric Kettle',
            orderDate: '2024-11-20',
            status: 'Delivered',
            quantity: 2,
            totalPrice: 45.99,
            description: 'High-quality electric kettle with fast boiling technology.',
        },
        {
            id: 2,
            supplierName: 'Best Supply Co.',
            productImage: 'https://via.placeholder.com/50',
            productName: 'Gas Stove',
            orderDate: '2024-11-21',
            status: 'Pending',
            quantity: 1,
            totalPrice: 89.99,
            description: 'Durable gas stove with modern design and high efficiency.',
        },
        {
            id: 3,
            supplierName: 'Home Essentials',
            productImage: 'https://via.placeholder.com/50',
            productName: 'Water Heater',
            orderDate: '2024-11-22',
            status: 'Progress',
            quantity: 3,
            totalPrice: 150.0,
            description: 'Energy-efficient water heater with advanced safety features.',
        },
        {
            id: 4,
            supplierName: 'Ali Traders',
            productImage: 'https://via.placeholder.com/50',
            productName: 'Electric Kettle',
            orderDate: '2024-11-20',
            status: 'Delivered',
            quantity: 2,
            totalPrice: 45.99,
            description: 'High-quality electric kettle with fast boiling technology.',
        },
        {
            id: 5,
            supplierName: 'Best Supply Co.',
            productImage: 'https://via.placeholder.com/50',
            productName: 'Gas Stove',
            orderDate: '2024-11-21',
            status: 'Pending',
            quantity: 1,
            totalPrice: 89.99,
            description: 'Durable gas stove with modern design and high efficiency.',
        },
        {
            id: 6,
            supplierName: 'Home Essentials',
            productImage: 'https://via.placeholder.com/50',
            productName: 'Water Heater',
            orderDate: '2024-11-22',
            status: 'Progress',
            quantity: 3,
            totalPrice: 150.0,
            description: 'Energy-efficient water heater with advanced safety features.',
        },
        {
            id: 7,
            supplierName: 'Ali Traders',
            productImage: 'https://via.placeholder.com/50',
            productName: 'Electric Kettle',
            orderDate: '2024-11-20',
            status: 'Delivered',
            quantity: 2,
            totalPrice: 45.99,
            description: 'High-quality electric kettle with fast boiling technology.',
        },
        {
            id: 8,
            supplierName: 'Best Supply Co.',
            productImage: 'https://via.placeholder.com/50',
            productName: 'Gas Stove',
            orderDate: '2024-11-21',
            status: 'Pending',
            quantity: 1,
            totalPrice: 89.99,
            description: 'Durable gas stove with modern design and high efficiency.',
        },
        {
            id: 9,
            supplierName: 'Home Essentials',
            productImage: 'https://via.placeholder.com/50',
            productName: 'Water Heater',
            orderDate: '2024-11-22',
            status: 'Progress',
            quantity: 3,
            totalPrice: 150.0,
            description: 'Energy-efficient water heater with advanced safety features.',
        },
        {
            id: 10,
            supplierName: 'Ali Traders',
            productImage: 'https://via.placeholder.com/50',
            productName: 'Electric Kettle',
            orderDate: '2024-11-20',
            status: 'Delivered',
            quantity: 2,
            totalPrice: 45.99,
            description: 'High-quality electric kettle with fast boiling technology.',
        },
        {
            id: 11,
            supplierName: 'Best Supply Co.',
            productImage: 'https://via.placeholder.com/50',
            productName: 'Gas Stove',
            orderDate: '2024-11-21',
            status: 'Pending',
            quantity: 1,
            totalPrice: 89.99,
            description: 'Durable gas stove with modern design and high efficiency.',
        },
        {
            id: 12,
            supplierName: 'Home Essentials',
            productImage: 'https://via.placeholder.com/50',
            productName: 'Water Heater',
            orderDate: '2024-11-22',
            status: 'Progress',
            quantity: 3,
            totalPrice: 150.0,
            description: 'Energy-efficient water heater with advanced safety features.',
        },
    ];

    const handleModalOpen = (order:any) => {
        setOrderToEdit(order);
        setShowModal(true);
    };
    const filteredOrders = orders.filter(
        (order) =>
            order.supplierName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleEdit = () => {
        router.push(`./Edit`);
        setShowModal(false);
    };

    const handleDelete = () => {
        console.log('Deleting order', orderToEdit);
        setShowModal(false);
    };

    const handleView = () => {
        router.push(`./Invoice`);
        setShowModal(false);
    };

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? '#374151' : '#F3F4F6' }]}>
            <TextInput
                style={[
                    styles.searchBar,
                    { backgroundColor: isDarkMode ? '#4B5563' : '#E5E7EB', color: isDarkMode ? '#FFFFFF' : '#000000' },
                ]}
                placeholder="Search orders..."
                placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            {/* Order List */}
            <View>
                {filteredOrders.map((item) => (
                    <View
                        key={item.id.toString()}
                        style={[
                            styles.orderCard,
                            { backgroundColor: isDarkMode ? '#374151' : '#f9f9f9' },
                        ]}
                    >
                        <View
                            style={[
                                styles.statusBadge,
                                item.status === 'Pending'
                                    ? styles.statusPending
                                    : item.status === 'Progress'
                                        ? styles.statusInProgress
                                        : styles.statusDelivered,
                            ]}
                        >
                            <Text style={[styles.statusText, { color: isDarkMode ? '#F3F4F6' : '#FFFFFF' }]}>
                                {item.status}
                            </Text>
                        </View>

                        <Image source={{ uri: item.productImage }} style={styles.productImage} />

                        <View style={styles.orderDetails}>
                            <Text
                                style={[
                                    styles.supplierName,
                                    { color: isDarkMode ? '#FFFFFF' : '#1F2937' },
                                ]}
                            >
                                {item.supplierName}
                            </Text>
                            <Text
                                style={[
                                    styles.productName,
                                    { color: isDarkMode ? '#D1D5DB' : '#555' },
                                ]}
                            >
                                {item.productName}
                            </Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => handleModalOpen(item)}
                            style={styles.dotsIcon}
                        >
                            <Ionicons name="ellipsis-vertical" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>


            {/* Modal for Edit, View, and Delete */}
            <Modal
                transparent={true}
                animationType="slide"
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalOverlay}>
                    <View
                        style={[
                            styles.modalContent,
                            { backgroundColor: isDarkMode ? '#374151' : '#FFFFFF' },
                        ]}
                    >
                        <TouchableOpacity
                            onPress={() => setShowModal(false)}
                            style={styles.modalCloseIcon}
                        >
                            <Ionicons name="close" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleView} style={styles.modalButton}>
                            <Ionicons name="eye" size={20} color={isDarkMode ? "#FFFFFF" : "blue"} />
                            <Text style={[styles.modalButtonText, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}>
                                View Detail
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleEdit} style={styles.modalButton}>
                            <Ionicons name="pencil" size={20} color={isDarkMode ?"#FFFFFF":"green"} />
                            <Text style={[styles.modalButtonText, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}>
                                Edit Order
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleDelete} style={styles.modalButton}>
                            <Ionicons name="trash" size={20} color={isDarkMode ? "#FFFFFF" : "red"} />
                            <Text style={[styles.modalButtonText, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}>
                                Delete Order
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    searchBar: {
        height: 40,
        borderRadius: 8,
        margin: 10,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    orderCard: {
        height: 130,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        position: 'relative',
    },
    statusBadge: {
        position: 'absolute',
        top: 10,
        left: 8,
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    statusPending: {
        backgroundColor: 'orange',
    },
    statusInProgress: {
        backgroundColor: 'blue',
    },
    statusDelivered: {
        backgroundColor: 'green',
    },
    statusText: {
        fontSize: 10,
    },
    productImage: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    orderDetails: {
        marginLeft: 20,
        flex: 1,
    },
    supplierName: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    productName: {
        fontSize: 12,
    },
    dotsIcon: {
        position: 'absolute',
        right: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        padding: 20,
        borderRadius: 10,
        width: '100%',
    },
    modalButton: {
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        marginBottom: 10,
    },
    modalButtonText: {
        marginLeft: 10,
    },
    modalCloseIcon: {
        position: 'absolute',
        top: -35,
        right: 10,
        padding: 1,
        borderRadius: 50,
        borderWidth: 2,
    },
});

export default CombinedOrderComponent;

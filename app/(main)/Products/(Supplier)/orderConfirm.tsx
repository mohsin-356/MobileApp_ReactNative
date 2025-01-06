import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Dimensions, StatusBar, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSettings } from "@/themes/SettingsContext"; // Import your context

const { width, height } = Dimensions.get('window');

const OrderConfirmation = () => {
    const { isDarkMode } = useSettings(); // Access isDarkMode from context

    const [cartItems, setCartItems] = useState([
        { id: '1', name: 'Minimalist Cap', quantity: 1, price: 200, imageurl: 'https://via.placeholder.com/150' },
        { id: '2', name: 'Modern Chair', quantity: 2, price: 1500, imageurl: 'https://via.placeholder.com/150' },
        { id: '3', name: 'Premium Headphones', quantity: 1, price: 3000, imageurl: 'https://via.placeholder.com/150' },
    ]);

    const [grandTotal, setGrandTotal] = useState(() => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    });

    const [showModal, setShowModal] = useState(false);

    const router = useRouter();

    const handleConfirmOrder = () => {
        setTimeout(() => {
            setShowModal(true);
        }, 2000);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleGenerateInvoice = () => {
        router.push('./invoice');
    };

    const renderProductItem = ({ item }) => (
        <View style={[styles.productCard, { backgroundColor: isDarkMode ? '#374151' : '#F7F7F7' }]}>
            <View style={[styles.productImageContainer, { backgroundColor: isDarkMode ? '#1F2937' : 'white' }]}>
                <Image source={item.imageurl} style={styles.productImage} resizeMode="contain" />
            </View>
            <View style={styles.productDetails}>
                <Text style={[styles.productName, { color: isDarkMode ? '#FFFFFF' : '#333' }]}>{item.name}</Text>
                <View style={styles.productPriceContainer}>
                    <View style={[styles.quantityBadge, { backgroundColor: isDarkMode ? '#4A90E2' : '#374151' }]}>
                        <Text style={[styles.quantityText, { color: isDarkMode ? '#FFFFFF' : 'white' }]}>
                            Qty: {item.quantity}
                        </Text>
                    </View>
                    <Text style={[styles.productPrice, { color: isDarkMode ? '#FFFFFF' : '#4A90E2' }]}>
                        Rs {item.price * item.quantity}
                    </Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? '#1F2937' : '#4A90E2' }]}>
            <View style={styles.header}>
                <Text style={[styles.headerTitle, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}>Order Summary</Text>
            </View>

            <View style={[styles.contentContainer, { backgroundColor: isDarkMode ? ' #9d9da2 ' : 'white' }]}>
                <FlatList
                    data={cartItems}
                    renderItem={renderProductItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.productList}
                    showsVerticalScrollIndicator={false}
                />

                <View style={styles.summaryContainer}>
                    <View style={styles.totalRow}>
                        <Text style={[styles.totalLabel, { color: isDarkMode ? '#D1D5DB' : '#666' }]}>Subtotal</Text>
                        <Text style={[styles.totalValue, { color: isDarkMode ? '#FFFFFF' : '#333' }]}>
                            Rs {grandTotal - (grandTotal * 0.18)}
                        </Text>
                    </View>
                    <View style={styles.totalRow}>
                        <Text style={[styles.totalLabel, { color: isDarkMode ? '#D1D5DB' : '#666' }]}>GST (18%)</Text>
                        <Text style={[styles.totalValue, { color: isDarkMode ? '#FFFFFF' : '#333' }]}>
                            Rs{(grandTotal * 0.18).toFixed(2)}
                        </Text>
                    </View>
                    <View style={[styles.totalRow, styles.grandTotalRow]}>
                        <Text style={[styles.grandTotalLabel, { color: isDarkMode ? '#FFFFFF' : '#333' }]}>
                            Grand Total
                        </Text>
                        <Text style={[styles.grandTotalValue, { color: isDarkMode ? '#4A90E2' : '#333' }]}>
                            Rs{grandTotal}
                        </Text>
                    </View>
                </View>

                <View style={styles.actionButtons}>
                    <TouchableOpacity
                        style={[
                            styles.primaryButton,
                            { backgroundColor: isDarkMode ? '#2563EB' : '#4A90E2' },
                        ]}
                        onPress={handleConfirmOrder}
                    >
                        <Text style={styles.buttonText}>Confirm Order</Text>
                        <Ionicons name="checkmark" size={24} color="white" style={styles.buttonIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                visible={showModal}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalOverlay}>
                    <View style={[styles.modalContent, { backgroundColor: isDarkMode ? '#374151' : 'white' }]}>
                        <Ionicons name="checkmark-circle" size={120} color="#4A90E2" />
                        <Text style={[styles.modalTitle, { color: isDarkMode ? '#FFFFFF' : '#4A90E2' }]}>
                            Order Placed!
                        </Text>
                        <Text style={[styles.modalSubtitle, { color: isDarkMode ? '#D1D5DB' : '#666' }]}>
                            Thank you for your purchase. Your order will be processed and shipped soon.
                        </Text>
                        <TouchableOpacity
                            style={[
                                styles.modalButton,
                                { backgroundColor: isDarkMode ? '#2563EB' : '#4A90E2' },
                            ]}
                            onPress={handleCloseModal}
                        >
                            <Text style={styles.modalButtonText}>Continue Shopping</Text>
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
        backgroundColor: '#4A90E2',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 20,
    },
    headerIcon: {
        padding: 10,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: 'white',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
    },
    productList: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    productCard: {
        flexDirection: 'row',
        backgroundColor: '#F7F7F7',
        borderRadius: 15,
        marginBottom: 15,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    productImageContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    productImage: {
        width: 60,
        height: 60,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
    },
    productPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    quantityBadge: {
        backgroundColor: '#4A90E2',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },
    quantityText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
    },
    productPrice: {
        fontSize: 16,
        fontWeight: '700',
        color: '#4A90E2',
    },
    summaryContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    totalLabel: {
        fontSize: 16,
        color: '#666',
    },
    totalValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    grandTotalRow: {
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        paddingTop: 10,
        marginTop: 10,
    },
    grandTotalLabel: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
    },
    grandTotalValue: {
        fontSize: 20,
        fontWeight: '800',
        color: '#4A90E2',
    },
    actionButtons: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    primaryButton: {
        backgroundColor: '#4A90E2',
        borderRadius: 15,
        padding: 18,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#4A90E2',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        marginRight: 10,
    },
    buttonIcon: {
        marginLeft: 10,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: width * 0.85,
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 40,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    modalTitle: {
        fontSize: 28,
        fontWeight: '800',
        color: '#4A90E2',
        marginTop: 20,
        marginBottom: 15,
    },
    modalSubtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 25,
        textAlign: 'center',
        lineHeight: 24,
    },
    modalButton: {
        backgroundColor: '#4A90E2',
        borderRadius: 15,
        padding: 15,
        width: '100%',
        alignItems: 'center',
        shadowColor: '#4A90E2',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
    },
});

export default OrderConfirmation;
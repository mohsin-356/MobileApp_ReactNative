import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { useSettings } from "@/themes/SettingsContext"; // Import the settings context

const { width } = Dimensions.get('window');

const CartScreen: React.FC = () => {
    const { isDarkMode } = useSettings(); // Get the dark mode value from the context
    const [cartItems, setCartItems] = useState([
        { id: '1', name: 'Trendy Cap', quantity: 1, price: 200, imageUrl: 'https://via.placeholder.com/150' },
        { id: '2', name: 'Comfort Chair', quantity: 2, price: 1500, imageUrl: 'https://via.placeholder.com/150' },
        { id: '3', name: 'Summer Cap', quantity: 1, price: 200, imageUrl: 'https://via.placeholder.com/150' },
        { id: '4', name: 'Office Chair', quantity: 2, price: 1500, imageUrl: 'https://via.placeholder.com/150' },
        { id: '5', name: 'Classic Cap', quantity: 1, price: 200, imageUrl: 'https://via.placeholder.com/150' },
        { id: '6', name: 'Gaming Chair', quantity: 2, price: 1500, imageUrl: 'https://via.placeholder.com/150' },
    ]);

    const handleQuantityChange = (itemId: string, newQuantity: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 } : item
            )
        );
    };

    const handleRemove = (itemId: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const router = useRouter();

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? '#1F2937' : '#F3F4F6' }]}>
            <LinearGradient
                colors={['#2C3E50', '#3498DB']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.headerGradient}
            >
                <Text style={[styles.header, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}>My Shopping Cart</Text>
            </LinearGradient>

            <ScrollView
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContentContainer}
            >
                {cartItems.map((item, index) => (
                    <View key={item.id} style={[
                        styles.cartItem,
                        index === 0 && styles.firstCartItem,
                        index === cartItems.length - 1 && styles.lastCartItem,
                        { backgroundColor: isDarkMode ? '#2D3748' : '#FFFFFF' }
                    ]}>
                        <View style={styles.itemHeader}>
                            <Image
                                source={{ uri: item.imageUrl }}
                                style={styles.productImage}
                            />
                            <View style={styles.productDetails}>
                                <Text style={[styles.itemName, { color: isDarkMode ? '#FFFFFF' : '#333333' }]} numberOfLines={1}>
                                    {item.name}
                                </Text>
                                <Text style={[styles.price, { color: isDarkMode ? '#48BB78' : '#4caf50' }]}>
                                    Rs : {item.price.toLocaleString()}
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => handleRemove(item.id)}
                                style={styles.deleteButton}
                            >
                                <MaterialIcons
                                    name="delete"
                                    size={24}
                                    color={isDarkMode ? '#FF6B6B' : '#FF6B6B'}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.quantityContainer}>
                            <View style={styles.quantityControl}>
                                <TouchableOpacity
                                    onPress={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    style={styles.quantityButton}
                                >
                                    <Text style={styles.quantityButtonText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{item.quantity}</Text>
                                <TouchableOpacity
                                    onPress={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    style={styles.quantityButton}
                                >
                                    <Text style={styles.quantityButtonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={[styles.totalPrice, { color: isDarkMode ? '#48BB78' : '#4caf50' }]}>
                                Rs : {(item.price * item.quantity).toLocaleString()}
                            </Text>
                        </View>
                    </View>
                ))}

                <LinearGradient
                    colors={['#f6d365', '#fda085']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.totalContainer}
                >
                    <View style={styles.totalContent}>
                        <Text style={[styles.totalLabel, { color: '#FFFFFF' }]}>Grand Total</Text>
                        <Text style={[styles.totalValue, { color: '#FFFFFF' }]}>
                            Rs : {calculateTotal().toLocaleString()}
                        </Text>
                    </View>
                </LinearGradient>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.addMoreButton}
                    onPress={() => router.back()}
                >
                    <Ionicons name="add-circle" size={24} color={isDarkMode ? '#81E6D9' : '#4caf50'} />
                    <Text style={[styles.addMoreText, { color: isDarkMode ? '#81E6D9' : '#4caf50' }]}>Add More</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.checkoutButton}
                    onPress={() => router.push('/Products/(Supplier)/orderConfirm')}
                >
                    <Text style={[styles.checkoutText, { color: '#FFFFFF' }]}>Checkout</Text>
                    <Ionicons name="arrow-forward" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerGradient: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 8,
    },
    header: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
    },
    scrollContainer: {
        flex: 1,
    },
    scrollContentContainer: {
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 100,
    },
    cartItem: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 15,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    firstCartItem: {
        marginTop: 10,
    },
    lastCartItem: {
        marginBottom: 20,
    },
    itemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 15,
        marginRight: 15,
    },
    productDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: '500',
    },
    deleteButton: {
        padding: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    quantityControl: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
        padding: 5,
    },
    quantityButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    quantityButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    quantity: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
        color: '#333',
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: '600',
    },
    totalContainer: {
        borderRadius: 15,
        marginTop: 15,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    totalContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    totalLabel: {
        fontSize: 20,
        fontWeight: '700',
    },
    totalValue: {
        fontSize: 22,
        fontWeight: '700',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    addMoreButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e8f5e9',
        borderRadius: 10,
        paddingVertical: 12,
        marginRight: 10,
    },
    addMoreText: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: '600',
    },
    checkoutButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2196f3',
        borderRadius: 10,
        paddingVertical: 12,
    },
    checkoutText: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
});

export default CartScreen;

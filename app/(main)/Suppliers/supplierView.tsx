import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import { useRouter } from "expo-router";
import { useSettings } from "@/themes/SettingsContext";
import { Ionicons } from '@expo/vector-icons'; // For icons

const SupplierProfile = () => {
    const { isDarkMode, setIsDarkMode } = useSettings(); // Dark Mode Context
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

    const handleEdit = () => {
        router.push('./update');
    };

    const handleDelete = () => {
        // Here, add the logic for deletion
        console.log("Supplier deleted");
        setModalVisible(false); // Close the modal after deletion
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? '#1F2937' : '#F3F4F6' }]}>
            {/* Header Section */}
            <View style={[styles.header, { backgroundColor: isDarkMode ? '#374151' : '#3b82f6' }]}>
                <View style={styles.profileSection}>
                    <Image
                        source={{
                            uri: 'https://via.placeholder.com/50', // Replace with the actual image URL
                        }}
                        style={styles.profileImage}
                    />
                    <View style={styles.activeBadge}>
                        <Text style={styles.activeBadgeText}>Active</Text>
                    </View>
                </View>
                <Text style={[styles.userName, { color: isDarkMode ? '#FFFFFF' : '#fff' }]}>Mohsin</Text>
                <Text style={[styles.email, { color: isDarkMode ? '#D1D5DB' : '#e5e7eb' }]}>za50@gmail.com</Text>
            </View>

            {/* Tab Section */}
            <View style={styles.tabContainer}>
                <TouchableOpacity style={styles.tab}>
                    <Text style={[styles.tabText, { color: isDarkMode ? '#F3F4F6' : '#3b82f6' }]}>Info</Text>
                </TouchableOpacity>
            </View>

            {/* Info Section */}
            <View style={styles.infoSection}>
                {/* Supplier Info */}
                <Text style={[styles.sectionHeader, { color: isDarkMode ? '#F3F4F6' : '#3b82f6' }]}>Supplier Info</Text>
                <View style={styles.infoRow}>
                    <Text style={[styles.infoKey, { color: isDarkMode ? '#D1D5DB' : '#6b7280' }]}>Supplier Name</Text>
                    <Text style={[styles.infoValue, { color: isDarkMode ? '#F3F4F6' : '#111827' }]}>Mohsin</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={[styles.infoKey, { color: isDarkMode ? '#D1D5DB' : '#6b7280' }]}>Status</Text>
                    <Text style={[styles.infoValue, { color: isDarkMode ? '#F3F4F6' : '#111827' }]}>Active</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={[styles.infoKey, { color: isDarkMode ? '#D1D5DB' : '#6b7280' }]}>Supplier ID</Text>
                    <Text style={[styles.infoValue, { color: isDarkMode ? '#F3F4F6' : '#111827' }]}>SUP12345</Text>
                </View>

                {/* Contact Info */}
                <Text style={[styles.sectionHeader, { color: isDarkMode ? '#F3F4F6' : '#3b82f6' }]}>Contact Info</Text>
                <View style={styles.infoRow}>
                    <Text style={[styles.infoKey, { color: isDarkMode ? '#D1D5DB' : '#6b7280' }]}>Phone</Text>
                    <Text style={[styles.infoValue, { color: isDarkMode ? '#F3F4F6' : '#111827' }]}>+92 300 1234567</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={[styles.infoKey, { color: isDarkMode ? '#D1D5DB' : '#6b7280' }]}>WhatsApp</Text>
                    <Text style={[styles.infoValue, { color: isDarkMode ? '#F3F4F6' : '#111827' }]}>+92 300 1234567</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={[styles.infoKey, { color: isDarkMode ? '#D1D5DB' : '#6b7280' }]}>Address</Text>
                    <Text style={[styles.infoValue, { color: isDarkMode ? '#F3F4F6' : '#111827' }]}>Street 45, Lahore, Pakistan</Text>
                </View>

                {/* Business Info */}
                <Text style={[styles.sectionHeader, { color: isDarkMode ? '#F3F4F6' : '#3b82f6' }]}>Business Info</Text>
                <View style={styles.infoRow}>
                    <Text style={[styles.infoKey, { color: isDarkMode ? '#D1D5DB' : '#6b7280' }]}>Business Type</Text>
                    <Text style={[styles.infoValue, { color: isDarkMode ? '#F3F4F6' : '#111827' }]}>Wholesaler</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={[styles.infoKey, { color: isDarkMode ? '#D1D5DB' : '#6b7280' }]}>Supply City</Text>
                    <Text style={[styles.infoValue, { color: isDarkMode ? '#F3F4F6' : '#111827' }]}>Karachi</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={[styles.infoKey, { color: isDarkMode ? '#D1D5DB' : '#6b7280' }]}>Delivery Time</Text>
                    <Text style={[styles.infoValue, { color: isDarkMode ? '#F3F4F6' : '#111827' }]}>3-5 days</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={[styles.infoKey, { color: isDarkMode ? '#D1D5DB' : '#6b7280' }]}>Total Orders</Text>
                    <Text style={[styles.infoValue, { color: isDarkMode ? '#F3F4F6' : '#111827' }]}>120</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={[styles.infoKey, { color: isDarkMode ? '#D1D5DB' : '#6b7280' }]}>Pending Orders</Text>
                    <Text style={[styles.infoValue, { color: isDarkMode ? '#F3F4F6' : '#111827' }]}>5</Text>
                </View>

                {/* Additional Info */}
                <Text style={[styles.sectionHeader, { color: isDarkMode ? '#F3F4F6' : '#3b82f6' }]}>Additional Info</Text>
                <View style={styles.infoRow}>
                    <Text style={[styles.infoKey, { color: isDarkMode ? '#D1D5DB' : '#6b7280' }]}>Notes</Text>
                    <Text style={[styles.infoValue, { color: isDarkMode ? '#F3F4F6' : '#111827' }]}>Reliable supplier</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={[styles.infoKey, { color: isDarkMode ? '#D1D5DB' : '#6b7280' }]}>Rating</Text>
                    <Text style={[styles.infoValue, { color: isDarkMode ? '#F3F4F6' : '#111827' }]}>4.5</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={[styles.infoKey, { color: isDarkMode ? '#D1D5DB' : '#6b7280' }]}>Bank Account</Text>
                    <Text style={[styles.infoValue, { color: isDarkMode ? '#F3F4F6' : '#111827' }]}>1234567890</Text>
                </View>
            </View>

            {/* Edit and Delete buttons */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={handleEdit}
                    style={[styles.button, { backgroundColor: isDarkMode ? '#6B7280' : '#3b82f6' }]}>
                    <Ionicons name="pencil" size={20} color="#fff" />
                    <Text style={[styles.buttonText, { color: '#fff' }]}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.button, { backgroundColor: isDarkMode ? '#EF4444' : '#e11d48' }]}>
                    <Ionicons name="trash" size={20} color="#fff" />
                    <Text style={[styles.buttonText, { color: '#fff' }]}>Delete</Text>
                </TouchableOpacity>
            </View>

            {/* Delete Confirmation Modal */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Are you sure you want to delete this supplier?</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                onPress={handleDelete}
                                style={[styles.modalButton, { backgroundColor: '#EF4444' }]}
                            >
                                <Text style={styles.modalButtonText}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                style={[styles.modalButton, { backgroundColor: '#6B7280' }]}
                            >
                                <Text style={styles.modalButtonText}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: "center",
        paddingVertical: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    profileSection: {
        position: "relative",
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: "#fff",
    },
    activeBadge: {
        position: "absolute",
        top: -3,
        left: 80,
        backgroundColor: "green",
        borderRadius: 50,
        paddingHorizontal: 10,
    },
    activeBadgeText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
    userName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    email: {
        fontSize: 16,
        marginBottom: 20,
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    tab: {
        paddingVertical: 10,
        marginHorizontal: 20,
    },
    tabText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    infoSection: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
    },
    infoKey: {
        fontSize: 14,
    },
    infoValue: {
        fontSize: 14,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 20,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        width: "40%",
        justifyContent: "center",
    },
    buttonText: {
        marginLeft: 5,
        fontWeight: "bold",
    },
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        width: 300,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    modalButton: {
        padding: 10,
        borderRadius: 5,
        width: "45%",
        alignItems: "center",
    },
    modalButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

export default SupplierProfile;

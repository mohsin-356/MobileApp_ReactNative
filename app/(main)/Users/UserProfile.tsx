import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    Button,
    Alert
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const UserProfile = () => {
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false);

    const handleEdit = () => {
        router.push('./updateUser'); // Replace with your actual edit route
    };

    const handleDelete = () => {
        setModalVisible(true);
    };

    const confirmDelete = () => {
        setModalVisible(false);
        Alert.alert("Deleted", "User has been deleted successfully.");
        // Perform delete logic here
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profileSection}>
                    <Image
                        source={{
                            uri: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with the actual image URL
                        }}
                        style={styles.profileImage}
                    />
                    <View style={styles.activeBadge}>
                        <Text style={styles.activeBadgeText}>Active</Text>
                    </View>
                </View>
                <Text style={styles.userName}>Mohsin</Text>
                <Text style={styles.email}>za50@gmail.com</Text>
            </View>

            {/* Tab Section */}
            <View style={styles.tabContainer}>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Info</Text>
                </TouchableOpacity>
                {/* Add more tabs here */}
            </View>

            {/* Info Section */}
            <View style={styles.infoSection}>
                {/* Supplier Info */}
                <Text style={styles.sectionHeader}>Supplier Info</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoKey}>Supplier Name</Text>
                    <Text style={styles.infoValue}>Mohsin</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoKey}>Status</Text>
                    <Text style={styles.infoValue}>Active</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoKey}>Supplier ID</Text>
                    <Text style={styles.infoValue}>SUP12345</Text>
                </View>

                {/* Contact Info */}
                <Text style={styles.sectionHeader}>Contact Info</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoKey}>Phone</Text>
                    <Text style={styles.infoValue}>+92 300 1234567</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoKey}>WhatsApp</Text>
                    <Text style={styles.infoValue}>+92 300 1234567</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoKey}>Address</Text>
                    <Text style={styles.infoValue}>Street 45, Lahore, Pakistan</Text>
                </View>

                {/* Business Info */}
                <Text style={styles.sectionHeader}>Business Info</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoKey}>Total Orders</Text>
                    <Text style={styles.infoValue}>120</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoKey}>Pending Orders</Text>
                    <Text style={styles.infoValue}>5</Text>
                </View>
            </View>

            {/* Buttons Section */}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={handleEdit}>
                    <FontAwesome name="edit" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDelete}>
                    <FontAwesome name="trash" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>

            {/* Delete Confirmation Modal */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Are you sure you want to delete this user?</Text>
                        <View style={styles.modalButtons}>
                            <Button title="Cancel" onPress={() => setModalVisible(false)} />
                            <Button title="Delete" onPress={confirmDelete} color="red" />
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
        backgroundColor: "#fff",
    },
    header: {
        backgroundColor: "#3b82f6",
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
        color: "#fff",
        marginTop: 10,
    },
    email: {
        fontSize: 16,
        color: "#e5e7eb",
        marginBottom: 20,
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#d1d5db",
    },
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    tabText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#3b82f6",
    },
    infoSection: {
        padding: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#3b82f6",
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    infoKey: {
        fontSize: 16,
        color: "#6b7280",
    },
    infoValue: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#111827",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: "#d1d5db",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#3b82f6",
        padding: 10,
        borderRadius: 5,
    },
    deleteButton: {
        backgroundColor: "#ef4444",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        width: "80%",
        alignItems: "center",
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
});

export default UserProfile;

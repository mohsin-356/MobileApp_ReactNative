import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 

const ReportScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleMenuClick = () => {
        setModalVisible(true); 
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>All Generated PDF</Text>
            </View>

            <View style={styles.cardContainer}>
                {/* Sample Card */}
                <View style={styles.card}>
                    <View style={styles.cardLeft}>
                        <FontAwesome name="file-pdf-o" size={30} color="#e57373" />
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.cardTitle}>Sample PDF Document</Text>
                            <Text style={styles.cardDate}>Date: 2024-11-20</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleMenuClick} style={styles.menuButton}>
                        <AntDesign name="ellipsis1" size={24} color="black" style={styles.menuIcon} />
                    </TouchableOpacity>
                </View>
                
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>More Options</Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalCloseButton}>
                            <Text style={styles.modalCloseText}>Close</Text>
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
        backgroundColor: '#f0f0f0',
        paddingTop: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    cardContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    cardTextContainer: {
        marginLeft: 10,
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
    },
    cardDate: {
        fontSize: 11,
        color: '#777',
    },
    menuButton: {
        padding: 5,
    },
    menuIcon: {
        transform: [{ rotate: '90deg' }], // Rotate the icon to make it vertical
    },
    modalContainer: {
        flex: 1,
      
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: 200,
    },
    modalCloseButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#e57373',
        borderRadius: 5,
    },
    modalCloseText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ReportScreen;

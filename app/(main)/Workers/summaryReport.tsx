import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Share,
    Modal,
    Button
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SummaryReport = () => {
    const [searchText, setSearchText] = useState('');
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fileName, setFileName] = useState('');

    // Function to handle the share action
    const handleShare = async () => {
        try {
            await Share.share({
                message: 'Check out this summary report!',
            });
        } catch (error) {
            console.error(error);
        }
    };

    // Function to handle PDF generation
    const handleGeneratePDF = () => {
        if (fileName.trim() === '') {
            alert('Please enter a valid file name.');
            return;
        }
        setIsModalVisible(false);
        alert(`PDF "${fileName}.pdf" generated successfully!`);
        setFileName('');
    };

    // Formatting the current month and year
    const formattedMonthYear = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;

    return (
        <View style={styles.container}>
            {/* Employee Card */}
            <View style={styles.employeeCard}>
                <View style={styles.employeeHeader}>
                    <View style={styles.avatarContainer}>
                        <Text style={styles.avatarText}>N</Text>
                    </View>
                    <View style={styles.employeeInfo}>
                        <Text style={styles.employeeName}>ndnhdj (bdjdjdj)</Text>
                        <Text style={styles.employeeSubtitle}>hfjfjn bdjdjdj</Text>
                    </View>
                    <View style={styles.iconsContainer}>
                        <TouchableOpacity onPress={handleShare}>
                            <Ionicons name="share-outline" size={24} color="#6B7280" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.pdfIcon}>
                            <Ionicons name="document-outline" size={24} color="#6B7280" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Attendance Grid */}
                <View style={styles.grid}>
                    <View style={[styles.gridItem, styles.present]}>
                        <Text style={styles.gridLabel}>P</Text>
                        <Text style={styles.gridValue}>1</Text>
                    </View>
                    <View style={[styles.gridItem, styles.absent]}>
                        <Text style={styles.gridLabel}>A</Text>
                        <Text style={styles.gridValue}>0</Text>
                    </View>
                    <View style={[styles.gridItem, styles.halfDay]}>
                        <Text style={styles.gridLabel}>H-D</Text>
                        <Text style={styles.gridValue}>0</Text>
                    </View>
                    <View style={[styles.gridItem, styles.holiday]}>
                        <Text style={styles.gridLabel}>H</Text>
                        <Text style={styles.gridValue}>0</Text>
                    </View>
                    <View style={[styles.gridItem, styles.weekend]}>
                        <Text style={styles.gridLabel}>W</Text>
                        <Text style={styles.gridValue}>4</Text>
                    </View>

                    <View style={[styles.gridItem, styles.none]}>
                        <Text style={styles.gridLabel}>N</Text>
                        <Text style={styles.gridValue}>25</Text>
                    </View>
                </View>

                {/* Summary Section */}
                <View style={styles.summary}>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Debits:</Text>
                        <Text style={styles.summaryValue}>$0</Text>
                        <Text style={styles.summaryLabel}>OT Hours:</Text>
                        <Text style={styles.summaryValue}>0.0</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Bonus:</Text>
                        <Text style={styles.summaryValue}>$0</Text>
                        <Text style={styles.summaryLabel}>OT Wages:</Text>
                        <Text style={styles.summaryValue}>0.0</Text>
                    </View>
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Total Salary:</Text>
                        <Text style={styles.totalValue}>$0.0</Text>
                    </View>
                </View>

               
                
            </View>

            {/* Modal for PDF generation */}
            <Modal visible={isModalVisible} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Generate PDF</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter file name"
                            value={fileName}
                            onChangeText={setFileName}
                        />
                        <View style={styles.modalButtons}>
                            <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
                            <Button title="Generate" onPress={handleGeneratePDF} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
    },
    employeeCard: {
        backgroundColor: '#fff',
        margin: 12,
        borderRadius: 8,
        padding: 14,
        elevation: 2,
    },
    employeeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatarContainer: {
        width: 48,
        height: 48,
        backgroundColor: '#60A5FA',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    employeeInfo: {
        flex: 1,
        marginLeft: 12,
    },
    employeeName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    employeeSubtitle: {
        fontSize: 12,
        color: '#6B7280',
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    pdfIcon: {
        marginLeft: 12,
    },
    grid: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    gridItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 6,
        borderWidth: 1,
    },
    gridLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
        borderBottomWidth: 2,
        borderBottomColor: '#ddd',
        paddingBottom: 4,
    },
    gridValue: {
        fontSize: 12,
        color: 'black',
    },
    present: {
        backgroundColor: '#4ADE80',
    },
    absent: {
        backgroundColor: '#F87171',
    },
    halfDay: {
        backgroundColor: '#FBBF24',
    },
    holiday: {
        backgroundColor: '#2DD4BF',
    },
    weekend: {
        backgroundColor: '#A855F7',
    },
    none: {
        backgroundColor: '#9CA3AF',
    },
    summary: {
        marginTop: 8,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    summaryLabel: {
        flex: 1,
        fontSize: 12,
        fontWeight: "bold",
        color: '#4B5563',
        marginLeft: 10
    },
    summaryValue: {
        fontSize: 12,
        color: '#111827',
        flex: 1,
        textAlign: 'right',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingTop: 10,
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111827',
    },
    totalValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111827',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 8,
        marginBottom: 12,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default SummaryReport;

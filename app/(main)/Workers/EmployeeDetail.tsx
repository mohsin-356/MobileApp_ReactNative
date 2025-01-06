import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import themeContext from '@/themes/themeContext';
import { useRouter } from 'expo-router';

const EmployeeDetail = () => {
    const appliedTheme = useContext(themeContext);
    const router = useRouter();

    // Hardcoded employee data
    const employeeData = {
        name: "John Doe",
        employeeId: "E12345",
        designation: "Software Engineer",
        mobile: "+1 234 567 890",
        joiningDate: "2023-06-15",
        basicPay: "$4000",
        address: "123 Main Street, Springfield, USA",
        details: "Experienced in React Native and backend development.",
        workingDays: {
            Monday: true,
            Tuesday: true,
            Wednesday: true,
            Thursday: true,
            Friday: true,
            Saturday: false,
            Sunday: false,
        },
        paymentType: "monthly",
        isActive: true,
        accentColor: '#4A6CF7'
    };

    const handleEdit = () => {
        router.push('./UpdateEmployee');
    };

    const handleDelete = () => {
        console.log("Delete button clicked");
    };

    const DetailRow = ({ icon, label, value }) => (
        <View style={styles.detailRow}>
            <View style={[styles.iconContainer, { backgroundColor: `${employeeData.accentColor}10` }]}>
                <MaterialCommunityIcons
                    name={icon}
                    size={24}
                    color={employeeData.accentColor}
                />
            </View>
            <View style={styles.detailContent}>
                <Text style={[styles.detailLabel, { color: appliedTheme.color }]}>{label}</Text>
                <Text style={[styles.detailValue, { color: appliedTheme.color }]}>{value}</Text>
            </View>
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: '#F5F7FA' }]}>
            <View style={styles.headerBackground}>
                <View style={styles.headerContent}>
                    <View style={styles.avatarContainer}>
                        <Text style={[styles.avatarText, { color: employeeData.accentColor }]}>
                            {employeeData.name.charAt(0)}
                        </Text>
                    </View>
                    <Text style={[styles.nameText, { color: appliedTheme.color }]}>
                        {employeeData.name}
                    </Text>
                    <Text style={[styles.designationText, { color: employeeData.accentColor }]}>
                        {employeeData.designation}
                    </Text>
                </View>
            </View>

            <View style={styles.actionButtonContainer}>
                <TouchableOpacity
                    style={[styles.actionButton, styles.editButton]}
                    onPress={handleEdit}
                >
                    <MaterialCommunityIcons name="pencil" size={24} color="white" />
                    <Text style={styles.actionButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.actionButton, styles.deleteButton]}
                    onPress={handleDelete}
                >
                    <MaterialCommunityIcons name="delete" size={24} color="white" />
                    <Text style={styles.actionButtonText}>Delete</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                style={styles.detailsContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.cardContainer}>
                    <DetailRow
                        icon="card-account-details"
                        label="Employee ID"
                        value={employeeData.employeeId}
                    />
                    <DetailRow
                        icon="phone"
                        label="Mobile Number"
                        value={employeeData.mobile}
                    />
                    <DetailRow
                        icon="calendar"
                        label="Joining Date"
                        value={employeeData.joiningDate}
                    />
                    <DetailRow
                        icon="cash"
                        label="Basic Pay"
                        value={employeeData.basicPay}
                    />
                    <DetailRow
                        icon="map-marker"
                        label="Address"
                        value={employeeData.address}
                    />
                    <DetailRow
                        icon="information"
                        label="Additional Details"
                        value={employeeData.details}
                    />
                    <DetailRow
                        icon="calendar-check"
                        label="Working Days"
                        value={Object.entries(employeeData.workingDays)
                            .filter(([_, isActive]) => isActive)
                            .map(([day]) => day)
                            .join(', ')}
                    />
                    <DetailRow
                        icon="currency-usd"
                        label="Payment Type"
                        value={employeeData.paymentType === 'per_day' ? 'Per Day' : 'Monthly'}
                    />
                    <DetailRow
                        icon="check-circle"
                        label="Status"
                        value={employeeData.isActive ? 'Active' : 'Inactive'}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
    },
    headerBackground: {
        backgroundColor: '#4A6CF7',
        height: 200,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContent: {
        alignItems: 'center',
        paddingTop: 5,
    },
    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    avatarText: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    nameText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
    designationText: {
        fontSize: 16,
        color: 'white',
        opacity: 0.8,
    },
    actionButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -30,
        marginBottom: 20,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,
        marginHorizontal: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    editButton: {
        backgroundColor: '#4CAF50',
    },
    deleteButton: {
        backgroundColor: '#F44336',
    },
    actionButtonText: {
        color: 'white',
        marginLeft: 10,
        fontWeight: '600',
    },
    detailsContainer: {
        flex: 1,
    },
    cardContainer: {
    width:"100%",
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20,
        padding: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#F9FAFB',
        padding: 12,
        borderRadius: 10,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    detailContent: {
        flex: 1,
    },
    detailLabel: {
        fontSize: 14,
        fontWeight: '500',
        opacity: 0.7,
        marginBottom: 3,
    },
    detailValue: {
        fontSize: 16,
        fontWeight: '600',
    },
});

export default EmployeeDetail;
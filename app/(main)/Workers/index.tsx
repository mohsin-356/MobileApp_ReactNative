import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Index = () => {
    const router = useRouter();

    // Functions for handling navigation
    const handleEmployeeListPress = () => {
        router.push('./Workers/EmployeesList');
    };
    const handleAttendace = () => {
        router.push('./Workers/EmployeeAttendace');
    };
    const handleAttendanceReport = () => {
        router.push('./Workers/AttendaceReport');
    };
    const handleSummaryReport = () => {
        router.push('./Workers/Summary');
    };
    const handleGenerateReports = () => {
        router.push('./Workers/GenerateReports');
    };
    const handleOvertimeEmployees = () => {
        router.push('./Workers/employeeOvertime');
    };
    return (
        <SafeAreaView style={styles.container}>
            {/* Top Cards */}
            <View style={styles.topCardsContainer}>
                <TouchableOpacity
                    style={styles.topCard}
                    onPress={handleEmployeeListPress}
                >
                    <View style={styles.iconCircle}>
                        <MaterialCommunityIcons name="account" size={40} color="#FF6B6B" />
                    </View>
                    <Text style={styles.topCardText}>Employee List</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.topCard}
                    onPress={handleAttendace}
                >
                    <View style={styles.iconCircle}>
                        <MaterialCommunityIcons name="account-check" size={40} color="#4ECDC4" />
                    </View>
                    <Text style={styles.topCardText}>Mark Attendance</Text>
                </TouchableOpacity>
            </View>

            {/* Individual Menu Items */}
            <View style={styles.menuCard}>
                {[
                    {
                        label: 'Attendance Report',
                        icon: 'file-table',
                        color: '#5D3FD3',
                        onPress: handleAttendanceReport
                    },
                    {
                        label: 'Summary Report',
                        icon: 'file-document-outline',
                        color: '#2ECC71',
                        onPress: handleSummaryReport
                    },
                    {
                        label: 'Overtime Employees',
                        icon: 'account-clock',
                        color: '#F39C12',
                        onPress: handleOvertimeEmployees
                    },
                    {
                        label: 'All Generate Reports',
                        icon: 'file-document-multiple',
                        color: '#3498DB',
                        onPress: handleGenerateReports
                    }
                ].map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.menuItem, {
                            backgroundColor: `${item.color}10`,
                            borderLeftColor: item.color
                        }]}
                        onPress={item.onPress}
                    >
                        <View style={[styles.menuIconContainer, { backgroundColor: 'white' }]}>
                            <MaterialCommunityIcons
                                name={item.icon}
                                size={22}
                                color={item.color}
                            />
                        </View>
                        <Text style={styles.menuItemText}>{item.label}</Text>
                        <View style={styles.arrowIcon}>
                            <MaterialCommunityIcons
                                name="chevron-right"
                                size={24}
                                color={item.color}
                            />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC', // Soft background color
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    topCardsContainer: {
        marginTop:30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    topCard: {
        backgroundColor: 'white',
        borderRadius: 16,
        width: '47%',
        alignItems: 'center',
        paddingVertical: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        borderWidth: 1,
        borderColor: '#E9EDF2'
    },
    iconCircle: {
        position: 'absolute',
        top: -30,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    topCardText: {
        marginTop: 24,
        fontSize: 14,
        color: '#2C3E50',
        fontWeight: '600'
    },
    menuCard: {
        backgroundColor: 'white',
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        marginVertical: 6,
        borderRadius: 12,
        borderLeftWidth: 4,
    },
    menuIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        elevation: 2,
    },
    menuItemText: {
        fontSize: 16,
        flex: 1,
        color: '#2C3E50',
        fontWeight: '500'
    },
    arrowIcon: {
        backgroundColor: 'white',
        padding: 4,
        borderRadius: 8,
        elevation: 2
    },
});

export default Index;
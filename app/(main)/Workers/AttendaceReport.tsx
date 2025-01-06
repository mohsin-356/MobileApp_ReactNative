import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Define types for employee and attendance
interface Attendance {
    present: number;
    absent: number;
    halfDay: number;
    holiday: number;
    weekend: number;
    none: number;
}

interface Employee {
    id: string;
    name: string;
    attendance: Attendance;
}

const { width } = Dimensions.get('window');

const AttendanceReport = () => {
    const [searchText, setSearchText] = useState('');
    const router = useRouter();

    // Sample employee data with type
    const employees: Employee[] = [
        {
            id: '1',
            name: 'John Doe',
            attendance: {
                present: 18,
                absent: 2,
                halfDay: 1,
                holiday: 0,
                weekend: 4,
                none: 5,
            },
        },
        {
            id: '2',
            name: 'Jane Smith',
            attendance: {
                present: 20,
                absent: 0,
                halfDay: 0,
                holiday: 0,
                weekend: 8,
                none: 2,
            },
        },
        // Add more employees as needed
    ];

    const renderEmployee = ({ item }: { item: Employee }) => {
        return (
            <View style={styles.employeeCard}>
                <View style={styles.employeeHeader}>
                    <View style={styles.avatarContainer}>
                        <Text style={styles.avatarText}>{item.name[0]}</Text>
                    </View>
                    <View style={styles.employeeInfo}>
                        <Text style={styles.employeeName}>{item.name}</Text>
                        <Text style={styles.employeeId}>ID: {item.id}</Text>
                    </View>
                    {/* Generate Pay Slip Icon */}
                    <TouchableOpacity
                        style={styles.paySlipIcon}
                        onPress={() => router.push(`./summaryReport`)}
                    >
                        <Ionicons name="document-text-outline" size={28} color="#3B82F6" />
                    </TouchableOpacity>
                </View>

                {/* Attendance Grid */}
                <View style={styles.grid}>
                    <View style={[styles.gridItem, styles.present]}>
                        <Text style={styles.gridLabel}>P</Text>
                        <Text style={styles.gridValue}>{item.attendance.present}</Text>
                    </View>
                    <View style={[styles.gridItem, styles.absent]}>
                        <Text style={styles.gridLabel}>A</Text>
                        <Text style={styles.gridValue}>{item.attendance.absent}</Text>
                    </View>
                    <View style={[styles.gridItem, styles.halfDay]}>
                        <Text style={styles.gridLabel}>H-D</Text>
                        <Text style={styles.gridValue}>{item.attendance.halfDay}</Text>
                    </View>
                    <View style={[styles.gridItem, styles.holiday]}>
                        <Text style={styles.gridLabel}>H</Text>
                        <Text style={styles.gridValue}>{item.attendance.holiday}</Text>
                    </View>
                    <View style={[styles.gridItem, styles.weekend]}>
                        <Text style={styles.gridLabel}>W</Text>
                        <Text style={styles.gridValue}>{item.attendance.weekend}</Text>
                    </View>
                    <View style={[styles.gridItem, styles.none]}>
                        <Text style={styles.gridLabel}>N</Text>
                        <Text style={styles.gridValue}>{item.attendance.none}</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Attendance Report</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={24} color="#6B7280" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search Employee..."
                        placeholderTextColor="#9CA3AF"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>
            </View>

            {/* Employee List */}
            <FlatList
                data={employees.filter((employee) =>
                    employee.name.toLowerCase().includes(searchText.toLowerCase())
                )}
                renderItem={renderEmployee}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
    },
    header: {
        backgroundColor: '#3B82F6',
        paddingVertical: 20,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    searchContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#FFFFFF',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FAFB',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#1F2937',
    },
    listContainer: {
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 20,
    },
    employeeCard: {
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4,
    },
    employeeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatarContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#3B82F6',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    avatarText: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
    },
    employeeInfo: {
        flex: 1,
        marginLeft: 16,
    },
    employeeName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: 4,
    },
    employeeId: {
        fontSize: 14,
        color: '#6B7280',
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    gridItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 12,
        marginHorizontal: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    gridLabel: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    gridValue: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    present: {
        backgroundColor: '#10B981', // Emerald Green
    },
    absent: {
        backgroundColor: '#EF4444', // Vibrant Red
    },
    halfDay: {
        backgroundColor: '#F59E0B', // Amber
    },
    holiday: {
        backgroundColor: '#06B6D4', // Cyan
    },
    weekend: {
        backgroundColor: '#8B5CF6', // Purple
    },
    none: {
        backgroundColor: '#6B7280', // Slate Gray
    },
    paySlipIcon: {
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#F3F4F6',
    },
});

export default AttendanceReport;
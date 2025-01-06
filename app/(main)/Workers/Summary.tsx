import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SummaryReport = () => {
    const [searchText, setSearchText] = useState('');
    const [currentDate, setCurrentDate] = useState(new Date());

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

    // Function to change the month
    const changeMonth = (direction) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() + direction); // direction +1 for next month, -1 for previous month
        setCurrentDate(newDate);
    };

    // Formatting the current month and year (e.g., November 2024)
    const formattedMonthYear = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;

    return (
        <View style={styles.container}>

            {/* Search Bar */}
            <View style={styles.searchBar}>
                <TouchableOpacity style={styles.searchIcon}>
                    <Ionicons name="search" size={24} color="blue" />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>

            {/* Date Selector */}
            <View style={styles.dateSelector}>
                <TouchableOpacity onPress={() => changeMonth(-1)}>
                    <Ionicons name="chevron-back" size={24} color="#666" />
                </TouchableOpacity>
                <View style={styles.dateContainer}>
                    <TouchableOpacity>
                        <Ionicons name="calendar-outline" size={24} color="#666" />
                    </TouchableOpacity>
                    <Text style={styles.dateText}>{formattedMonthYear}</Text>
                </View>
                <TouchableOpacity onPress={() => changeMonth(1)}>
                    <Ionicons name="chevron-forward" size={24} color="#666" />
                </TouchableOpacity>
            </View>

            {/* Employee Card */}
            <View style={styles.employeeCard}>
                <View style={styles.employeeHeader}>
                    <View style={styles.avatarContainer}>
                        <Text style={styles.avatarText}>n</Text>
                    </View>
                    <View style={styles.employeeInfo}>
                        <Text style={styles.employeeName}>ndnhdj (bdjdjdj)</Text>
                        <Text style={styles.employeeSubtitle}>hfjfjn bdjdjdj</Text>
                    </View>
                    <TouchableOpacity onPress={handleShare}>
                        <Ionicons name="share-outline" size={24} color="#6B7280" />
                    </TouchableOpacity>
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

                {/* Salary Status Section */}
                <View style={styles.salaryStatus}>
                    <Text style={styles.salaryStatusLabel}>Salary Status:</Text>
                    <Text style={styles.salaryStatusValue}>Pending</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 8,
        marginTop: 8,
        borderRadius: 8,
        marginHorizontal: 14,
        marginBottom:10,
        borderWidth:1
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
    },
    dateSelector: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 1,
        gap: 30,
        borderRadius: 8,  // Add border radius for decoration
        marginHorizontal: 12,  // Space from the sides
        elevation: 2,  // Shadow effect for better design
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        gap: 4,
    },
    dateText: {
        fontSize: 16,
        color: '#333',
        flex: 1,
        textAlign: 'center',
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
        fontWeight:"bold",
        color: '#4B5563',
        marginLeft:10
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
    salaryStatus: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    salaryStatusLabel: {
        fontSize: 14,
        color: '#6B7280',
    },
    salaryStatusValue: {
        fontSize: 14,
        color: '#F59E0B',
    },
});

export default SummaryReport;

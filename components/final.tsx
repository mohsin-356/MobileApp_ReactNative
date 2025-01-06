import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Payslip = () => {
   
    const employerName = 'ABC Corp';
    const monthDuration = 'October 2024';
    const employeeProfile = 'https://www.example.com/profile.jpg';
    const employeeName = 'John Doe';
    const employeeId = 'E12345';
    const empDesignation = 'Software Engineer';
    const dateofjoin = '1st January 2020';
    const mobileNo = '+1 234 567 890';
    const attendance = {
        present: 20,
        absent: 2,
        halfday: 1,
        holiday: 4,
        weekoff: 2,
        notset: 0,
        overtimeHours: 5,
        overtimeWages: '$150'
    };
    const basicPay = '$5000';
    const debit = '$200';
    const bonus = '$300';
    const totalSalary = '$5500';
    const dateTime = '2024-10-30';

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{employerName}</Text>
                <Text style={styles.subtitle}>Payslip for the period of {monthDuration}</Text>
            </View>

            <View style={styles.infoSection}>
                <Image source={{ uri: employeeProfile }} style={styles.profileImage} />
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Employee Name:</Text>
                    <Text style={styles.value}>{employeeName}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Employee ID:</Text>
                    <Text style={styles.value}>{employeeId}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Designation:</Text>
                    <Text style={styles.value}>{empDesignation}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Date of Joining:</Text>
                    <Text style={styles.value}>{dateofjoin}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Mobile No:</Text>
                    <Text style={styles.value}>{mobileNo}</Text>
                </View>
            </View>

            <View style={styles.attendanceTable}>
                <View style={styles.tableHeader}>
                    {['Present', 'Absent', 'Half Day', 'Holidays', 'Week Off', 'Not Set', 'Overtime Hours', 'Overtime Wages'].map((item, index) => (
                        <Text key={index} style={[styles.tableHeaderText, { backgroundColor: getTableHeaderColor(index) }]}>
                            {item}
                        </Text>
                    ))}
                </View>
                <View style={styles.tableRow}>
                    {Object.values(attendance).map((value, index) => (
                        <Text key={index} style={styles.tableCell}>
                            {value}
                        </Text>
                    ))}
                </View>
            </View>

            <View style={styles.salarySummary}>
                <View style={styles.salaryRow}>
                    <Text style={styles.salaryLabel}>Total Basic Pay:</Text>
                    <Text style={styles.salaryValue}>{basicPay}</Text>
                </View>
                <View style={styles.salaryRow}>
                    <Text style={styles.salaryLabel}>Total Debit:</Text>
                    <Text style={styles.salaryValue}>{debit}</Text>
                </View>
                <View style={styles.salaryRow}>
                    <Text style={styles.salaryLabel}>Total Bonus:</Text>
                    <Text style={styles.salaryValue}>{bonus}</Text>
                </View>
                <View style={styles.salaryRow}>
                    <Text style={styles.salaryLabel}>Net Pay:</Text>
                    <Text style={styles.salaryValue}>{totalSalary}</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.signature}>
                    <Text>_____________________________<Text style={styles.footerLabel}> Employer's Signature</Text></Text>
                </View>
                <View style={styles.signature}>
                    <Text>_____________________________<Text style={styles.footerLabel}> Employee's Signature</Text></Text>
                </View>
                <Text style={styles.footerDate}>
                    <Text style={{ fontWeight: 'bold' }}>Date:</Text> {dateTime}
                </Text>
            </View>

        </ScrollView>
    );
};

const getTableHeaderColor = (index) => {
    const colors = [
        '#3eaf79', '#ff6565', '#f7ad64', '#21b1cb', '#a25ed3', '#c1c1c1', '#4CAFFE', '#4CAFFE'
    ];
    return colors[index] || '#fff';
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f9ff',
    },
    header: {
        textAlign: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        marginTop: 10,
    },
    infoSection: {
        marginBottom: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: 'center',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    label: {
        fontWeight: '500',
        color: '#333',
    },
    value: {
        fontWeight: 'bold',
        color: '#333',
    },
    attendanceTable: {
        marginBottom: 20,
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f0f9ff',
        paddingVertical: 10,
    },
    tableHeaderText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        padding: 5,
        borderRadius: 5,
        flex: 1,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 5,
    },
    tableCell: {
        textAlign: 'center',
        flex: 1,
    },
    salarySummary: {
        marginBottom: 20,
    },
    salaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    salaryLabel: {
        fontWeight: '500',
    },
    salaryValue: {
        fontWeight: 'bold',
    },
    footer: {
        marginTop: 30,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 10,
        textAlign: 'center',
    },
    signature: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerLabel: {
        fontStyle: 'italic',
    },
    footerDate: {
        textAlign: 'center',
        marginTop: 10,
    },
});

export default Payslip;

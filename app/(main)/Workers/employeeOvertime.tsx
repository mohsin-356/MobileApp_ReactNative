import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';

export default function OvertimeEmployees() {
    const router = useRouter();

    const [fromDate, setFromDate] = useState<Date>(new Date());
    const [toDate, setToDate] = useState<Date>(new Date());
    const [showFromDatePicker, setShowFromDatePicker] = useState(false);
    const [showToDatePicker, setShowToDatePicker] = useState(false);

    const handleAddOvertime = () => {
        // Navigate to AddOvertime screen with the selected dates
        router.push(`./addOvertime`);
    };

    const handleFromDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        setShowFromDatePicker(false);
        if (selectedDate) setFromDate(selectedDate);
    };

    const handleToDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        setShowToDatePicker(false);
        if (selectedDate) setToDate(selectedDate);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Overtime Employees</Text>

            <View style={styles.dateContainer}>
                {/* From Date */}
                <View style={styles.dateField}>
                    <Text style={styles.dateLabel}>From</Text>
                    <TouchableOpacity
                        style={styles.dateButton}
                        onPress={() => setShowFromDatePicker(true)}
                    >
                        <MaterialIcons name="calendar-today" size={20} color="#333" />
                        <Text style={styles.dateText}>{fromDate.toLocaleDateString()}</Text>
                    </TouchableOpacity>
                </View>

                {/* To Date */}
                <View style={styles.dateField}>
                    <Text style={styles.dateLabel}>To</Text>
                    <TouchableOpacity
                        style={styles.dateButton}
                        onPress={() => setShowToDatePicker(true)}
                    >
                        <MaterialIcons name="calendar-today" size={20} color="#333" />
                        <Text style={styles.dateText}>{toDate.toLocaleDateString()}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {showFromDatePicker && (
                <DateTimePicker
                    value={fromDate}
                    mode="date"
                    display="default"
                    onChange={handleFromDateChange}
                />
            )}

            {showToDatePicker && (
                <DateTimePicker
                    value={toDate}
                    mode="date"
                    display="default"
                    onChange={handleToDateChange}
                />
            )}

            <Button title="Add Overtime" onPress={handleAddOvertime} />

            <Text style={styles.noDataText}>No Data</Text>
            <Text style={styles.noDataText}>Enter your employees' overtime</Text>

            {/* Footer-like Total Section */}
            <View style={styles.footer}>
                <Text style={styles.totalText}>Total Entries: 0</Text>
                <Text style={styles.totalText}>Hours: 0</Text>
                <Text style={styles.totalText}>Wages: $0</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F8FF',
        padding: 20,
    },
    title: {
        alignSelf:'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    dateField: {
        flex: 1,
        marginHorizontal: 5,
    },
    dateLabel: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    dateButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        padding: 10,
        borderRadius: 5,
    },
    dateText: {
        fontSize: 16,
        alignItems: 'center',
        color: '#333',
        marginLeft: 10,
    },
    noDataText: {
        color: '#777',
        textAlign: 'center',
    marginTop:'auto',
        
    },
    footer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 10,
        marginTop: 'auto', 
    
    },
    totalText: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginVertical: 5,
    },
});

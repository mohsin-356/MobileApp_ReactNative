import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert,
    Modal,
    FlatList,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker'; // Install this library

const OvertimeAttendance = () => {
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [overtimeDate, setOvertimeDate] = useState('');
    const [overtimeHours, setOvertimeHours] = useState('');
    const [overtimeAmount, setOvertimeAmount] = useState('');
    const [note, setNote] = useState('');
    const [employeeModalVisible, setEmployeeModalVisible] = useState(false);
    const [datePickerVisible, setDatePickerVisible] = useState(false);

    const employees = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'];

    const handleSave = () => {
        if (!selectedEmployee || !overtimeDate || !overtimeHours || !overtimeAmount) {
            Alert.alert('Error', 'Please fill out all required fields!');
            return;
        }

        console.log('Overtime Data:', {
            selectedEmployee,
            overtimeDate,
            overtimeHours,
            overtimeAmount,
            note,
        });

        Alert.alert('Success', 'Overtime data saved successfully!');
    };

    const handleDateChange = (event: any, selectedDate?: Date | undefined) => {
        setDatePickerVisible(false);
        if (selectedDate) {
            const formattedDate = selectedDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
            setOvertimeDate(formattedDate);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content} keyboardShouldPersistTaps="handled">
                {/* Avatar Section */}
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <MaterialIcons name="access-time" size={40} color="#F97316" />
                    </View>
                    <Text style={styles.heading}>Overtime Attendance</Text>
                </View>

                {/* Input Fields */}
                <TouchableOpacity
                    style={styles.inputContainer}
                    onPress={() => setEmployeeModalVisible(true)}
                >
                    <MaterialIcons name="person" size={20} color="#6B7280" style={styles.inputIcon} />
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputLabel}>Employee Name</Text>
                        <Text style={styles.input}>{selectedEmployee || 'Select Employee'}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.inputContainer}
                    onPress={() => setDatePickerVisible(true)}
                >
                    <MaterialIcons name="calendar-today" size={20} color="#6B7280" style={styles.inputIcon} />
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputLabel}>Overtime Date</Text>
                        <Text style={styles.input}>{overtimeDate || 'Select Date'}</Text>
                    </View>
                </TouchableOpacity>

                <InputField
                    icon="access-time"
                    label="Overtime Hours"
                    value={overtimeHours}
                    onChangeText={setOvertimeHours}
                />
                <InputField
                    icon="attach-money"
                    label="Overtime Amount"
                    value={overtimeAmount}
                    onChangeText={setOvertimeAmount}
                />
                <InputField
                    icon="note"
                    label="Note (Optional)"
                    value={note}
                    onChangeText={setNote}
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleSave}>
                    <Text style={styles.submitButtonText}>Save</Text>
                </TouchableOpacity>
            </ScrollView>

            <Modal
                visible={employeeModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setEmployeeModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <FlatList
                        data={employees}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.modalItem}
                                onPress={() => {
                                    setSelectedEmployee(item);
                                    setEmployeeModalVisible(false);
                                }}
                            >
                                <View style={styles.avatarr}>
                                    <Text style={styles.avatarText}>A</Text>
                                </View>
                                <Text style={styles.modalText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Modal>

            {/* Date Picker */}
            {datePickerVisible && (
                <DateTimePicker
                    value={new Date()}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}
        </View>
    );
};

const InputField = ({ icon, label, value, onChangeText, placeholder = '' }) => (
    <View style={styles.inputContainer}>
        <MaterialIcons name={icon} size={20} color="#6B7280" style={styles.inputIcon} />
        <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder || label}
                placeholderTextColor="#9CA3AF"
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#dcd8de' },
    content: { flex: 1, padding: 12 },
    avatarContainer: { alignItems: 'center', marginVertical: 40, backgroundColor: '#fff', borderRadius: 30 },
    avatar: {
        top: -40,
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    heading: { fontSize: 20, fontWeight: 'bold', color: '#111827', top: -30 },
    inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, marginBottom: 12, padding: 10, elevation: 2 },
    inputIcon: { marginRight: 10 },
    inputWrapper: { flex: 1 },
    inputLabel: { fontSize: 12, color: '#6B7280', marginBottom: 4 },
    input: { height: 30, fontSize: 14, color: '#1F2937', borderBottomWidth: 1, borderBottomColor: '#D1D5DB', paddingVertical: 4 },
    submitButton: { backgroundColor: '#2563EB', paddingVertical: 12, borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginBottom: 30 },
    submitButtonText: { fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' },
    modalContainer: 
    { 
        flex: 1, 
        backgroundColor: 'rgba(4,6,8,0.5)',
         justifyContent: 'center',
         top: 200
    },
    modalItem: { flexDirection: 'row', padding: 10, backgroundColor: '#fff', marginVertical: 5, 
    marginHorizontal: 10, borderRadius: 8, alignItems: 'center' },
    modalText: { fontSize: 16, color: '#000' },
    avatarr: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: 'blue', 
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    avatarText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white', 
    },
});

export default OvertimeAttendance;

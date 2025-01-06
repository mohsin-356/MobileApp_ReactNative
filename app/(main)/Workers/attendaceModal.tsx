import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    Modal,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

interface AttendanceOptionProps {
    label: string;
    isSelected: boolean;
    onPress: () => void;
}

const AttendaceModal = () => {
    const [selectedDate, setSelectedDate] = useState('09/11/2024');
    const [attendanceType, setAttendanceType] = useState('');
    const [advanceAmount, setAdvanceAmount] = useState('');
    const [extraBonus, setExtraBonus] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const AttendanceOption = ({ label, isSelected, onPress }: AttendanceOptionProps) => (
        <TouchableOpacity
            style={[styles.attendanceOption, isSelected && styles.attendanceOptionSelected]}
            onPress={onPress}
        >
            <View
                style={[
                    styles.radioButton,
                    isSelected && styles.radioButtonSelected,
                ]}
            >
                {isSelected && <View style={styles.radioButtonInner} />}
            </View>
            <Text style={styles.attendanceOptionText}>{label}</Text>
        </TouchableOpacity>
    );

    const handleDateChange = (event: any, selected: Date | undefined) => {
        setShowDatePicker(false);
        if (selected) {
            const date = selected.toLocaleDateString('en-GB'); // Format as DD/MM/YYYY
            setSelectedDate(date);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.info}>
                {/* Date Header */}
                <View style={styles.dateContainer}>
                    <MaterialIcons name="calendar-today" size={24} color="#4B5563" />
                    <TouchableOpacity>
                        <MaterialIcons name="chevron-left" size={24} color="#4B5563" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <Text style={styles.dateText}>{selectedDate}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="chevron-right" size={24} color="#4B5563" />
                    </TouchableOpacity>
                </View>

                {showDatePicker && (
                    <DateTimePicker
                        value={new Date()}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                    />
                )}
            </View>

            {/* Attendance Section */}
            <Text style={styles.sectionTitle}>ATTENDANCE</Text>
            <View style={styles.attendanceGrid}>
                <AttendanceOption
                    label="Present"
                    isSelected={attendanceType === 'present'}
                    onPress={() => setAttendanceType('present')}
                />
                <AttendanceOption
                    label="Absent"
                    isSelected={attendanceType === 'absent'}
                    onPress={() => setAttendanceType('absent')}
                />
                <AttendanceOption
                    label="Half Day"
                    isSelected={attendanceType === 'halfday'}
                    onPress={() => setAttendanceType('halfday')}
                />
                <AttendanceOption
                    label="Holiday"
                    isSelected={attendanceType === 'holiday'}
                    onPress={() => setAttendanceType('holiday')}
                />
            </View>


            {/* Action Buttons */}
            <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.updateButton}>
                    <MaterialIcons name="person" size={24} color="#FFFFFF" />
                    <Text style={styles.buttonText}>Submit Attendance</Text>
                </TouchableOpacity>
            </View>

            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    info: {
        
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 20,
        shadowOpacity: 0.5
    },
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#Fff',
        padding: 20,
        
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e9e6ea',
        padding: 8,
        borderRadius: 12,
        marginBottom: 10,
    },
    dateText: {
        fontSize: 14,
        fontWeight: '600',
        marginHorizontal: 16,
        color: '#1F2937',
    },
    sectionTitle: {
        marginTop: 2,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#60A5FA',
        marginBottom: 10,
    },
    attendanceGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 18,
    },
    attendanceOption: {
        width: '48%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eeeaf0',
        padding: 14,
        borderRadius: 10,
        marginBottom: 20,
    },
    attendanceOptionSelected: {
        backgroundColor: '#d5d4d6',
    },
    radioButton: {
        width: 18,
        height: 18,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#60A5FA',
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButtonSelected: {
        borderColor: '#60A5FA',
    },
    radioButtonInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#60A5FA',
    },
    attendanceOptionText: {
        fontSize: 13,
        color: '#1F2937',
    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 24,
    },
    amountField: {
        backgroundColor: '#FFFFFF',
        padding: 8,
        borderRadius: 12,
        width: '48%',
    },
    amountLabel: {
        fontSize: 12,
        color: '#6B7280',
        marginBottom: 4,
    },
    amountInput: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        padding: 4,
        fontSize: 14,
        color: '#1F2937',
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    updateButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3B82F6',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 12,
        flex: 1,
        marginRight: 8,
        justifyContent:'center'
    },


    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});

export default AttendaceModal;

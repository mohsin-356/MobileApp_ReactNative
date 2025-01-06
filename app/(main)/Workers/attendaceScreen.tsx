import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    Modal,
    Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

interface AttendanceOptionProps {
    label: string;
    isSelected: boolean;
    onPress: () => void;
}

const { width } = Dimensions.get('window');

const AttendanceScreen = () => {
    const [selectedDate, setSelectedDate] = useState('09/11/2024');
    const [attendanceType, setAttendanceType] = useState('');
    const [advanceAmount, setAdvanceAmount] = useState('');
    const [extraBonus, setExtraBonus] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const AttendanceOption = ({ label, isSelected, onPress }: AttendanceOptionProps) => (
        <TouchableOpacity
            style={[
                styles.attendanceOption,
                isSelected && styles.attendanceOptionSelected
            ]}
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
            <Text style={[
                styles.attendanceOptionText,
                isSelected && styles.attendanceOptionTextSelected
            ]}>{label}</Text>
        </TouchableOpacity>
    );

    const handleDateChange = (event: any, selected: Date | undefined) => {
        setShowDatePicker(false);
        if (selected) {
            const date = selected.toLocaleDateString('en-GB');
            setSelectedDate(date);
        }
    };

    const getStatusBadgeStyle = () => {
        switch (attendanceType) {
            case 'present':
                return { backgroundColor: '#10B981', shadowColor: '#10B981' }; // Emerald green
            case 'absent':
                return { backgroundColor: '#EF4444', shadowColor: '#EF4444' }; // Vibrant red
            case 'halfday':
                return { backgroundColor: '#F59E0B', shadowColor: '#F59E0B' }; // Amber
            case 'holiday':
                return { backgroundColor: '#3B82F6', shadowColor: '#3B82F6' }; // Bright blue
            default:
                return { backgroundColor: '#6B7280', shadowColor: '#6B7280' }; // Slate gray
        }
    };

    const getStatusBadge = () => {
        switch (attendanceType) {
            case 'present':
                return 'P';
            case 'absent':
                return 'A';
            case 'halfday':
                return 'H';
            case 'holiday':
                return 'H';
            default:
                return '';
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Employee Info */}
            <View style={styles.infoCard}>
                <View style={styles.employeeInfo}>
                    <View style={styles.avatarContainer}>
                        <Text style={styles.avatarText}>N</Text>
                    </View>
                    <View style={styles.employeeDetails}>
                        <Text style={styles.employeeName}>Mohsin Doe</Text>
                        <Text style={styles.employeeId}>ID: 12345</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.statusBadge, getStatusBadgeStyle()]}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.statusText}>{getStatusBadge()}</Text>
                    </TouchableOpacity>
                </View>

                {/* Date Header */}
                <View style={styles.dateContainer}>
                    <TouchableOpacity style={styles.dateNavButton}>
                        <MaterialIcons name="chevron-left" size={24} color="#1F2937" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setShowDatePicker(true)}
                        style={styles.dateTextContainer}
                    >
                        <MaterialIcons name="calendar-today" size={20} color="#4B5563" />
                        <Text style={styles.dateText}>{selectedDate}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dateNavButton}>
                        <MaterialIcons name="chevron-right" size={24} color="#1F2937" />
                    </TouchableOpacity>

                    {showDatePicker && (
                        <DateTimePicker
                            value={new Date()}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}
                </View>
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
                    <Text style={styles.buttonText}>UPDATE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton}>
                    <MaterialIcons name="delete" size={24} color="#FFFFFF" />
                    <Text style={styles.buttonText}>DELETE</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6', // Light gray background
        padding: 16,
    },
    infoCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
        marginBottom: 16,
    },
    employeeInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatarContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#3B82F6', // Bright blue
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    avatarText: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
    },
    employeeDetails: {
        flex: 1,
        marginLeft: 16,
    },
    employeeName: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: 4,
    },
    employeeId: {
        fontSize: 15,
        color: '#6B7280',
    },
    statusBadge: {
        width: 50,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    statusText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F9FAFB', // Very light gray
        padding: 12,
        borderRadius: 15,
    },
    dateNavButton: {
        padding: 8,
    },
    dateTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    dateText: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
        color: '#1F2937',
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#3B82F6', // Bright blue
        marginVertical: 12,
        textAlign: 'center',
        letterSpacing: 1,
    },
    attendanceGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    attendanceOption: {
        width: '48%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FAFB', // Very light gray
        padding: 16,
        borderRadius: 15,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    attendanceOptionSelected: {
        backgroundColor: '#E5E7EB', // Slightly darker gray
        shadowOpacity: 0.2,
    },
    radioButton: {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: '#3B82F6', // Bright blue
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButtonSelected: {
        borderColor: '#3B82F6',
    },
    radioButtonInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#3B82F6', // Bright blue
    },
    attendanceOptionText: {
        fontSize: 14,
        color: '#1F2937',
        fontWeight: '500',
    },
    attendanceOptionTextSelected: {
        fontWeight: '700',
        color: '#3B82F6', // Bright blue
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    updateButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#10B981', // Emerald green
        paddingVertical: 15,
        paddingHorizontal: 24,
        borderRadius: 15,
        flex: 1,
        marginRight: 8,
        shadowColor: '#10B981',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    deleteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EF4444', // Vibrant red
        paddingVertical: 15,
        paddingHorizontal: 24,
        borderRadius: 15,
        flex: 1,
        marginLeft: 8,
        shadowColor: '#EF4444',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});

export default AttendanceScreen;
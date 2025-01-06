import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    ScrollView,
    Switch,
    Alert,
    Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

// Types remain the same...
type WorkingDays = {
    Mo: boolean;
    Tu: boolean;
    Wd: boolean;
    Thu: boolean;
    Fri: boolean;
    Sat: boolean;
    Su: boolean;
};

type EmployeeData = {
    employeeId: string;
    joiningDate: string;
    name: string;
    designation: string;
    mobile: string;
    basicPay: string;
    address: string;
    details: string;
    isActive: boolean;
    workingDays: WorkingDays;
    paymentType: 'per_day' | 'monthly';
};

type DayButtonProps = {
    day: keyof WorkingDays;
    isSelected: boolean;
};

type InputFieldProps = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    value: string;
    onChangeText: (text: string) => void;
  
    isDatePicker?: boolean;
};

const EmployeeScreen = () => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [employeeData, setEmployeeData] = useState<EmployeeData>({
        employeeId: '',
        joiningDate: '09-11-2024',
        name: '',
        designation: '',
        mobile: '',
        basicPay: '0.0',
        address: '',
        details: '',
        isActive: true,
        workingDays: {
            Mo: true,
            Tu: true,
            Wd: true,
            Thu: true,
            Fri: true,
            Sat: false,
            Su: false,
        },
        paymentType: 'per_day',
    });

    const weekDays: (keyof WorkingDays)[] = ['Mo', 'Tu', 'Wd', 'Thu', 'Fri', 'Sat', 'Su'];

    const onDateChange = (event: any, selectedDate?: Date) => {
        setShowDatePicker(false);
        if (selectedDate) {
            const formattedDate = selectedDate.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }).replace(/\//g, '-');
            setEmployeeData(prev => ({ ...prev, joiningDate: formattedDate }));
        }
    };

    const DayButton = ({ day, isSelected }: DayButtonProps) => (
        <TouchableOpacity
            style={[
                styles.dayButton,
                isSelected ? styles.dayButtonSelected : null,
                day === 'Su' ? styles.sundayButton : null,
            ]}
            onPress={() => {
                setEmployeeData((prev) => ({
                    ...prev,
                    workingDays: {
                        ...prev.workingDays,
                        [day]: !prev.workingDays[day],
                    },
                }));
            }}
        >
            <Text
                style={[
                    styles.dayButtonText,
                    isSelected ? styles.dayButtonTextSelected : null,
                    day === 'Su' ? styles.sundayButtonText : null,
                ]}
            >
                {day}
            </Text>
        </TouchableOpacity>
    );

    // Updated InputField component with better text input handling
    const InputField = ({
        icon,
        label,
        value,
        onChangeText,
        isDatePicker = false,
    }: InputFieldProps) => (
        <View style={styles.inputContainer}>
            <MaterialIcons name={icon} size={20} color="#6B7280" style={styles.inputIcon} />
            <View style={styles.inputWrapper}>
                <Text style={styles.inputLabel}>{label}</Text>
                {isDatePicker ? (
                    <TouchableOpacity
                        onPress={() => setShowDatePicker(true)}
                        style={styles.dateInputContainer}
                    >
                        <Text style={styles.dateInput}>{value}</Text>
                    </TouchableOpacity>
                ) : (
                    <TextInput
                        style={styles.input}
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={label}
                        placeholderTextColor="#9CA3AF"
                        
                        multiline={label.includes('Details') || label.includes('Address')}
                        // Added these props to improve text input behavior
                        autoCapitalize="none"
                        autoCorrect={false}
                        enablesReturnKeyAutomatically
                        returnKeyType="next"
                    />
                )}
            </View>
        </View>
    );

    // Updated handler functions with better state updates
    const handleTextChange = (field: keyof EmployeeData) => (text: string) => {
        setEmployeeData(prev => ({
            ...prev,
            [field]: text
        }));
    };

    const handleSubmit = () => {
        Alert.alert('Success', 'Employee Added');
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content} keyboardShouldPersistTaps="handled">
                {/* Avatar Section */}
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <MaterialIcons name="person" size={40} color="#F97316" />
                    </View>
                    <Text style={styles.heading}>Add Employee</Text>
                </View>

                {/* Input Fields */}
                <InputField
                    icon="badge"
                    label="NIC/Employee ID"
                    value={employeeData.employeeId}
                    onChangeText={handleTextChange('employeeId')}
                />
                <InputField
                    icon="calendar-today"
                    label="Joining Date"
                    value={employeeData.joiningDate}
                    onChangeText={() => { }}
                    isDatePicker={true}
                />
                {showDatePicker && (
                    <DateTimePicker
                        value={new Date()}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onDateChange}
                    />
                )}
                <InputField
                    icon="person"
                    label="Employee Name"
                    value={employeeData.name}
                    onChangeText={handleTextChange('name')}
                />
                <InputField
                    icon="work"
                    label="Designation"
                    value={employeeData.designation}
                    onChangeText={handleTextChange('designation')}
                />
                <InputField
                    icon="phone"
                    label="Mobile No"
                    value={employeeData.mobile}
                    onChangeText={handleTextChange('mobile')}
                    
                />
                <InputField
                    icon="attach-money"
                    label="Basic Pay"
                    value={employeeData.basicPay}
                    onChangeText={handleTextChange('basicPay')}
                    
                />

                {/* Rest of the component remains the same... */}
                {/* Payment Type Section */}
                <Text style={styles.sectionTitle}>Payment Type</Text>
                <View style={styles.paymentTypeContainer}>
                    <TouchableOpacity
                        style={[
                            styles.paymentTypeButton,
                            employeeData.paymentType === 'per_day' && styles.paymentTypeSelected,
                        ]}
                        onPress={() => setEmployeeData((prev) => ({ ...prev, paymentType: 'per_day' }))}
                    >
                        <Text
                            style={[
                                styles.paymentTypeText,
                                employeeData.paymentType === 'per_day' && styles.paymentTypeTextSelected
                            ]}
                        >
                            Per Day
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.paymentTypeButton,
                            employeeData.paymentType === 'monthly' && styles.paymentTypeSelected,
                        ]}
                        onPress={() => setEmployeeData((prev) => ({ ...prev, paymentType: 'monthly' }))}
                    >
                        <Text
                            style={[
                                styles.paymentTypeText,
                                employeeData.paymentType === 'monthly' && styles.paymentTypeTextSelected
                            ]}
                        >
                            Monthly
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Working Days Section */}
                <Text style={styles.sectionTitle}>Working Days</Text>
                <View style={styles.daysContainer}>
                    {weekDays.map((day) => (
                        <DayButton key={day} day={day} isSelected={employeeData.workingDays[day]} />
                    ))}
                </View>

                {/* Optional Fields */}
                <InputField
                    icon="location-on"
                    label="Address (Optional)"
                    value={employeeData.address}
                    onChangeText={handleTextChange('address')}
                />
                <InputField
                    icon="description"
                    label="Details (Optional)"
                    value={employeeData.details}
                    onChangeText={handleTextChange('details')}
                />

                {/* Active Switch */}
                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>Active Employee</Text>
                    <Switch
                        value={employeeData.isActive}
                        onValueChange={(value) =>
                            setEmployeeData((prev) => ({ ...prev, isActive: value }))
                        }
                        trackColor={{ false: '#D1D5DB', true: '#60A5FA' }}
                        thumbColor={employeeData.isActive ? '#FFFFFF' : '#FFFFFF'}
                    />
                </View>

                {/* Submit Button */}
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

// Styles remain the same...
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcd8de',
        
    },
    content: {
        flex: 1,
        padding: 14,
    },
    avatarContainer: {
        alignItems: 'center',
        marginVertical: 40,
        backgroundColor:"#fff",
        borderRadius:30
    },
    avatar: {
        top:-40,
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111827',
        top:-30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        marginBottom: 12,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    inputIcon: {
        marginRight: 10,
    },
    inputWrapper: {
        flex: 1,
    },
    inputLabel: {
        fontSize: 12,
        color: '#6B7280',
        marginBottom: 4,
    },
    input: {
        height: 30,
        fontSize: 14,
        color: '#1F2937',
        borderBottomWidth: 1,
        borderBottomColor: '#D1D5DB',
        paddingVertical: 4,
    },
    dateInputContainer: {
        height: 30,
        justifyContent: 'center',
    },
    dateInput: {
        fontSize: 14,
        color: '#1F2937',
        borderBottomWidth: 1,
        borderBottomColor: '#D1D5DB',
        paddingVertical: 4,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111827',
        marginVertical: 8,
    },
    paymentTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    paymentTypeButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor: '#F3F4F6',
    },
    paymentTypeSelected: {
        backgroundColor: '#2563EB',
    },
    paymentTypeText: {
        fontSize: 14,
        color: '#111827',
    },
    paymentTypeTextSelected: {
        color: '#FFFFFF',
    },
    daysContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    dayButton: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        margin: 4,
        borderRadius: 16,
        backgroundColor: '#F3F4F6',
    },
    dayButtonSelected: {
        backgroundColor: '#2563EB',
    },
    dayButtonText: {
        fontSize: 12,
        color: '#111827',
    },
    dayButtonTextSelected: {
        color: '#FFFFFF',
    },
    sundayButton: {
        backgroundColor: '#FECACA',
    },
    sundayButtonText: {
        color: '#F87171',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    switchLabel: {
        fontSize: 14,
        color: '#111827',
    },
    submitButton: {
        backgroundColor: '#2563EB',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});

export default EmployeeScreen;
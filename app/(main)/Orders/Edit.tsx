import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { useSettings } from "@/themes/SettingsContext";

const DeliveryStatus = () => {
    const [deliveryDate, setDeliveryDate] = useState<Date | undefined>(undefined);
    const [quantity, setQuantity] = useState('');
    const [status, setStatus] = useState('Pending');
    const [showCalendar, setShowCalendar] = useState(false);

    const { isDarkMode } = useSettings(); // Access dark mode setting

    const handleDateChange = (event: any, selectedDate?: Date) => {
        setShowCalendar(false);
        if (selectedDate) {
            setDeliveryDate(selectedDate);
        }
    };

    const showDatepicker = () => {
        setShowCalendar(true);
    };

    const handleStatusChange = (itemValue: string) => {
        setStatus(itemValue);
    };

    const handleUpdate = () => {
        // Logic to update the values (e.g., save to database or state)
        console.log('Delivery Date:', deliveryDate);
        console.log('Quantity:', quantity);
        console.log('Status:', status);
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: isDarkMode ? '#1F2937' : '#F3F4F6',
                padding: 20,
            }}
        >
            <Text
                style={{
                    fontSize: 18,
                    color: isDarkMode ? '#FFFFFF' : '#1F2937',
                }}
            >
                Delivery Status Update
            </Text>

            {/* Delivery Date Picker */}
            <View style={{ marginVertical: 10 }}>
                <Text style={{ color: isDarkMode ? '#FFFFFF' : '#1F2937' }}>
                    Select Delivery Date:
                </Text>
                <TouchableOpacity onPress={showDatepicker}>
                    <Text
                        style={{
                            color: isDarkMode ? '#FFFFFF' : '#1F2937',
                            borderWidth: 1,
                            borderColor: isDarkMode ? '#374151' : '#ccc',
                            padding: 10,
                            backgroundColor: isDarkMode ? '#374151' : '#FFFFFF',
                            textAlign: 'center',
                            borderRadius: 5,
                        }}
                    >
                        {deliveryDate
                            ? deliveryDate.toLocaleDateString()
                            : 'Tap to pick a date'}
                    </Text>
                </TouchableOpacity>
                {showCalendar && (
                    <DateTimePicker
                        value={deliveryDate || new Date()}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                    />
                )}
            </View>

            {/* Quantity Input */}
            <View style={{ marginVertical: 10 }}>
                <Text style={{ color: isDarkMode ? '#FFFFFF' : '#1F2937' }}>
                    Enter Quantity:
                </Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: isDarkMode ? '#374151' : '#ccc',
                        padding: 10,
                        marginBottom: 10,
                        color: isDarkMode ? '#FFFFFF' : '#1F2937',
                        backgroundColor: isDarkMode ? '#374151' : '#FFFFFF',
                    }}
                    keyboardType="numeric"
                    value={quantity}
                    onChangeText={setQuantity}
                />
            </View>

            {/* Status Picker */}
            <View style={{ marginVertical: 10 }}>
                <Text style={{ color: isDarkMode ? '#FFFFFF' : '#1F2937' }}>
                    Select Status:
                </Text>
                <Picker
                    selectedValue={status}
                    onValueChange={handleStatusChange}
                    style={{
                        color: isDarkMode ? '#FFFFFF' : '#1F2937',
                        backgroundColor: isDarkMode ? '#374151' : '#FFFFFF',
                    }}
                >
                    <Picker.Item label="Pending" value="Pending" />
                    <Picker.Item label="Delivered" value="Delivered" />
                    <Picker.Item label="In Progress" value="In Progress" />
                </Picker>
            </View>

            {/* Update Button */}
            <View style={{ marginTop: 20 }}>
                <TouchableOpacity
                    onPress={handleUpdate}
                    style={{
                        backgroundColor: isDarkMode ? '#374151' : '#1F2937',
                        padding: 10,
                        borderRadius: 5,
                    }}
                >
                    <Text
                        style={{
                            color: isDarkMode ? '#FFFFFF' : '#FFFFFF',
                            textAlign: 'center',
                        }}
                    >
                        Update
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default DeliveryStatus;

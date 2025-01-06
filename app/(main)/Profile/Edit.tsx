import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileEditScreen = () => {
    // Initial mock data for the form
    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '+1234567890',
        address: '123 Main Street, Anytown',
        avatar: 'https://via.placeholder.com/120',
    });

    // Update form data dynamically
    const handleInputChange = (field:any, value:any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // Input fields configuration
    const inputFields = [
        { label: 'Full Name', key: 'name', placeholder: 'Enter your name' },
        { label: 'Email', key: 'email', placeholder: 'Enter your email' },
        { label: 'Phone', key: 'phone', placeholder: 'Enter your phone number' },
        { label: 'Address', key: 'address', placeholder: 'Enter your address' },
    ];

    // Cancel action
    const onCancel = () => {
        // Reset form data or navigate back
        console.log('Edit canceled');
    };

    // Save action
    const onSave = () => {
        // Save changes logic here
        console.log('Saved changes:', formData);
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.avatarContainer}>
                    <Image source={{ uri: formData.avatar }} style={styles.avatar} />
                    <TouchableOpacity style={styles.avatarUpload}>
                        <Text style={styles.uploadText}>📷</Text>
                    </TouchableOpacity>
                </View>

                {inputFields.map((field) => (
                    <View key={field.key} style={styles.inputContainer}>
                        <Text style={styles.label}>{field.label}</Text>
                        <TextInput
                            style={styles.input}
                            // n           
                            placeholder={field.placeholder}
                            onChangeText={(value) => handleInputChange(field.key, value)}
                        />
                    </View>
                ))}

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                        <Text style={styles.buttonTextCancel}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveButton} onPress={onSave}>
                        <Text style={styles.buttonTextSave}>Save Changes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7FAFC',
       
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
        width: '100%',
        maxWidth: 400,
        padding: 16,
        height:"100%"
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#4299E1',
        marginBottom: 8,
    },
    avatarUpload: {
        position: 'absolute',
        bottom: 8,
        right: 8,
        backgroundColor: '#4299E1',
        borderRadius: 20,
        padding: 8,
    },
    uploadText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 8,
        color: '#4A5568',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#CBD5E0',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    cancelButton: {
        flex: 1,
        marginRight: 8,
        backgroundColor: '#E2E8F0',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    saveButton: {
        flex: 1,
        marginLeft: 8,
        backgroundColor: '#3182CE',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonTextCancel: {
        color: '#4A5568',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonTextSave: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ProfileEditScreen;

import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView,
    Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const UpdateUser = () => {
    const existingUser = {
        full_name: 'Mohisn Hassan',
        email: 'Mohsin@example.com',
        phone: '1234567890',
        role: 'Admin',
        cnic: '12345-6789012-3',
        address: {
            street: '123 Main St',
            city: 'Springfield',
            state: 'Illinois',
            province: 'Central',
            postal_code: '62704',
        },
        picture: 'https://via.placeholder.com/100', // Placeholder image URL
    };

    const [userName, setUserName] = useState(existingUser.full_name || '');
    const [email, setEmail] = useState(existingUser.email || '');
    const [phone, setPhone] = useState(existingUser.phone || '');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(existingUser.role || '');
    const [cnic, setCnic] = useState(existingUser.cnic || '');
    const [address, setAddress] = useState({
        street: existingUser.address?.street || '',
        city: existingUser.address?.city || '',
        state: existingUser.address?.state || '',
        province: existingUser.address?.province || '',
        postalCode: existingUser.address?.postal_code || '',
    });
    const [image, setImage] = useState(existingUser.picture || null);



    const roles = ['Admin', 'Manager', 'Supplier', 'Worker'];

    useEffect(() => {
        // Populate fields with existing user data
        if (existingUser) {
            setUserName(existingUser.full_name || '');
            setEmail(existingUser.email || '');
            setPhone(existingUser.phone || '');
            setRole(existingUser.role || '');
            setCnic(existingUser.cnic || '');
            setAddress({
                street: existingUser.address?.street || '',
                city: existingUser.address?.city || '',
                state: existingUser.address?.state || '',
                province: existingUser.address?.province || '',
                postalCode: existingUser.address?.postal_code || '',
            });
            setImage(existingUser.picture || null);
        }
    }, [existingUser]);

    const handleImagePick = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleUpdate = () => {
        if (!userName || !email || !phone || !role || !cnic) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        console.log('Updated User Data:', {
            userName,
            email,
            phone,
            password, // Only if updated
            role,
            cnic,
            address,
            image,
        });

        Alert.alert('User Updated', 'The user information has been successfully updated.');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                {/* Image Picker */}
                <View style={styles.imagePickerContainer}>
                    <TouchableOpacity onPress={handleImagePick} style={styles.imagePickerButton}>
                        {image ? (
                            <Image source={{ uri: image }} style={styles.imagePreview} />
                        ) : (
                            <Ionicons name="camera" size={36} color="#fff" />
                        )}
                    </TouchableOpacity>
                </View>

                {/* Username Input */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="person" size={24} />
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        value={userName}
                        onChangeText={setUserName}
                    />
                </View>

                {/* Email Input */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="mail" size={24} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* Phone Input */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="call" size={24} />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone"
                        keyboardType="phone-pad"
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="lock-closed" size={24} />
                    <TextInput
                        style={styles.input}
                        placeholder="New Password (optional)"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                {/* CNIC Input */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="card" size={24} />
                    <TextInput
                        style={styles.input}
                        placeholder="CNIC"
                        keyboardType="number-pad"
                        value={cnic}
                        onChangeText={setCnic}
                    />
                </View>

                {/* Address Inputs */}
                <Text style={styles.sectionTitle}>Address</Text>
                {['street', 'city', 'state', 'province', 'postalCode'].map((field) => (
                    <View style={styles.inputWrapper} key={field}>
                        <Ionicons name="location" size={24} />
                        <TextInput
                            style={styles.input}
                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                            value={address[field]}
                            onChangeText={(value) =>
                                setAddress((prev) => ({ ...prev, [field]: value }))
                            }
                        />
                    </View>
                ))}

                {/* Role Picker */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="briefcase" size={24} />
                    <View style={styles.pickerWrapper}>
                        <Picker
                            selectedValue={role}
                            onValueChange={(itemValue) => setRole(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Select Role" value="" />
                            {roles.map((r) => (
                                <Picker.Item key={r} label={r} value={r} />
                            ))}
                        </Picker>
                    </View>
                </View>

                {/* Submit Button */}
                <TouchableOpacity style={styles.submitButton} onPress={handleUpdate}>
                    <Text style={styles.submitButtonText}>Update User</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    inputGroup: { marginBottom: 16 },
    inputWrapper: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
    input: { flex: 1, height: 40, paddingHorizontal: 10, borderWidth: 1, borderRadius: 8, marginLeft: 10 },
    pickerWrapper: { flex: 1, borderWidth: 1, borderRadius: 8, marginLeft: 10, justifyContent: 'center' },
    picker: { height: 40 },
    submitButton: { alignItems: 'center', justifyContent: 'center', height: 40, borderRadius: 8, backgroundColor: '#28a745' },
    submitButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    imagePickerContainer: { alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
    imagePickerButton: { width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: '#000', justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' },
    imagePreview: { width: 100, height: 100, borderRadius: 50 },
    sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
});

export default UpdateUser;

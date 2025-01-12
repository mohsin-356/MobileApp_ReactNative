import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    ScrollView,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function RegisterScreen() {
    const router = useRouter();
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        street: '',
        city: '',
        state: '',
        postalCode: '',
        cnic: '',
        picture: ''
    });

    const [secureText, setSecureText] = useState(true);
    const [image, setImage] = useState(null);

    const handleInputChange = (name:any, value:any) => {
        setForm({ ...form, [name]: value });
    };

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            // setImage(result.assets[0].uri);
            handleInputChange('picture', result.assets[0].uri);
        }
    };

    const handleRegister = async () => {
        console.log('Register:');
        try {
            console.log('Now in try catch');
            const IP = 'http://10.13.23.2:3000'; // Replace with your local machine's IP address
            // const response = await axios.post(`${IP}/api/v1/auth/signup`, form);
            // Alert.alert('Success', 'Registration successful');
            // Form validation ka code yahan add kar sakte hain
            const formData={
                fullName: form.fullName,
                email: form.email,
                password: form.password,
                confirmPassword: form.confirmPassword,
                street: form.street,
                city: form.city,
                state: form.state,
                postalCode: form.postalCode,
                cnic: form.cnic,
                picture: form.picture,
            }
            const response = await axios.post(`${IP}/api/v1/auth/signup`, formData);
    
            console.log('Registration successful:', response.data);
            // Success ke baad app login page par navigate kar sakte hain
            // router.push('/login');
    
        } catch (error) {
            // console.error('Registration failed:', error.response?.data || error.message);
            // Yahan par error handling ka code add kar sakte hain
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.logoContainer}>
                    <Ionicons name="person-add" size={80} color="#000" />
                </View>
                <Text style={styles.title}>Create an Account</Text>

                {/* Image Upload Section */}
                <TouchableOpacity style={styles.imageUploadContainer} onPress={pickImage}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.uploadedImage} />
                    ) : (
                        <>
                            <Ionicons name="camera" size={30} color="#000" />
                            <Text style={styles.uploadText}>Upload Profile Picture</Text>
                        </>
                    )}
                </TouchableOpacity>

                <View style={styles.inputContainer}>
                    <Ionicons name="person" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        placeholderTextColor="#666"
                        value={form.fullName}
                        onChangeText={(text) => handleInputChange('fullName', text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="mail" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#666"
                        value={form.email}
                        onChangeText={(text) => handleInputChange('email', text)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#666"
                        value={form.password}
                        onChangeText={(text) => handleInputChange('password', text)}
                        secureTextEntry={secureText}
                    />
                    <TouchableOpacity
                        onPress={() => setSecureText(!secureText)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons
                            name={secureText ? 'eye-off' : 'eye'}
                            size={20}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder=" Confirm Password"
                        placeholderTextColor="#666"
                        value={form.confirmPassword}
                        onChangeText={(text) => handleInputChange('confirmPassword', text)}
                        secureTextEntry={secureText}
                    />
                    <TouchableOpacity
                        onPress={() => setSecureText(!secureText)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons
                            name={secureText ? 'eye-off' : 'eye'}
                            size={20}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="home" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Street Address"
                        placeholderTextColor="#666"
                        value={form.street}
                        onChangeText={(text) => handleInputChange('street', text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="location" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="City"
                        placeholderTextColor="#666"
                        value={form.city}
                        onChangeText={(text) => handleInputChange('city', text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="map" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="State"
                        placeholderTextColor="#666"
                        value={form.state}
                        onChangeText={(text) => handleInputChange('state', text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="pin" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Postal Code"
                        placeholderTextColor="#666"
                        value={form.postalCode}
                        onChangeText={(text) => handleInputChange('postalCode', text)}
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="card" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="CNIC"
                        placeholderTextColor="#666"
                        value={form.cnic}
                        onChangeText={(text) => handleInputChange('cnic', text)}
                        keyboardType="numeric"
                    />
                </View>

                <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                    <Ionicons name="checkmark-circle" size={20} color="#fff" style={styles.buttonIcon} />
                    <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.loginLink} 
                    onPress={() => router.back()}
                >
                    <Text style={styles.loginLinkText}>Already have an account? Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    formContainer: {
        borderRadius: 20,
        padding: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 30,
    },
    imageUploadContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#555',
        overflow: 'hidden',
    },
    uploadedImage: {
        width: '100%',
        height: '100%',
    },
    uploadText: {
        marginTop: 5,
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#555',
    },
    inputIcon: {
        padding: 10,
        marginLeft: 5,
    },
    input: {
        flex: 1,
        padding: 15,
        fontSize: 16,
        color: '#000',
    },
    eyeIcon: {
        padding: 10,
        marginRight: 5,
        borderLeftColor: "black",
        borderLeftWidth: 1,
    },
    registerButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonIcon: {
        marginRight: 10,
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginLink: {
        marginTop: 15,
        alignItems: 'center',
    },
    loginLinkText: {
        color: '#000',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});
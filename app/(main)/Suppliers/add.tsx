import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useSettings } from "@/themes/SettingsContext"; // Import the useSettings hook for dark mode

const AddSupplier = () => {
  const { isDarkMode } = useSettings(); // Access dark mode status from context
  const [supplierName, setSupplierName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [supplyCity, setSupplyCity] = useState('');
  const [deliveryTimeFrame, setDeliveryTimeFrame] = useState('');
  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');
  const [rate, setRate] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      // setProfileImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!supplierName || !phone || !address || !businessType || !supplyCity || !status) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    console.log('Supplier Data:', {
      supplierName,
      email,
      phone,
      address,
      companyName,
      businessType,
      supplyCity,
      deliveryTimeFrame,
      status,
      notes,
      rate,
      bankAccount,
      profileImage,
    });

    // Clear form after submission
    setSupplierName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCompanyName('');
    setBusinessType('');
    setSupplyCity('');
    setDeliveryTimeFrame('');
    setStatus('');
    setNotes('');
    setRate('');
    setBankAccount('');
    setProfileImage(null);

    Alert.alert('Supplier Added', 'Supplier information has been successfully saved.');
  };

  return (
    <ScrollView style={[styles.scrollViewContent,{ backgroundColor: isDarkMode ? '#1F2937' : '#F3F4F6'
}]}>
      <View style={[styles.container, { backgroundColor: isDarkMode ? '#1F2937' : '#F3F4F6' }]}>
        <View style={styles.formContainer}>
          {/* Profile Image Picker */}
          <View style={styles.imagePickerContainer}>
            <TouchableOpacity onPress={handleImagePick} style={styles.imagePickerButton}>
              {profileImage ? (
                <Image source={{ uri: profileImage }} style={styles.imagePreview} />
              ) : (
                <Ionicons name="camera" size={36} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
              )}
            </TouchableOpacity>
          </View>

          {/* Supplier Name */}
          <View style={styles.inputWrapper}>
            <Ionicons name="person" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="Supplier Name"
              placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
              value={supplierName}
              onChangeText={setSupplierName}
            />
          </View>

          {/* Business Type */}
          <View style={styles.inputWrapper}>
            <Ionicons name="briefcase" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="Business Type (Wholesaler/Distributor)"
              placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
              value={businessType}
              onChangeText={setBusinessType}
            />
          </View>

          {/* Supply City */}
          <View style={styles.inputWrapper}>
            <Ionicons name="location" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="Supply City"
              placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
              value={supplyCity}
              onChangeText={setSupplyCity}
            />
          </View>

          {/* Delivery Time Frame */}
          <View style={styles.inputWrapper}>
            <Ionicons name="time" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="Delivery Time Frame (e.g., 3-5 days)"
              placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
              value={deliveryTimeFrame}
              onChangeText={setDeliveryTimeFrame}
            />
          </View>

          {/* Status */}
          <View style={styles.inputWrapper}>
            <Ionicons name="checkmark-circle" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="Status (Active/Inactive/Blocked)"
              placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
              value={status}
              onChangeText={setStatus}
            />
          </View>

          {/* Notes */}
          <View style={styles.inputWrapper}>
            <Ionicons name="document-text" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="Notes (Optional)"
              placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
              value={notes}
              onChangeText={setNotes}
            />
          </View>

          {/* Rate */}
          <View style={styles.inputWrapper}>
            <Ionicons name="star" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="Rate (Optional)"
              keyboardType="numeric"
              placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
              value={rate}
              onChangeText={setRate}
            />
          </View>

          {/* Bank Account */}
          <View style={styles.inputWrapper}>
            <Ionicons name="card" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="Bank Account (Optional)"
              placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
              value={bankAccount}
              onChangeText={setBankAccount}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={[styles.submitButton, { backgroundColor: isDarkMode ? '#374151' : '#007bff' }]} onPress={handleSubmit}>
            <Text style={[styles.submitButtonText, { color: '#FFFFFF' }]}>Add Supplier</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 6, height: "100%", },
  formContainer: { width: "100%", height: "100%", padding: 6 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', marginBottom: 22 },
  input: { flex: 1, height: 40, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginLeft: 10, paddingHorizontal: 8 },
  submitButton: { alignItems: 'center', justifyContent: 'center', height: 40, borderRadius: 8 },
  submitButtonText: { fontSize: 16, fontWeight: 'bold' },
  imagePickerContainer: { alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  imagePickerButton: { width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: '#ccc', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd' },
  imagePreview: { width: 100, height: 100, borderRadius: 50 },
  scrollViewContent: { paddingBottom: 20 },
});

export default AddSupplier;

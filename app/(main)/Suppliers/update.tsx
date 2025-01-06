import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useSettings } from "@/themes/SettingsContext"; // Import useSettings for dark mode

const EditSupplier = () => {
  const { isDarkMode, setIsDarkMode } = useSettings(); // Get isDarkMode and setIsDarkMode from context

  const [supplierName, setSupplierName] = useState("ABC Supplies");
  const [email, setEmail] = useState("contact@abcsupplies.com");
  const [phone, setPhone] = useState("+1234567890");
  const [whatsapp, setWhatsapp] = useState("+1234567890");
  const [address, setAddress] = useState("123 Main Street, City, Country");
  const [companyName, setCompanyName] = useState("ABC Supplies Ltd.");
  const [gstNumber, setGstNumber] = useState("GSTIN12345678");
  const [panNumber, setPanNumber] = useState("PAN12345678");
  const [totalOrders, setTotalOrders] = useState("120");
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/100");

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!supplierName || !phone || !address) {
      Alert.alert("Error", "Please fill in all required fields.");
      return;
    }

    console.log("Updated Supplier Data:", {
      supplierName,
      email,
      phone,
      whatsapp,
      address,
      companyName,
      gstNumber,
      panNumber,
      totalOrders,
      profileImage,
    });

    Alert.alert("Supplier Updated", "Supplier information has been successfully updated.");
  };

  return (
    <ScrollView contentContainerStyle={[styles.scrollViewContent, { backgroundColor: isDarkMode ? '#1F2937' : '#F3F4F6' }]} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={[styles.formContainer, { backgroundColor: isDarkMode ? '#2D3748' : '#F9F9F9' }]}>
          {/* Profile Image Picker */}
          <View style={styles.imagePickerContainer}>
            <TouchableOpacity onPress={handleImagePick} style={styles.imagePickerButton}>
              {profileImage ? (
                <Image source={{ uri: profileImage }} style={styles.imagePreview} />
              ) : (
                <Ionicons name="camera" size={36} color={isDarkMode ? '#FFFFFF' : '#000000'} />
              )}
            </TouchableOpacity>
          </View>

          {/* Supplier Name */}
          <View style={styles.inputWrapper}>
            <Ionicons name="person" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { backgroundColor: isDarkMode ? '#4A5568' : '#FFFFFF', color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="Supplier Name"
              placeholderTextColor={isDarkMode ? '#A0AEC0' : '#6B7280'}
              value={supplierName}
              onChangeText={setSupplierName}
            />
          </View>

          {/* Email */}
          <View style={styles.inputWrapper}>
            <Ionicons name="mail" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { backgroundColor: isDarkMode ? '#4A5568' : '#FFFFFF', color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="Email (Optional)"
              placeholderTextColor={isDarkMode ? '#A0AEC0' : '#6B7280'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Phone */}
          <View style={styles.inputWrapper}>
            <Ionicons name="call" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { backgroundColor: isDarkMode ? '#4A5568' : '#FFFFFF', color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="Phone Number"
              placeholderTextColor={isDarkMode ? '#A0AEC0' : '#6B7280'}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          {/* WhatsApp */}
          <View style={styles.inputWrapper}>
            <Ionicons name="logo-whatsapp" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { backgroundColor: isDarkMode ? '#4A5568' : '#FFFFFF', color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="WhatsApp Number"
              placeholderTextColor={isDarkMode ? '#A0AEC0' : '#6B7280'}
              keyboardType="phone-pad"
              value={whatsapp}
              onChangeText={setWhatsapp}
            />
          </View>

          {/* Address */}
          <View style={styles.inputWrapper}>
            <Ionicons name="location" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { backgroundColor: isDarkMode ? '#4A5568' : '#FFFFFF', color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="Address"
              placeholderTextColor={isDarkMode ? '#A0AEC0' : '#6B7280'}
              value={address}
              onChangeText={setAddress}
            />
          </View>

          {/* Company Name */}
          <View style={styles.inputWrapper}>
            <Ionicons name="business" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { backgroundColor: isDarkMode ? '#4A5568' : '#FFFFFF', color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="Company Name (Optional)"
              placeholderTextColor={isDarkMode ? '#A0AEC0' : '#6B7280'}
              value={companyName}
              onChangeText={setCompanyName}
            />
          </View>

          {/* GST Number */}
          <View style={styles.inputWrapper}>
            <Ionicons name="card" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { backgroundColor: isDarkMode ? '#4A5568' : '#FFFFFF', color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="GST Number"
              placeholderTextColor={isDarkMode ? '#A0AEC0' : '#6B7280'}
              value={gstNumber}
              onChangeText={setGstNumber}
            />
          </View>

          {/* PAN Number */}
          <View style={styles.inputWrapper}>
            <Ionicons name="key" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { backgroundColor: isDarkMode ? '#4A5568' : '#FFFFFF', color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="PAN Number"
              placeholderTextColor={isDarkMode ? '#A0AEC0' : '#6B7280'}
              value={panNumber}
              onChangeText={setPanNumber}
            />
          </View>

          {/* Total Orders */}
          <View style={styles.inputWrapper}>
            <Ionicons name="cart" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
            <TextInput
              style={[styles.input, { backgroundColor: isDarkMode ? '#4A5568' : '#FFFFFF', color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}
              placeholder="Total Orders"
              placeholderTextColor={isDarkMode ? '#A0AEC0' : '#6B7280'}
              keyboardType="number-pad"
              value={totalOrders}
              onChangeText={setTotalOrders}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={[styles.submitButton, { backgroundColor: isDarkMode ? '#1E40AF' : '#007bff' }]} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Update Supplier</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
   
  },
  formContainer: {
    padding: 8,
  borderRadius:8
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 10,
    paddingHorizontal: 8,
  },
  submitButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 8,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  imagePickerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  imagePickerButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  scrollViewContent: {
    paddingBottom: 24,
  },
});

export default EditSupplier;

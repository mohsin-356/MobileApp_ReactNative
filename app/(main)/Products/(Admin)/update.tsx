import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Use '@expo/vector-icons' for Expo projects
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { useSettings } from "@/themes/SettingsContext"; // Ensure this path is correct

const { width } = Dimensions.get('window');

const AddProducts = () => {
    const { isDarkMode } = useSettings();
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [sku, setSku] = useState('');
    const [image, setImage] = useState(null);
    const [brand, setBrand] = useState('MEFCO'); // Default value
    const [weight, setWeight] = useState('');
    const [dimensions, setDimensions] = useState({ length: '', width: '', height: '' });
    const [inProduction, setInProduction] = useState(false);
    const [category, setCategory] = useState('');

    const categories = ['Electronics', 'Clothing', 'Home', 'Books', 'Other'];

    const handleImagePick = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            // setImage(result.assets[0].uri);
        }
    };

    const handleSubmit = () => {
        if (!productName || !description || !price || !stock || !sku || !category) {
            Alert.alert('Error', 'Please fill in all required fields.');
            return;
        }
        console.log('Product Data:', {
            productName,
            description,
            price,
            stock,
            sku,
            image,
            brand,
            weight,
            dimensions,
            inProduction,
            category,
        });
        // Reset fields
        setProductName('');
        setDescription('');
        setPrice('');
        setStock('');
        setSku('');
        setImage(null);
        setWeight('');
        setDimensions({ length: '', width: '', height: '' });
        setInProduction(false);
        setCategory('');
        Alert.alert('Product Added', 'Your product has been successfully added.');
    };

    const styles = createStyles(isDarkMode);

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
            {/* Form Container */}
            <View style={styles.formContainer}>
                {/* Image Picker */}
                <View style={styles.imagePickerContainer}>
                    <TouchableOpacity onPress={handleImagePick} style={styles.imagePickerButton}>
                        {image ? (
                            <Image source={{ uri: image }} style={styles.imagePreview} />
                        ) : (
                            <Ionicons name="camera" size={36} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                        )}
                    </TouchableOpacity>
                </View>

                {/* Product Name Input */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="cube" size={24} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                    <TextInput
                        style={[styles.input, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}
                        placeholder="Product Name"
                        placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
                        value={productName}
                        onChangeText={setProductName}
                    />
                </View>

                {/* SKU Input */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="barcode" size={24} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                    <TextInput
                        style={[styles.input, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}
                        placeholder="SKU"
                        placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
                        value={sku}
                        onChangeText={setSku}
                    />
                </View>

                {/* Price Input */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="cash" size={24} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                    <TextInput
                        style={[styles.input, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}
                        placeholder="Price"
                        placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
                        keyboardType="numeric"
                        value={price}
                        onChangeText={setPrice}
                    />
                </View>

                {/* Stock Quantity Input */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="layers" size={24} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                    <TextInput
                        style={[styles.input, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}
                        placeholder="Stock Quantity"
                        placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
                        keyboardType="numeric"
                        value={stock}
                        onChangeText={setStock}
                    />
                </View>

                {/* Weight Input */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="scale" size={24} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                    <TextInput
                        style={[styles.input, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}
                        placeholder="Weight (grams)"
                        placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
                        keyboardType="numeric"
                        value={weight}
                        onChangeText={setWeight}
                    />
                </View>

                {/* Category Picker */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="list" size={24} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                    <View style={[styles.pickerWrapper, { borderColor: isDarkMode ? '#9CA3AF' : '#6B7280' }]}>
                        <Picker
                            selectedValue={category}
                            onValueChange={(itemValue) => setCategory(itemValue)}
                            style={[styles.picker, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}
                            dropdownIconColor={isDarkMode ? '#FFFFFF' : '#000000'}
                        >
                            <Picker.Item label="Select Category" value="" />
                            {categories.map((cat) => (
                                <Picker.Item key={cat} label={cat} value={cat} />
                            ))}
                        </Picker>
                    </View>
                </View>

                {/* Description Input */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="document-text" size={24} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                    <TextInput
                        style={[
                            styles.input,
                            styles.multilineInput,
                            { color: isDarkMode ? '#FFFFFF' : '#000000', textAlignVertical: 'top' }
                        ]}
                        placeholder="Description"
                        placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
                        multiline
                        numberOfLines={4}
                        value={description}
                        onChangeText={setDescription}
                    />
                </View>

                {/* Dimensions Input */}
                <Text style={[styles.label, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>Dimensions (cm):</Text>
                <View style={styles.dimensionInputs}>
                    <TextInput
                        style={[
                            styles.dimensionInput,
                            { backgroundColor: isDarkMode ? '#374151' : '#E5E7EB', color: isDarkMode ? '#FFFFFF' : '#000000' }
                        ]}
                        placeholder="Length"
                        placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
                        keyboardType="numeric"
                        value={dimensions.length}
                        onChangeText={(text) => setDimensions({ ...dimensions, length: text })}
                    />
                    <TextInput
                        style={[
                            styles.dimensionInput,
                            { backgroundColor: isDarkMode ? '#374151' : '#E5E7EB', color: isDarkMode ? '#FFFFFF' : '#000000' }
                        ]}
                        placeholder="Width"
                        placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
                        keyboardType="numeric"
                        value={dimensions.width}
                        onChangeText={(text) => setDimensions({ ...dimensions, width: text })}
                    />
                    <TextInput
                        style={[
                            styles.dimensionInput,
                            { backgroundColor: isDarkMode ? '#374151' : '#E5E7EB', color: isDarkMode ? '#FFFFFF' : '#000000' }
                        ]}
                        placeholder="Height"
                        placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
                        keyboardType="numeric"
                        value={dimensions.height}
                        onChangeText={(text) => setDimensions({ ...dimensions, height: text })}
                    />
                </View>

                {/* In Production Toggle */}
                <View style={styles.inputWrapper}>
                    <Ionicons name="construct" size={24} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setInProduction(!inProduction)}
                    >
                        <View
                            style={[
                                styles.checkbox,
                                inProduction && styles.checkboxChecked,
                                { borderColor: isDarkMode ? '#9CA3AF' : '#000000', backgroundColor: inProduction ? (isDarkMode ? '#10b981' : '#10b981') : '#fff' }
                            ]}
                        />
                        <Text style={[styles.checkboxLabel, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>
                            {inProduction ? 'In Production' : 'Not In Production'}
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Submit Button */}
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Add Product</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const createStyles = (isDarkMode:any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            padding: 10,
            backgroundColor: isDarkMode ? '#1F2937' : '#F3F4F6',
        },
        scrollViewContent: {
            paddingBottom: 24,
        },
        formContainer: {
            borderRadius: 8,
            padding: 10,
            marginTop: 15,
            backgroundColor: isDarkMode ? '#374151' : '#FFFFFF',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: isDarkMode ? 0.3 : 0.1,
            shadowRadius: 4,
            elevation: 5,
        },
        imagePickerContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16,
        },
        imagePickerButton: {
            width: 100,
            height: 100,
            borderRadius: 50, // Circular shape
            borderWidth: 1,
            borderColor: isDarkMode ? '#9CA3AF' : '#000000',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isDarkMode ? '#4B5563' : '#D1D5DB',
        },
        imagePreview: {
            width: 100,
            height: 100,
            borderRadius: 50, // Circular shape for preview
            resizeMode: 'cover',
        },
        inputWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
        },
        input: {
            flex: 1,
            height: 40,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: isDarkMode ? '#9CA3AF' : '#6B7280',
            borderRadius: 8,
            marginLeft: 10,
            backgroundColor: isDarkMode ? '#374151' : '#E5E7EB',
        },
        multilineInput: {
            minHeight: 60,
            textAlignVertical: 'top',
            paddingVertical: 10,
        },
        pickerWrapper: {
            flex: 1,
            justifyContent: 'center',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginLeft: 10,
            paddingVertical: 4,
            backgroundColor: isDarkMode ? '#374151' : '#E5E7EB',
        },
        picker: {
            height: 30,
            color: isDarkMode ? '#FFFFFF' : '#000000',
        },
        submitButton: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            borderRadius: 8,
            backgroundColor: isDarkMode ? '#10b981' : '#059669',
            marginTop: 20,
        },
        submitButtonText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#FFFFFF',
        },
        label: {
            fontWeight: 'bold',
            marginBottom: 4,
            color: isDarkMode ? '#FFFFFF' : '#000000',
        },
        dimensionInputs: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 4,
        },
        dimensionInput: {
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginHorizontal: 5,
            backgroundColor: isDarkMode ? '#374151' : '#E5E7EB',
            color: isDarkMode ? '#FFFFFF' : '#000000',
        },
        checkboxContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            padding: 12,
        },
        checkbox: {
            width: 18,
            height: 18,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: '#000000',
            backgroundColor: '#fff',
            marginRight: 10,
        },
        checkboxChecked: {
            borderColor: "#10b981",
            backgroundColor: '#10b981',
        },
        checkboxLabel: {
            fontSize: 14,
        },
    });

export default AddProducts;
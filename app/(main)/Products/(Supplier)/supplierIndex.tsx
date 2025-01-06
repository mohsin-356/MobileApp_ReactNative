import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    SafeAreaView,
    Dimensions
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useSettings } from '@/themes/SettingsContext';  // Importing the hook

// Screen dimensions
const { width, height } = Dimensions.get('window');

// Sample product data
const PRODUCT_DATA = [
    {
        id: '1',
        name: 'Organic Apples',
        price: 50,
        image: `https://picsum.photos/100?random=1`,
        available: 100,
        category: 'Fruits'
    },
    {
        id: '2',
        name: 'Whole Wheat Flour',
        price: 75,
        image: `https://picsum.photos/100?random=2`,
        available: 200,
        category: 'Grains'
    },
    {
        id: '3',
        name: 'Fresh Milk',
        price: 40,
        image: `https://picsum.photos/100?random=3`,
        available: 150,
        category: 'Dairy'
    },
    // You can dynamically generate more products
];

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    available: number;
    category: string;
}

interface ProductCardProps {
    product: Product;
    onSelect: (product: Product) => void;
    isSelected: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, isSelected }) => (
    <TouchableOpacity
        style={[styles.productCard, isSelected && styles.selectedProductCard]}
        onPress={() => onSelect(product)}
    >
        {isSelected && (
            <View style={styles.selectedBadge}>
                <Ionicons name="checkmark-circle" size={26} color="#3753ee" />
            </View>
        )}
        <Image source={{ uri: product.image }} style={styles.productImage} blurRadius={isSelected ? 5 : 0} />
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.productOverlay}>
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productCategory}>{product.category}</Text>
                <View style={styles.productMetadata}>
                    <Text style={styles.productPrice}>Rs{product.price}</Text>
                    <Text style={styles.productAvailable}>{product.available} in stock</Text>
                </View>
            </View>
        </LinearGradient>
    </TouchableOpacity>
);

export default function ProductSelectionScreen() {
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [numColumns, setNumColumns] = useState(2);  // Initialize numColumns with 2
    const router = useRouter();
    const { isDarkMode } = useSettings();  // Get the dark mode state

    const toggleProductSelection = (product: Product) => {
        setSelectedProducts(current =>
            current.find(p => p.id === product.id)
                ? current.filter(p => p.id !== product.id)
                : [...current, product]
        );
    };

    const proceedToOrder = () => {
        router.push("./Cart");
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#1F2937' : '#F3F4F6' }]}>
            <LinearGradient colors={['#2C3E50', '#3498DB']} style={styles.headerGradient}>
                <View style={styles.headerContent}>
                    <Text style={styles.screenTitle}>Select Products</Text>
                    <Text style={styles.headerSubtitle}>{selectedProducts.length} Products Selected</Text>
                </View>
            </LinearGradient>

            <FlatList
                key={numColumns}  // Add key prop to force re-render when numColumns changes
                data={PRODUCT_DATA}
                renderItem={({ item }) => (
                    <ProductCard
                        product={item}
                        onSelect={toggleProductSelection}
                        isSelected={selectedProducts.some(p => p.id === item.id)}
                    />
                )}
                keyExtractor={item => item.id}
                numColumns={numColumns}  // Dynamic number of columns
                columnWrapperStyle={styles.productListColumns}
                contentContainerStyle={styles.productList}
            />

            {selectedProducts.length > 0 && (
                <TouchableOpacity style={styles.orderButton} onPress={proceedToOrder}>
                    <LinearGradient colors={['#4CAF50', '#45A054']} style={styles.orderButtonGradient}>
                        <Text style={styles.orderButtonText}>Proceed to Order</Text>
                        <Ionicons name="arrow-forward" size={24} color="white" style={styles.orderButtonIcon} />
                    </LinearGradient>
                </TouchableOpacity>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    headerGradient: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 15
    },
    headerContent: { alignItems: 'center' },
    screenTitle: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 5 },
    headerSubtitle: { color: 'rgba(255,255,255,0.7)', fontSize: 16 },
    productList: { paddingHorizontal: 10, paddingBottom: 80 },
    productListColumns: { justifyContent: 'space-between' },
    productCard: { width: width * 0.45, height: height * 0.3, borderRadius: 20, marginBottom: 15, overflow: 'hidden', elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 },
    selectedProductCard: { borderWidth: 2, borderColor: '#7e90f3' },
    selectedBadge: { position: 'absolute', top: 10, right: 10, zIndex: 10 },
    productImage: { width: '100%', height: '100%', position: 'absolute' },
    productOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 10 },
    productDetails: { alignItems: 'flex-start' },
    productName: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 5 },
    productCategory: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, marginBottom: 5, color: 'white', fontSize: 12 },
    productMetadata: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
    productPrice: { fontSize: 16, fontWeight: 'bold', color: '#4CAF50' },
    productAvailable: { fontSize: 14, color: 'white' },
    orderButton: { position: 'absolute', bottom: 20, left: 20, right: 20, borderRadius: 15, elevation: 5 },
    orderButtonGradient: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, borderRadius: 15 },
    orderButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold', marginRight: 10 },
    orderButtonIcon: { marginLeft: 5 }
});

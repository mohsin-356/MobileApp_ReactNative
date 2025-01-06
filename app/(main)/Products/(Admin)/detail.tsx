import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useSettings } from "@/themes/SettingsContext";

const { width } = Dimensions.get('window');

const ProductDetail = () => {
    const { isDarkMode } = useSettings();
    const product = {
        name: "Elegant Smartwatch Pro",
        description: "Experience cutting-edge technology with our premium smartwatch. Sleek design meets advanced functionality.",
        price: "Rs299",
        salePrice: "Rs249",
        stock_quantity: "20 units left",
        sku: "SW-PRO-100",
        image: "https://picsum.photos/800",
        brand: "TechNova",
        weight: "2 kg",
        dimensions: {
            length: 30,
            width: 20,
            height: 10,
        },
        in_production: true,
    };

    const router = useRouter();

    const styles = createStyles(isDarkMode);

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={isDarkMode ? ['#111827', '#1F2937'] : ['#f3f4f7', '#dcdcdf']}
                style={styles.gradientBackground}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollContainer}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: product.image }}
                        style={styles.productImage}
                    />
                </View>

                <BlurView intensity={130} style={styles.detailsContainer}>
                    <Text style={styles.productName}>{product.name}</Text>

                    <View style={styles.priceContainer}>
                        <Text style={styles.productPrice}>{product.price}</Text>
                        {product.salePrice && (
                            <Text style={styles.productSalePrice}>{product.salePrice}</Text>
                        )}
                    </View>

                    <Text style={styles.productDescription}>{product.description}</Text>

                    <View style={styles.detailGrid}>
                        <View style={styles.detailItem}>
                            <Ionicons name="cube-outline" size={20} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                            <Text style={styles.detailText}>Stock: {product.stock_quantity}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Ionicons name="barcode-outline" size={20} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                            <Text style={styles.detailText}>SKU: {product.sku}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Ionicons name="business-outline" size={20} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                            <Text style={styles.detailText}>Brand: {product.brand}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Ionicons name="scale-outline" size={20} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                            <Text style={styles.detailText}>Weight: {product.weight}</Text>
                        </View>
                    </View>

                    <View style={styles.dimensionsContainer}>
                        <Text style={styles.dimensionsTitle}>Product Dimensions</Text>
                        <Text style={styles.dimensionsText}>
                            {product.dimensions.length} x {product.dimensions.width} x {product.dimensions.height} cm
                        </Text>
                    </View>

                    <View style={styles.productionStatus}>
                        <Ionicons
                            name={product.in_production ? "checkmark-circle" : "close-circle"}
                            size={24}
                            color={product.in_production ? "#10b981" : "#ef4444"}
                        />
                        <Text style={[
                            styles.productionStatusText,
                            { color: product.in_production ? "#10b981" : "#ef4444" }
                        ]}>
                            {product.in_production ? "Currently in Production" : "Not in Production"}
                        </Text>
                    </View>
                </BlurView>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push('/Products/(Admin)/update')}
                >
                    <LinearGradient
                        colors={['#10b981', '#059669']}
                        style={styles.buttonGradient}
                    >
                        <Ionicons name="create-outline" size={24} color="white" />
                        <Text style={styles.buttonText}>Edit Product</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => alert("Delete Product")}
                >
                    <LinearGradient
                        colors={['#ef4444', '#dc2626']}
                        style={styles.buttonGradient}
                    >
                        <Ionicons name="trash-outline" size={24} color="white" />
                        <Text style={styles.buttonText}>Delete Product</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const createStyles = (isDarkMode:any) =>
    StyleSheet.create({
        container: { flex: 1, backgroundColor: isDarkMode ? '#1F2937' : '#F3F4F6' },
        gradientBackground: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 },
        scrollContainer: { flex: 1 },
        imageContainer: { width: width, height: 300, alignItems: 'center', justifyContent: 'center' },
        productImage: { width: width - 30, height: 260, borderRadius: 20, resizeMode: "cover" },
        detailsContainer: { borderRadius: 30, padding: 15, margin: 12, marginTop: -70 },
        productName: { fontSize: 28, fontWeight: '800', color: isDarkMode ? '#FFFFFF' : '#484848', marginBottom: 10, textAlign: 'center' },
        priceContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
        productPrice: { fontSize: 22, fontWeight: '600', color: '#10b981', marginRight: 10 },
        productSalePrice: { fontSize: 18, fontWeight: '400', color: '#ef4444', textDecorationLine: 'line-through' },
        productDescription: { fontSize: 16, color: isDarkMode ? '#D1D5DB' : '#000000', textAlign: 'center', marginBottom: 20, lineHeight: 24 },
        detailGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 },
        detailItem: { flexDirection: 'row', alignItems: 'center', width: '45%', marginBottom: 10 },
        detailText: { marginLeft: 10, color: isDarkMode ? '#FFFFFF' : '#000000', fontSize: 15 },
        dimensionsContainer: { backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', borderRadius: 15, padding: 15, marginBottom: 20 },
        dimensionsTitle: { fontSize: 16, fontWeight: '600', color: isDarkMode ? '#FFFFFF' : '#000000', marginBottom: 5 },
        dimensionsText: { fontSize: 15, color: isDarkMode ? '#FFFFFF' : '#000000' },
        productionStatus: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 },
        productionStatusText: { marginLeft: 10, fontSize: 16, fontWeight: '600' },
        buttonContainer: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 15 },
        button: { width: '45%', borderRadius: 15 },
        buttonGradient: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 12 },
        buttonText: { marginLeft: 10, fontSize: 16, color: 'white', fontWeight: '600' },
    });

export default ProductDetail;

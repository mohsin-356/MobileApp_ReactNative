import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const ProductDetail = () => {
    // Static product details
    const product = {
        name: "Sample Product",
        description: "This is a sample product description.",
        price: "$100",
        salePrice: "$80",
        stock_quantity: "20 units left",
        sku: "SP100",
        image: "https://picsum.photos/800", // Example image URL
        brand: "MEFCO",
        weight: "2 kg",
        dimensions: {
            length: 30,
            width: 20,
            height: 10,
        },
        in_production: true,
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>Price: {product.price}</Text>
                {product.salePrice && <Text style={styles.productSalePrice}>Sale Price: {product.salePrice}</Text>}
                <Text style={styles.productDescription}>Description: {product.description}</Text>
                <Text style={styles.productStock}>Stock: {product.stock_quantity}</Text>
                <Text style={styles.productSKU}>SKU: {product.sku}</Text>
                <Text style={styles.productBrand}>Brand: {product.brand}</Text>
                <Text style={styles.productWeight}>Weight: {product.weight}</Text>
                <Text style={styles.productDimensions}>
                    Dimensions: {product.dimensions.length} x {product.dimensions.width} x {product.dimensions.height} cm
                </Text>
                <Text style={styles.productProduction}>
                    {product.in_production ? "In Production" : "Not In Production"}
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    productImage: {
        width: "100%",
        height: 300, // Adjust height as needed
        resizeMode: "cover", // Ensures the image fills the width and maintains aspect ratio
    },
    content: {
        padding: 16,
    },
    productName: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#000000",
    },
    productPrice: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 4,
        color: "#000000",
    },
    productSalePrice: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 4,
        color: "#FF0000",
    },
    productDescription: {
        fontSize: 16,
        marginBottom: 4,
        color: "#666666",
    },
    productStock: {
        fontSize: 16,
        marginBottom: 4,
        color: "#666666",
    },
    productSKU: {
        fontSize: 16,
        marginBottom: 4,
        color: "#666666",
    },
    productBrand: {
        fontSize: 16,
        marginBottom: 4,
        color: "#666666",
    },
    productWeight: {
        fontSize: 16,
        marginBottom: 4,
        color: "#666666",
    },
    productDimensions: {
        fontSize: 16,
        marginBottom: 4,
        color: "#666666",
    },
    productProduction: {
        fontSize: 16,
        marginTop: 8,
        fontWeight: "bold",
        color: "#000000",
    },
});

export default ProductDetail;

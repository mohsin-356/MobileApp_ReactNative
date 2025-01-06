import React, { useState, useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    TextInput,
    Modal,
    Platform,
    Animated,
    StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { useSettings } from "@/themes/SettingsContext";

const ProductsPage = () => {
    const router = useRouter();
    const { isDarkMode } = useSettings();
    const [searchQuery, setSearchQuery] = useState("");
    const [menuVisible, setMenuVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const products = [
        {
            id: 1,
            name: "Premium Gadget",
            price: "100",
            SKU: "7",
            image: "https://via.placeholder.com/50",
            status: "In Stock",
            description: "High-end tech marvel with cutting-edge features",
        },
       
        {
            id: 3,
            name: "Elite Accessory",
            price: "150",
            image: "https://via.placeholder.com/50",
            status: "Out of Stock",
            SKU: "7",
            description: "Sophisticated accessory designed for discerning users",
        },
        {
            id: 4,
            name: "Elite Accessory",
            price: "150",
            image: "https://via.placeholder.com/50",
            status: "Out of Stock",
            SKU: "7",
            description: "Sophisticated accessory designed for discerning users",
        },
        {
            id: 5,
            name: "Elite Accessory",
            price: "150",
            image: "https://via.placeholder.com/50",
            status: "Out of Stock",
            SKU: "7",
            description: "Sophisticated accessory designed for discerning users",
        },
    ];

    const handleSearch = (text: string) => {
        setSearchQuery(text);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const openMenu = (product: any) => {
        setSelectedProduct(product);
        setMenuVisible(true);
    };

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true,
        }).start();
    };

    const renderProductCard = ({ item }: { item: any }) => (
        <Animated.View
            style={[
                styles.card,
                {
                    transform: [{ scale: scaleAnim }],
                    backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF",
                },
            ]}
        >
            <TouchableOpacity
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                activeOpacity={0.8}
            >
                <View style={styles.cardContent}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.productImage}
                        blurRadius={Platform.OS === "ios" ? 1 : 0}
                    />
                    <View style={styles.productDetails}>
                        <Text
                            style={[
                                styles.productName,
                                { color: isDarkMode ? "#FFFFFF" : "#1F2937" },
                            ]}
                            numberOfLines={1}
                        >
                            {item.name}
                        </Text>
                        <View style={styles.priceRow}>
                            <Text
                                style={[
                                    styles.priceText,
                                    { color: isDarkMode ? "#D1FAE5" : "#10b981" },
                                ]}
                            >
                                Rs {item.price}
                            </Text>
                            <Text
                                style={[
                                    styles.skuText,
                                    { color: isDarkMode ? "#9CA3AF" : "#6B7280" },
                                ]}
                            >
                                SKU: {item.SKU}
                            </Text>
                        </View>
                        <View
                            style={[
                                styles.statusBadge,
                                item.status === "In Stock"
                                    ? styles.inStockBadge
                                    : styles.outOfStockBadge,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.statusText,
                                    item.status === "In Stock"
                                        ? styles.inStockText
                                        : styles.outOfStockText,
                                ]}
                            >
                                {item.status}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => openMenu(item)}
                        style={styles.menuTouchable}
                    >
                        <Ionicons
                            name="ellipsis-vertical"
                            size={24}
                            color={isDarkMode ? "#9CA3AF" : "#6B7280"}
                        />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? "#1F2937" : "#F3F4F6" },
            ]}
        >
            <StatusBar
                barStyle={isDarkMode ? "light-content" : "dark-content"}
                translucent
                backgroundColor="transparent"
            />
            {/* Header */}
            <View style={styles.header}>
                <Text
                    style={[
                        styles.headerTitle,
                        { color: isDarkMode ? "#FFFFFF" : "#1F2937" },
                    ]}
                >
                    Product Catalog
                </Text>
                <TouchableOpacity style={styles.headerIcon}>
                    <Ionicons
                        name="filter"
                        size={24}
                        color={isDarkMode ? "#FFFFFF" : "black"}
                    />
                </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <View
                style={[
                    styles.searchContainer,
                    { backgroundColor: isDarkMode ? "#374151" : "#E5E7EB" },
                ]}
            >
                <Ionicons
                    name="search"
                    size={20}
                    color={isDarkMode ? "#D1D5DB" : "#6B7280"}
                    style={styles.searchIcon}
                />
                <TextInput
                    style={[
                        styles.searchInput,
                        { color: isDarkMode ? "#FFFFFF" : "#1F2937" },
                    ]}
                    placeholder="Search Products..."
                    placeholderTextColor={isDarkMode ? "#9CA3AF" : "#6B7280"}
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
                {searchQuery.length > 0 && (
                    <TouchableOpacity onPress={() => setSearchQuery("")}>
                        <Ionicons
                            name="close-circle"
                            size={20}
                            color={isDarkMode ? "#D1D5DB" : "#6B7280"}
                        />
                    </TouchableOpacity>
                )}
            </View>

            {/* Product List */}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={filteredProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderProductCard}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Ionicons
                            name="bag-remove"
                            size={64}
                            color={isDarkMode ? "#374151" : "#E5E7EB"}
                        />
                        <Text
                            style={[
                                styles.emptyText,
                                { color: isDarkMode ? "#FFFFFF" : "#374151" },
                            ]}
                        >
                            No products found!
                        </Text>
                    </View>
                }
                contentContainerStyle={styles.listContainer}
            />
            {/* Add New Product Floating Action Button */}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => router.push('/Products/(Admin)/add')}
            >
                <Ionicons name="add" size={30} color="#ffffff" />
            </TouchableOpacity>

            {/* Product Menu Modal */}
            <Modal
                visible={menuVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setMenuVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <BlurView intensity={80} style={styles.blurOverlay}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setMenuVisible(false)}
                            >
                                <Ionicons name="close" size={24} color="#374151" />
                            </TouchableOpacity>

                            <View style={styles.modalMenu}>
                                <TouchableOpacity
                                    style={styles.modalMenuItem}
                                    onPress={() => {
                                        setMenuVisible(false);
                                        router.push('/Products/(Admin)/detail');
                                    }}
                                >
                                    <Ionicons name="eye-outline" size={20} color="#3b82f6" />
                                    <Text style={styles.modalMenuText}>View Details</Text>
                                </TouchableOpacity>

                                <View style={styles.modalDivider} />

                                <TouchableOpacity
                                    style={styles.modalMenuItem}
                                    onPress={() => {
                                        setMenuVisible(false);
                                        router.push('/Products/(Admin)/update');
                                    }}
                                >
                                    <Ionicons name="create-outline" size={20} color="#10b981" />
                                    <Text style={styles.modalMenuText}>Edit Product</Text>
                                </TouchableOpacity>

                                <View style={styles.modalDivider} />

                                <TouchableOpacity
                                    style={styles.modalMenuItem}
                                    onPress={() => {
                                        setMenuVisible(false);
                                        alert("Delete functionality coming soon!");
                                    }}
                                >
                                    <Ionicons name="trash-outline" size={20} color="#ef4444" />
                                    <Text style={styles.modalMenuText}>Delete Product</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </BlurView>
                </View>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 50,
        paddingBottom: 15,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: "800",
    },
    headerIcon: {
        padding: 8,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 16,
        marginHorizontal: 16,
        marginBottom: 16,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    listContainer: {
        paddingBottom: 80,
    },
    card: {
        marginHorizontal: 16,
        marginBottom: 12,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 15,
        marginRight: 15,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: "700",
    },
    priceRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    priceText: {
        fontSize: 13,
        fontWeight: "600",
    },
    skuText: {
        fontSize: 12,
    },
    statusBadge: {
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    inStockBadge: {
        backgroundColor: "rgba(16, 185, 129, 0.15)",
    },
    outOfStockBadge: {
        backgroundColor: "rgba(239, 68, 68, 0.15)",
    },
    statusText: {
        fontSize: 11,
        fontWeight: "700",
    },
    inStockText: {
        color: "#10B981",
    },
    outOfStockText: {
        color: "#EF4444",
    },
    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
    },
    emptyText: {
        fontSize: 18,
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#3b82f6',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 6,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    blurOverlay: {
        position: 'absolute',
        top: 500,
        left: 0,
        right: 0,
        bottom: 0,
    },
    modalContent: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
        paddingBottom: 30,
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
    modalMenu: {
        backgroundColor: 'white',
        borderRadius: 16,
        overflow: 'hidden',
    },
    modalMenuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    modalMenuText: {
        marginLeft: 12,
        fontSize: 16,
        color: '#374151',
    },
    modalDivider: {
        height: 1,
        backgroundColor: '#f3f4f6',
    },
    menuTouchable: {
        padding: 8,
    },
});

export default ProductsPage;

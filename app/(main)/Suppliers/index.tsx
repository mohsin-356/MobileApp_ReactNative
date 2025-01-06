import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { useSettings } from "@/themes/SettingsContext";

const SupplierMainPage = () => {
  const router = useRouter();
  const { isDarkMode } = useSettings(); // Access dark mode settings
  const [searchQuery, setSearchQuery] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const suppliers = [
    {
      id: 2,
      name: "SamiUllah ",
      email: "Sami@mail.com",
      status: "Inactive",
      image: 'https://via.placeholder.com/50',
      updated: "2024-11-20",
    },
    {
      id: 3,
      name: "Mohsin ",
      email: "mohsin@mail.com",
      status: "Active",
      image: 'https://via.placeholder.com/50',
      updated: "2024-11-22",
    },
    {
      id: 4,
      name: "helo ",
      email: "sa@mail.com",
      status: "Inactive",
      image: 'https://via.placeholder.com/50',
      updated: "2024-11-23",
    },
  ];

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supplier.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openMenu = (supplier: any) => {
    setSelectedSupplier(supplier);
    setMenuVisible(true);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#1F2937" : "#F3F4F6" },
      ]}
    >
      <View style={styles.searchContainer}>
        <TextInput
          style={[
            styles.searchInput
          ]}
          placeholder="Search..."
          placeholderTextColor={isDarkMode ? "#9CA3AF" : "#888"}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <Text style={[styles.searchIcon, { color: isDarkMode ? "#9CA3AF" : "#888" }]}>
          🔍
        </Text>
      </View>

      <FlatList
        data={filteredSuppliers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              { backgroundColor: isDarkMode ? "#374151" : "#f9f9f9" },
            ]}
          >
            <View style={styles.row}>
              <Image source={{ uri: item.image }} style={styles.profileImage} />
              <View style={styles.info}>
                <Text
                  style={[
                    styles.name,
                    { color: isDarkMode ? "#FFFFFF" : "#1F2937" },
                  ]}
                >
                  {item.name}
                </Text>
                <Text
                  style={[
                    styles.email,
                    { color: isDarkMode ? "#9CA3AF" : "#666" },
                  ]}
                >
                  {item.email}
                </Text>
                <View
                  style={[
                    styles.statusContainer,
                    item.status === "Active"
                      ? { backgroundColor: "#e0f7df" }
                      : { backgroundColor: "#fde0e0" },
                  ]}
                >
                  <Text
                    style={[
                      styles.statusText,
                      item.status === "Active"
                        ? { color: "#34a853" }
                        : { color: "#d32f2f" },
                    ]}
                  >
                    {item.status}
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => openMenu(item)} style={styles.dotsIcon}>
                <Ionicons name="ellipsis-vertical" size={24} color={isDarkMode ? '#FFFFFF' : '#1F2937'} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text
            style={[
              styles.emptyText,
              { color: isDarkMode ? "#9CA3AF" : "#666" },
            ]}
          >
            No suppliers found!
          </Text>
        }
      />

      <TouchableOpacity
        style={[
          styles.fab,
          { backgroundColor: isDarkMode ? "#4F46E5" : "#3b82f6" },
        ]}
        onPress={() => router.push("./Suppliers/add")}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
      <Modal
        visible={menuVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setMenuVisible(false)}
        >
          <View
            style={[
              styles.menu,
              { backgroundColor: isDarkMode ? "#374151" : "#fff" },
            ]}
          >
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                router.push(`./Suppliers/supplierView`);
              }}
            >
              <Ionicons
                name="eye-outline"
                size={20}
                color={isDarkMode ? "#FFFFFF" : "blue"}
              />
              <Text
                style={[
                  styles.menuText,
                  { color: isDarkMode ? "#FFFFFF" : "#333" },
                ]}
              >
                View Details
              </Text>
            </TouchableOpacity>
            <View style={styles.menuDivider} />
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                router.push(`./Suppliers/update`);
              }}
            >
              <Ionicons
                name="create-outline"
                size={20}
                color={isDarkMode ? "#FFFFFF" : "green"}
              />
              <Text
                style={[
                  styles.menuText,
                  { color: isDarkMode ? "#FFFFFF" : "#333" },
                ]}
              >
                Edit Supplier
              </Text>
            </TouchableOpacity>
            <View style={styles.menuDivider} />
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                alert("Delete functionality coming soon!");
              }}
            >
              <Ionicons
                name="trash-outline"
                size={20}
                color={isDarkMode ? "#FFFFFF" : "#d32f2f"}
              />
              <Text
                style={[
                  styles.menuText,
                  { color: isDarkMode ? "#FFFFFF" : "#333" },
                ]}
              >
                Delete Supplier
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
  statusContainer: {
    marginTop: 4,
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignSelf: "flex-start",
  },
  statusText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  menuIcon: {
    fontSize: 24,
    color: "#888",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 16,
    color: "#666",
  },
  fab: {
    backgroundColor: "#3b82f6",
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  fabText: {
    fontSize: 24,
    color: "#fff",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  menu: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 8,
  },
  menuDivider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 8,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchIcon: {
    fontSize: 20,
    color: "#888",
    marginLeft: 8,
  },
  dotsIcon: {
    position: 'absolute',
    right: 10,
  },
});
export default SupplierMainPage;

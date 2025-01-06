import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import themeContext from "@/themes/themeContext";
interface HeaderProps {
    title: string; // Explicit type for the title prop
}
const Header: React.FC<HeaderProps> = ({ title }) => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const appliedTheme = useContext(themeContext);

    // Determine icon color based on theme
    const iconColor = appliedTheme.background === '#433F3F' ? '#FFFFFF' : '#1679FB'; // Dark theme = white, Light theme = blue

    return (
        <View
            style={[
                styles.headerContainer,
                {
                    backgroundColor: appliedTheme.background,
                    borderBottomColor: iconColor,
                },
            ]}
        >
            {!isSearchActive && (
                <Text style={[styles.headerText, { color: appliedTheme.color }]}>
                    {title}
                </Text>
            )}

            {isSearchActive && (
                <TextInput
                    placeholder="Search..."
                    placeholderTextColor={appliedTheme.color}
                    style={[
                        styles.searchInput,
                        {
                            color: appliedTheme.color,
                            borderColor: iconColor,
                        },
                    ]}
                    autoFocus={true}
                />
            )}

            {/* Search Icon */}
            <TouchableOpacity
                onPress={() => setIsSearchActive(!isSearchActive)}
                style={styles.icon}
            >
                <Ionicons name="search" size={22} color={iconColor} />
            </TouchableOpacity>

            {/* Add Button */}
            <TouchableOpacity
                style={[styles.iconButton, { borderColor: iconColor }]}
                onPress={() => {
                    alert('Add functionality to be implemented.');
                }}
            >
                <Ionicons name="add" size={20} color={iconColor} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        justifyContent: "space-between",
        borderBottomWidth: 1,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        flex: 1, // Takes up space when search is not active
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        padding: 3,
        marginRight: 10, // Spacing between the input and search icon
    },
    icon: {
        marginRight: 5,
    },
    iconButton: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 2,
    },
});

export default Header;

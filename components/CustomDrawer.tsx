import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSettings } from '@/themes/SettingsContext';
const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => { // Get the current theme from context
    const { isDarkMode } = useSettings();
    return (
        <DrawerContentScrollView {...props}>
            <View style={[styles.profileContainer, { backgroundColor: isDarkMode ? '#1F2937' : '#F3F4F6' }]}>
                <Image
                    source={require('../assets/images/sami.jpg')}
                    style={[styles.profileImage, { borderColor: isDarkMode ? '#FFFFFF' : '#1F2937' }]} // Apply border color based on theme
                />
                <Text style={[styles.userName, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}>Mohsinn</Text>
                <Text style={[styles.userEmail, { color: isDarkMode ? '#FFFFFF' : '#1F2937' }]}>mohsin@email.com</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
        borderWidth: 2, 
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 14,
        color: 'gray',
    },
});

export default CustomDrawer;

import React from "react";
import {StyleSheet,ScrollView } from "react-native";
import OrderCard from "@/components/OrdersComponent/cardOrder";
import { useSettings } from "@/themes/SettingsContext";

const Index = () => {
    const { isDarkMode, setIsDarkMode }=useSettings();

    return (
        <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? '#374151' : '#F3F4F6' }]} 
        
        showsVerticalScrollIndicator={false}>
            <OrderCard/>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10
    },
});

export default Index;

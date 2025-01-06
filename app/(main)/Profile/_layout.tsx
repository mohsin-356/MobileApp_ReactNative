import React from "react";
import { Stack } from "expo-router";
const Layout = () => {

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="Detail" />
            <Stack.Screen name="Edit" />
            <Stack.Screen name="Delete" />

           
        </Stack>
    );
}
export default Layout;
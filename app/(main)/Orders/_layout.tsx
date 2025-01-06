import React from "react";
import { Stack } from "expo-router";
const Layout = () => {
    return (
       
        <Stack
            screenOptions={{ headerShown: false }}>
               <Stack.Screen name="Index" />
                <Stack.Screen name="Invoice" />
                <Stack.Screen name="Edit" />
        </Stack>     
    );
};

export default Layout;

import React from "react";
import { Stack } from "expo-router";
const Layout=()=>{

     return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="addUsers" />
            <Stack.Screen name="updateUser" />
             <Stack.Screen name="UserProfile" />
        </Stack>
    );
}
export default Layout;
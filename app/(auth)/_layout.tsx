// app/(auth)/_layout.tsx
import React from "react";
import { Stack } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";

export default function AuthLayout() {
  const { isLoggedIn } = useAuth();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Login" 
        options={{ 
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="SignUp" 
        options={{ 
          headerShown: false,
          presentation: 'modal'
        }} 
      />
      <Stack.Screen 
        name="forgotpassword" 
        options={{ 
          headerShown: false,
          presentation: 'modal'
        }} 
      />
    </Stack>
  );
}


// app/_layout.tsx
// app/_layout.tsx
import React, { useEffect, useState } from "react";
import { Slot, useRouter } from "expo-router";
import SplashScreen from "./splash";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

function AppContent() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect to login after splash screen
      router.replace("/(auth)/Login");
    } else {
      router.replace("/(main)/");
    }
  }, [isLoggedIn]);

  return <Slot />;
}

export default function RootLayout() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);

    return () => clearTimeout(splashTimer);
  }, []);

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
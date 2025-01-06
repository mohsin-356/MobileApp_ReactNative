import React, { useEffect } from "react";
import { useRouter,Stack } from "expo-router";

type UserRole = "Admin" | "Supplier";

const Layout = () => {
  const router = useRouter();
  const userRole: UserRole = "Admin" as UserRole;  

  useEffect(() => {
    if (userRole === "Admin") {
      router.replace("/Products/(Admin)");  
    } else if (userRole === "Supplier") {
      router.replace("/Products/(Supplier)/supplierIndex");  
    }
  }, [userRole, router]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      
    </Stack>
  ); 
};

export default Layout;

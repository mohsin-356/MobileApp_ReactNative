import { Stack } from "expo-router";

const SupplierLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="supplierIndex" />
            <Stack.Screen name="orderConfirm" />
            <Stack.Screen name="Cart" />
            <Stack.Screen name="invoice" />



        </Stack>
    );
};

export default SupplierLayout;

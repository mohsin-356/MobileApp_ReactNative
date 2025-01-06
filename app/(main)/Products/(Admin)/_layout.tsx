import { Stack } from "expo-router";

const AdminLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="detail" />
            <Stack.Screen name="add" />


            
        </Stack>
    );
};

export default AdminLayout;

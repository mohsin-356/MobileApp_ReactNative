import { Stack } from 'expo-router';

const Layout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="add" />
            <Stack.Screen name="update" />
            <Stack.Screen name="supplierView" />
        </Stack>
    );
};

export default Layout;

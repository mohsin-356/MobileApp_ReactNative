import React, { useContext } from "react";
import { Stack } from "expo-router";
import themeContext from '@/themes/themeContext';

const Layout = () => {
    const appliedTheme = useContext(themeContext); // Get the current theme

    return <Stack screenOptions={{ headerStyle: { backgroundColor: appliedTheme.background }, headerTintColor: appliedTheme.color }} />;
};

export default Layout;

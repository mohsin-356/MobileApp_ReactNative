import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import themeContext from '@/themes/themeContext';

const EmployeeList = () => {
    const router = useRouter();
    const appliedTheme = useContext(themeContext);
    const isDarkMode = appliedTheme.theme === 'dark';

    const AddPage = () => {
        router.push('./addWorkers');
    };

    const employees = [
        { id: '1', name: 'John Doe', subtitle: 'Software Engineer', color: '#6A5ACD' },
        { id: '2', name: 'Jane Smith', subtitle: 'Project Manager', color: '#20B2AA' },
        { id: '3', name: 'Mike Johnson', subtitle: 'Designer', color: '#FF6347' },
        { id: '4', name: 'Alice Brown', subtitle: 'Analyst', color: '#4682B4' },
    ];

    const handleEmployeePress = () => {
        router.push(`./EmployeeDetail`);
    };

    return (
        <View style={[styles.container, isDarkMode && { backgroundColor: appliedTheme.background }]}>
            <Text style={styles.headerTitle}>Employee Directory</Text>
            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
            >
                {employees.map((employee, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.employeeCard,
                            {
                                borderLeftColor: employee.color,
                                shadowColor: employee.color
                            },
                            isDarkMode && {
                                backgroundColor: appliedTheme.background,
                                borderColor: appliedTheme.color,
                                borderWidth: 1,
                            },
                        ]}
                        onPress={() => handleEmployeePress()}
                    >
                        {/* Left Section */}
                        <View style={styles.leftSection}>
                            <View
                                style={[
                                    styles.avatar,
                                    {
                                        backgroundColor: `${employee.color}20`,
                                        borderColor: employee.color
                                    },
                                    isDarkMode && { backgroundColor: appliedTheme.color }
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.avatarText,
                                        { color: employee.color },
                                        isDarkMode && { color: appliedTheme.background }
                                    ]}
                                >
                                    {employee.name.charAt(0).toUpperCase()}
                                </Text>
                            </View>
                            <View style={styles.employeeInfo}>
                                <Text style={[
                                    styles.nameText,
                                    isDarkMode && { color: appliedTheme.color }
                                ]}>
                                    {employee.name}
                                </Text>
                                <Text style={[
                                    styles.subtitleText,
                                    { color: employee.color },
                                    isDarkMode && { color: appliedTheme.color }
                                ]}>
                                    {employee.subtitle}
                                </Text>
                            </View>
                        </View>

                        {/* Right Section with Arrow Icon */}
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={24}
                            color={employee.color}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Floating Action Button */}
            <TouchableOpacity
                style={[
                    styles.fab,
                    isDarkMode && { backgroundColor: appliedTheme.color }
                ]}
                onPress={AddPage}
            >
                <MaterialCommunityIcons
                    name="plus"
                    size={24}
                    color={isDarkMode ? appliedTheme.background : '#FFFFFF'}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#2C3E50',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    scrollViewContent: {
        paddingBottom: 100,
        paddingHorizontal: 16,
    },
    employeeCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 12,
        borderRadius: 12,
        borderLeftWidth: 5,
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        borderWidth: 1.5,
    },
    avatarText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    employeeInfo: {
        flex: 1,
    },
    nameText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#2C3E50',
        marginBottom: 4,
    },
    subtitleText: {
        fontSize: 14,
        fontWeight: '500',
    },
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#6A5ACD',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#6A5ACD',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
});

export default EmployeeList;
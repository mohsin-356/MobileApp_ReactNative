import React, { useContext, useState } from 'react';
import Attenadce from './attendaceModal';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Modal,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import themeContext from '@/themes/themeContext';

const EmployeeList = () => {
    const appliedTheme = useContext(themeContext);
    const isDarkMode = appliedTheme.theme === 'dark';
    const router = useRouter();
    const employees = [
        { id: '1', name: 'Mohsin Hassan', subtitle: 'Software Engineer', status: 'P' },
        { id: '2', name: 'Ali Hassan', subtitle: 'Project Manager', status: 'A' },
        { id: '3', name: 'SamiUllah', subtitle: 'Designer', status: 'H-D' },
        { id: '4', name: 'Mubeen', subtitle: 'Analyst', status: 'H' },
    ];

    const [isSelecting, setIsSelecting] = useState(false);
    const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleToggleSelection = () => {
        setIsSelecting(!isSelecting);
        if (!isSelecting) setSelectedEmployees([]);
    };

    const handleSelectEmployee = (id: string) => {
        setSelectedEmployees((prev) =>
            prev.includes(id) ? prev.filter((empId) => empId !== id) : [...prev, id]
        );
    };

    const handleSelectAll = () => {
        if (selectedEmployees.length === employees.length) {
            setSelectedEmployees([]);
        } else {
            setSelectedEmployees(employees.map((emp) => emp.id));
        }
    };

    const MovetoAttendace = () => {
        router.push(`./attendaceScreen`);
    };

    const handleSubmit = () => {
        setIsModalVisible(true);
    };

    const renderEmployeeCard = (employee: typeof employees[number]) => {
        const isSelected = selectedEmployees.includes(employee.id);
        return (
            <TouchableOpacity
                key={employee.id}
                style={[
                    styles.employeeCard,
                    isSelected && styles.selectedCard,
                    isDarkMode && {
                        backgroundColor: isSelected
                            ? 'rgba(96, 165, 250, 0.1)'
                            : appliedTheme.background,
                        borderColor: isSelected ? '#60A5FA' : appliedTheme.color,
                        borderWidth: 1,
                    }
                ]}
                onPress={() => {
                    if (isSelecting) {
                        handleSelectEmployee(employee.id);
                    }
                    if (!isSelecting) {
                        MovetoAttendace();
                    }
                }}
            >
                <View style={styles.leftSection}>
                    <View
                        style={[
                            styles.avatar,
                            isSelected && styles.selectedAvatar,
                            isDarkMode && {
                                backgroundColor: isSelected
                                    ? '#60A5FA'
                                    : appliedTheme.color
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles.avatarText,
                                isDarkMode && {
                                    color: isSelected
                                        ? '#FFFFFF'
                                        : appliedTheme.background
                                },
                            ]}
                        >
                            {employee.name.charAt(0).toUpperCase()}
                        </Text>
                    </View>
                    <View style={styles.employeeInfo}>
                        <Text
                            style={[
                                styles.nameText,
                                isSelected && styles.selectedNameText,
                                isDarkMode && { color: isSelected ? '#60A5FA' : appliedTheme.color },
                            ]}
                        >
                            {employee.name}
                        </Text>
                        <Text
                            style={[
                                styles.subtitleText,
                                isSelected && styles.selectedSubtitleText,
                                isDarkMode && { color: isSelected ? 'rgba(96, 165, 250, 0.7)' : appliedTheme.color },
                            ]}
                        >
                            {employee.subtitle}
                        </Text>
                    </View>
                </View>
                {isSelecting && (
                    <MaterialIcons
                        name={
                            isSelected
                                ? 'radio-button-checked'
                                : 'radio-button-unchecked'
                        }
                        size={24}
                        color={isSelected ? '#60A5FA' : (isDarkMode ? appliedTheme.color : '#CCCCCC')}
                    />
                )}
            </TouchableOpacity>
        );
    };

    return (
        <View
            style={[
                styles.container,
                isDarkMode && { backgroundColor: appliedTheme.background },
            ]}
        >
            <View style={styles.headerContainer}>
                <Text style={[styles.headerTitle, isDarkMode && { color: appliedTheme.color }]}>
                    Employee List
                </Text>
            </View>
            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
            >
                {isSelecting && (
                    <TouchableOpacity
                        style={[
                            styles.selectAllButton,
                            isDarkMode && { borderColor: appliedTheme.color },
                        ]}
                        onPress={handleSelectAll}
                    >
                        <Text
                            style={[
                                styles.selectAllText,
                                isDarkMode && { color: appliedTheme.color },
                            ]}
                        >
                            {selectedEmployees.length === employees.length
                                ? 'Deselect All'
                                : 'Select All'}
                        </Text>
                    </TouchableOpacity>
                )}
                {employees.map(renderEmployeeCard)}
            </ScrollView>
            <View style={styles.bottomActions}>
                <TouchableOpacity
                    style={[
                        styles.multiSelectButton,
                        isDarkMode && { backgroundColor: appliedTheme.color },
                    ]}
                    onPress={handleToggleSelection}
                >
                    <MaterialIcons
                        name="person"
                        size={24}
                        color={isDarkMode ? appliedTheme.background : '#fff'}
                    />
                    <Text
                        style={[
                            styles.multiSelectText,
                            isDarkMode && { color: appliedTheme.background },
                        ]}
                    >
                        {isSelecting ? 'Cancel' : 'Multi Select'}
                    </Text>
                </TouchableOpacity>
                {isSelecting && (
                    <TouchableOpacity
                        style={[
                            styles.submitButton,
                            selectedEmployees.length === 0 && styles.submitButtonDisabled
                        ]}
                        onPress={handleSubmit}
                        disabled={selectedEmployees.length === 0}
                    >
                        <Text style={styles.submitButtonText}>
                            Continue ({selectedEmployees.length})
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
            <Modal visible={isModalVisible} transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setIsModalVisible(false)}
                        >
                            <MaterialIcons name="close" size={15} color="white" />
                        </TouchableOpacity>
                        <Attenadce />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
    },
    headerContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#FFFFFF',
        shadowColor: '#4A90E2',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E9EF',
        marginBottom: 10
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: '#2C3E50',
        letterSpacing: 0.5,
        
    },
    scrollViewContent: {
        paddingBottom: 16,
        paddingHorizontal: 16,
    },
    employeeCard: {
       
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        padding: 8,
        marginBottom: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'transparent',
        elevation: 4,
        shadowColor: '#4A90E2',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        overflow: 'hidden',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    avatar: {
        width: 65,
        height: 65,
        borderRadius: 20,
        backgroundColor: '#4A90E2',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 18,
        elevation: 3,
        shadowColor: '#4A90E2',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    selectedCard: {
        backgroundColor: '#EBF5FF',
        borderColor: '#4A90E2',
    },
    selectedAvatar: {
        backgroundColor: '#60A5FA',
    },
    avatarText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    employeeInfo: {
        flex: 1,
    },
    nameText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: 4,
    },
    selectedNameText: {
        color: '#60A5FA',
    },
    subtitleText: {
        fontSize: 15,
        color: '#6B7280',
    },
    selectedSubtitleText: {
        color: '#60A5FA',
        opacity: 0.7,
    },
    bottomActions: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        shadowColor: '#4A90E2',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        borderTopWidth: 1,
        borderTopColor: '#E6E9EF',
    },
    multiSelectButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4A90E2',
        padding: 16,
        borderRadius: 16,
        marginBottom: 15,
        elevation: 4,
    },
    multiSelectText: {
        marginLeft: 10,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    selectAllButton: {
        padding: 14,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#60A5FA',
        borderRadius: 12,
        alignItems: 'center',
    },
    selectAllText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#60A5FA'
    },
    submitButton: {
        backgroundColor: '#4A90E2',
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
        elevation: 3,
    },
    submitButtonDisabled: {
        backgroundColor: '#A0A0A0',
        elevation: 0,
    },
    submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        top: 100,
        height: '70%',
        backgroundColor: '#F5F7FA',
        padding: 20,
        alignItems: 'center',
        position: 'relative',
        width: '96%',
        shadowColor: '#4A90E2',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 10,
    },
    closeButton: {
        position: 'absolute',
        top: -30,
        right: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#fff"
    },
});

export default EmployeeList;
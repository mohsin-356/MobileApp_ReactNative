import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AlertTriangle } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const ProfileDeleteScreen = () => {
    const [confirmText, setConfirmText] = useState('');
    const router = useRouter();

    const handleDelete = () => {
        if (confirmText.toLowerCase() === 'delete') {
            // Implement actual delete logic here
            router.push('./index'); // Or appropriate screen after deletion
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.iconContainer}>
                    <AlertTriangle color="#E53E3E" size={64} />
                    <Text style={styles.title}>Delete Profile</Text>
                </View>

                <Text style={styles.warningText}>
                    Are you sure you want to delete this profile? This action cannot be undone.
                </Text>

                <Text style={styles.confirmPrompt}>Type "DELETE" to confirm:</Text>

                <TextInput
                    value={confirmText}
                    onChangeText={setConfirmText}
                    placeholder="Type DELETE here"
                    style={styles.input}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => router.back()}
                    >
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.deleteButton,
                            confirmText.toLowerCase() !== 'delete' && styles.disabledButton,
                        ]}
                        onPress={handleDelete}
                        disabled={confirmText.toLowerCase() !== 'delete'}
                    >
                        <Text style={styles.deleteButtonText}>Confirm Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F7FAFC',
        padding: 16,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
        padding: 16,
    },
    iconContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E53E3E',
        marginTop: 8,
    },
    warningText: {
        textAlign: 'center',
        color: '#4A5568',
        marginBottom: 16,
        fontSize: 16,
    },
    confirmPrompt: {
        textAlign: 'center',
        color: '#718096',
        marginBottom: 8,
        fontSize: 14,
    },
    input: {
        borderWidth: 1,
        borderColor: '#CBD5E0',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        flex: 1,
        marginRight: 8,
        backgroundColor: '#EDF2F7',
        borderRadius: 8,
        alignItems: 'center',
        paddingVertical: 12,
    },
    cancelButtonText: {
        color: '#4A5568',
        fontWeight: 'bold',
        fontSize: 16,
    },
    deleteButton: {
        flex: 1,
        marginLeft: 8,
        backgroundColor: '#E53E3E',
        borderRadius: 8,
        alignItems: 'center',
        paddingVertical: 12,
    },
    deleteButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    disabledButton: {
        backgroundColor: '#FEB2B2',
    },
});

export default ProfileDeleteScreen;

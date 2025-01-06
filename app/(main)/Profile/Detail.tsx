import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useRouter } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

const ProfileDetailScreen = () => {
    const router = useRouter();

    const profile = {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "123-456-7890",
        address: "123 Elm Street",
        dob: "1990-01-01",
        memberSince: "2020-01-01",
        avatar: "https://via.placeholder.com/150",
    };

    const detailSections = [
        { label: 'Full Name', value: profile.name, icon: '👤' },
        { label: 'Email', value: profile.email, icon: '✉️' },
        { label: 'Phone', value: profile.phone, icon: '📞' },
        { label: 'Address', value: profile.address, icon: '🏠' },
        { label: 'Date of Birth', value: profile.dob, icon: '🎂' },
        { label: 'Membership Since', value: profile.memberSince, icon: '🕒' },
    ];

    return (
        <View style={styles.container}>
           
                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.card}>
                        <View style={styles.profileInfo}>
                            <View style={styles.avatarContainer}>
                                <Image
                                    source={{ uri: profile.avatar }}
                                    style={styles.avatar}
                                />
                            </View>
                            <Text style={styles.name}>{profile.name}</Text>
                            <Text style={styles.email}>{profile.email}</Text>
                        </View>

                        {detailSections.map((section, index) => (
                            <View
                                key={index}
                                style={styles.detailSection}
                            >
                                <View style={styles.detailContent}>
                                    <Text style={styles.detailIcon}>{section.icon}</Text>
                                    <View>
                                        <Text style={styles.detailLabel}>{section.label}</Text>
                                        <Text style={styles.detailValue}>{section.value}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}

                        <View style={styles.actionButtons}>
                            <TouchableOpacity
                                style={[styles.button, styles.closeButton]}
                                onPress={() => router.back()}
                            >
                                <Text style={styles.buttonText}>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.editButton]}
                                onPress={() => router.push('./Edit')}
                            >
                                <Text style={styles.buttonText}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
  
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 3,
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 20,
        padding: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 15,
       
    },
    profileInfo: {
        alignItems: 'center',
        marginBottom: 24,
    },
    avatarContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 8,
    },
    avatar: {
        width: 180,
        height: 180,
        borderRadius: 90,
        borderWidth: 5,
        borderColor: 'white',
    },
    name: {
        marginTop: 16,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2D3748',
    },
    email: {
        color: '#718096',
        fontSize: 16,
    },
    detailSection: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
    },
    detailContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    detailIcon: {
        fontSize: 24,
    },
    detailLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#4A5568',
    },
    detailValue: {
        fontSize: 16,
        color: '#1A202C',
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
    },
    button: {
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 14,
        borderRadius: 12,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    closeButton: {
        backgroundColor: '#E2E8F0',
    },
    editButton: {
        backgroundColor: '#4A90E2',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProfileDetailScreen;
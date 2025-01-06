import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Modal,
    StyleSheet
} from 'react-native';
import {
    User,
    Settings,
    LogOut,
    Bell,
    Lock,
    Edit,
    Eye,
    Trash2,
    RefreshCw,
    Activity,
    Globe,
    Sun,
    Moon
} from 'lucide-react-native';
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleDelete = () => {
        console.log('Profile deleted');
        setModalVisible(false);
    };

    const router = useRouter();

    const menuItems = [
        {
            icon: <Eye color="#3B82F6" size={24} />,
            title: 'View Profile',
            onPress: () => router.push('./Profile/Detail')
        },
        {
            icon: <Edit color="#22C55E" size={24} />,
            title: 'Edit Profile',
            onPress: () => router.push('./Profile/Edit')
        },
        {
            icon: <Trash2 color="#EF4444" size={24} />,
            title: 'Delete Profile',
            onPress: () => setModalVisible(true)
        },
    ];

    const settingsOptions = [
        {
            icon: <Lock color="#8B5CF6" size={24} />,
            title: 'Change Password',
            onPress: () => console.log('Change Password')
        },
        {
            icon: <Bell color="#EAB308" size={24} />,
            title: 'Notification Preferences',
            onPress: () => console.log('Notification Preferences')
        }
    ];

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollViewContent}
        >
            <View style={styles.profileCard}>
                {/* Profile Header */}
                <View style={styles.headerContainer}>
                    <View style={styles.headerActions}>
                        <TouchableOpacity
                            style={styles.headerActionButton}
                            onPress={() => console.log('Logout')}
                        >
                            <LogOut color="white" />
                        </TouchableOpacity>
                    </View>

                    <Image
                        source={{ uri: '/api/placeholder/128/128' }}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>Mohsin Khan</Text>
                    <Text style={styles.profileEmail}>mohsin@gmail.com</Text>
                    <View style={styles.roleContainer}>
                        <Text style={styles.roleText}>Admin</Text>
                    </View>
                </View>

                {/* Recent Activities */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionTitleContainer}>
                        <Activity color="#3B82F6" style={styles.sectionIcon} />
                        <Text style={styles.sectionTitle}>Recent Activities</Text>
                    </View>
                    <View style={styles.activitiesContainer}>
                        <View style={styles.activityItem}>
                            <Globe color="#22C55E" style={styles.activityIcon} />
                            <Text style={styles.activityText}>Logged in at 10:00 AM</Text>
                        </View>
                        <View style={styles.activityItem}>
                            <RefreshCw color="#8B5CF6" style={styles.activityIcon} />
                            <Text style={styles.activityText}>Updated profile details on 12th Dec</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.settingsContainer}>
                    <View style={styles.sectionTitleContainer}>
                        <Settings color="#6B7280" style={styles.sectionIcon} />
                        <Text style={styles.sectionTitle}>Profile Info</Text>
                    </View>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={item.onPress}
                            style={styles.menuItem}
                        >
                            {item.icon}
                            <Text style={styles.menuItemText}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Account Settings */}
                <View style={styles.settingsContainer}>
                    <View style={styles.sectionTitleContainer}>
                        <Settings color="#6B7280" style={styles.sectionIcon} />
                        <Text style={styles.sectionTitle}>Account Settings</Text>
                    </View>
                    {settingsOptions.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.settingsOption}
                            onPress={item.onPress}
                        >
                            {item.icon}
                            <Text style={styles.settingsOptionText}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Delete Modal */}
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Trash2 color="#EF4444" size={50} style={styles.modalIcon} />
                            <Text style={styles.modalTitle}>Delete Profile</Text>
                            <Text style={styles.modalDescription}>
                                Are you sure you want to delete your profile? This action cannot be undone.
                            </Text>
                            <View style={styles.modalActions}>
                                <TouchableOpacity
                                    style={styles.modalCancelButton}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.modalCancelButtonText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.modalDeleteButton}
                                    onPress={handleDelete}
                                >
                                    <Text style={styles.modalDeleteButtonText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6'
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    profileCard: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white'
    },
    headerContainer: {
        backgroundColor: "#8B5CF6",
        paddingVertical: 30,
        alignItems: 'center',
        position: 'relative',
        borderBottomLeftRadius: 10,
        borderBottomEndRadius: 10
    },
    headerActions: {
        position: 'absolute',
        top: 15,
        right: 15,
        flexDirection: 'row'
    },
    headerActionButton: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 20,
        padding: 10,
        marginLeft: 10
    },
    profileImage: {
        width: 128,
        height: 128,
        borderRadius: 64,
        borderWidth: 4,
        borderColor: 'white'
    },
    profileName: {
        marginTop: 15,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    profileEmail: {
        color: 'rgba(255,255,255,0.8)',
        marginTop: 5
    },
    roleContainer: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 15,
        marginTop: 10
    },
    roleText: {
        color: 'white',
        fontSize: 12
    },
    sectionContainer: {
        padding: 20
    },
    sectionTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    sectionIcon: {
        marginRight: 10
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    activitiesContainer: {
        gap: 10
    },
    activityItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        padding: 15,
        borderRadius: 10
    },
    activityIcon: {
        marginRight: 10
    },
    activityText: {
        fontSize: 14,
        color: '#4B5563'
    },
    settingsContainer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB'
    },
    settingsOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    },
    settingsOptionText: {
        marginLeft: 15,
        fontSize: 16
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        width: '85%',
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    modalIcon: {
        marginBottom: 20
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    modalDescription: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#6B7280'
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    modalCancelButton: {
        flex: 1,
        backgroundColor: '#E5E7EB',
        padding: 15,
        borderRadius: 10,
        marginRight: 10
    },
    modalCancelButtonText: {
        textAlign: 'center',
        color: '#4B5563'
    },
    modalDeleteButton: {
        flex: 1,
        backgroundColor: '#EF4444',
        padding: 15,
        borderRadius: 10
    },
    modalDeleteButtonText: {
        textAlign: 'center',
        color: 'white'
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
    },
    menuItemText: {
        marginLeft: 16,
        fontSize: 16,
    },
});

export default ProfileScreen;

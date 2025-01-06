import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Bell, Trash2, CheckCircle, XCircle } from 'lucide-react-native';

const NotificationManager = () => {
    const [notifications, setNotifications] = useState([
        {
            id: '1',
            title: 'New User Registration',
            message: 'Rajesh Kumar just registered on the platform',
            type: 'success',
            timestamp: '2 minutes ago'
        },
        {
            id: '2',
            title: 'Payment Pending',
            message: 'Invoice #1245 is pending payment',
            type: 'warning',
            timestamp: '1 hour ago'
        },
        {
            id: '3',
            title: 'System Alert',
            message: 'Database backup completed successfully',
            type: 'info',
            timestamp: '3 hours ago'
        }
    ]);

    const getNotificationColor = (type:any) => {
        switch (type) {
            case 'success': return '#4CAF50';
            case 'warning': return '#FF9800';
            case 'error': return '#F44336';
            case 'info': return '#2196F3';
            default: return '#9E9E9E';
        }
    };

    const renderNotificationIcon = (type:any) => {
        const color = getNotificationColor(type);
        switch (type) {
            case 'success': return <CheckCircle color={color} />;
            case 'warning': return <Bell color={color} />;
            case 'error': return <XCircle color={color} />;
            case 'info': return <Bell color={color} />;
            default: return <Bell color={color} />;
        }
    };

    const handleDeleteNotification = (id:any) => {
        setNotifications(notifications.filter(notification => notification.id !== id));
    };

    const renderNotificationItem = ({ item }) => (
        <View style={styles.notificationContainer}>
            <View style={styles.notificationContent}>
                <View style={styles.iconContainer}>
                    {renderNotificationIcon(item.type)}
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.notificationTitle}>{item.title}</Text>
                    <Text style={styles.notificationMessage}>{item.message}</Text>
                    <Text style={styles.notificationTimestamp}>{item.timestamp}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => handleDeleteNotification(item.id)}
                    style={styles.deleteButton}
                >
                    <Trash2 color="#FF6B6B" size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Notifications</Text>
                <Text style={styles.headerSubtitle}>
                    Total: {notifications.length} unread notifications
                </Text>
            </View>
            <FlatList
                data={notifications}
                renderItem={renderNotificationItem}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Bell color="#A0A0A0" size={50} />
                        <Text style={styles.emptyText}>No new notifications</Text>
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
        padding: 10
    },
    headerContainer: {
        marginBottom: 15,
        paddingHorizontal: 10
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333'
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#666'
    },
    notificationContainer: {
        marginVertical: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
    notificationContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    iconContainer: {
        marginRight: 15
    },
    textContainer: {
        flex: 1
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5
    },
    notificationMessage: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5
    },
    notificationTimestamp: {
        fontSize: 12,
        color: '#999'
    },
    deleteButton: {
        padding: 10
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    emptyText: {
        marginTop: 15,
        fontSize: 16,
        color: '#A0A0A0'
    }
});

export default NotificationManager;
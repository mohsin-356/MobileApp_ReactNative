import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    StyleSheet,
} from 'react-native';
import { Search, Filter, ChevronRight, Plus } from 'lucide-react-native';
import { useRouter } from 'expo-router';
const UserIndexPage = () => {
    interface User {
        id: string;
        name: string;
        email: string;
        role: string;
        status: string;
        image: string;
    }
    const [users, setUsers] = useState<User[]>([
        {
            id: '1',
            name: 'Mohsin',
            email: 'mohsin@example.com',
            role: 'Admin',
            status: 'Active',
            image: 'https://via.placeholder.com/50', // Replace with actual image URL
        },
        {
            id: '2',
            name: 'Rebal',
            email: 'rebal@example.com',
            role: 'User',
            status: 'Inactive',
            image: 'https://via.placeholder.com/50', // Replace with actual image URL
        },
        // Add more users here...
    ]);

    const [searchQuery, setSearchQuery] = useState('');

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
const router=useRouter();
    const renderUserItem = ({ item }: { item: User }) => (
        <View
            style={styles.userItem}
           
        >
            <Image source={{ uri: item.image }} style={styles.userImage} />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userEmail}>{item.email}</Text>
                <View style={styles.userTags}>
                    <Text style={[styles.tag, item.role === 'Admin' ? styles.adminTag : styles.userTag]}>
                        {item.role}
                    </Text>
                    <Text style={[styles.tag, item.status === 'Active' ? styles.activeTag : styles.inactiveTag]}>
                        {item.status}
                    </Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => router.push('./Users/UserProfile')}>
                <ChevronRight color="#6B7280" size={24} />
            </TouchableOpacity>
           
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Users</Text>
                <View style={styles.searchBar}>
                    <Search color="#6B7280" size={20} />
                    <TextInput
                        placeholder="Search users..."
                        placeholderTextColor="#9CA3AF"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        style={styles.searchInput}
                    />
                    <TouchableOpacity style={styles.filterButton}>
                        <Filter color="white" size={20} />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={filteredUsers}
                renderItem={renderUserItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={() => (
                    <View style={styles.emptyList}>
                        <Text style={styles.emptyText}>No users found</Text>
                    </View>
                )}
            />

            <TouchableOpacity
                style={styles.fab}
                onPress={() => router.push('./Users/addUsers')}
            >
                <Plus color="white" size={24} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F3F4F6' },
    header: { padding: 15, backgroundColor: '#FFFFFF' },
    headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1F2937', marginBottom: 10 },
    searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F9FAFB', borderRadius: 10 },
    searchInput: { flex: 1, padding: 10, color: '#1F2937' },
    filterButton: { backgroundColor: '#6366F1', padding: 10, borderRadius: 10 },
    listContent: { padding: 15 },
    userItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        elevation: 3,
    },
    userImage: { width: 50, height: 50, borderRadius: 25 },
    userInfo: { marginLeft: 15, flex: 1 },
    userName: { fontSize: 16, fontWeight: 'bold', color: '#1F2937' },
    userEmail: { fontSize: 14, color: '#6B7280' },
    userTags: { flexDirection: 'row', marginTop: 5 },
    tag: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 15, fontSize: 12, marginRight: 10, color: 'white' },
    adminTag: { backgroundColor: '#10B981' },
    userTag: { backgroundColor: '#3B82F6' },
    activeTag: { backgroundColor: '#10B981' },
    inactiveTag: { backgroundColor: '#EF4444' },
    emptyList: { alignItems: 'center', justifyContent: 'center', marginTop: 50 },
    emptyText: { fontSize: 18, color: '#6B7280' },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#6366F1',
        borderRadius: 30,
        padding: 15,
        elevation: 5,
    },
});

export default UserIndexPage;

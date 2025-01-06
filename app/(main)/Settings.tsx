import React, { useState } from 'react';
import { View, Text, Switch, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useSettings } from '@/themes/SettingsContext';
import { EventRegister } from 'react-native-event-listeners';
const SettingsScreen = () => {
  const { isDarkMode, setIsDarkMode,
    pushNotifications, setPushNotifications, emailNotifications, setEmailNotifications
    , smsNotifications, setSMSNotifications, lowStockThreshold, setLowStockThreshold
  } = useSettings();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: isDarkMode ? '#1F2937' : '#F3F4F6' }}>
      <View style={{ 
        padding: 20, 
        backgroundColor: isDarkMode ? '#111827' : '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: isDarkMode ? '#374151' : '#E5E7EB'
      }}>
        <Text style={{ 
          fontSize: 24, 
          fontWeight: 'bold', 
          color: isDarkMode ? '#FFFFFF' : '#1F2937' ,
        }}>
          Application Settings
        </Text>
      </View>

    
      {/* Theme Settings */}
      <View style={{ 
        padding: 20, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: isDarkMode ? '#374151' : '#E5E7EB'
      }}>
        <Text style={{ 
          fontSize: 16,
          color: isDarkMode ? '#FFFFFF' : '#1F2937',
                 
        }}>
          Dark Mode
        </Text>
    
        <Switch
          value={isDarkMode}
          onValueChange={(value) => {
            setIsDarkMode(value);
            EventRegister.emit('ChangeTheme', value);
          }}
        />
      </View>

      {/* Notification Settings */}
      <View style={{ 
        padding: 20, 
        backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: isDarkMode ? '#374151' : '#E5E7EB'
      }}>
        <Text style={{ 
          fontSize: 18, 
          fontWeight: 'bold', 
          marginBottom: 15,
          color: isDarkMode ? '#FFFFFF' : '#1F2937',
                 
        }}>
          Notifications
        </Text>

        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          marginBottom: 15 
        }}>
          <Text style={{ 
            color: isDarkMode ? '#D1D5DB' : '#1F2937',
                    
          }}>
            Push Notifications
          </Text>
          <Switch 
            value={pushNotifications}
            onValueChange={setPushNotifications}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={pushNotifications ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>

        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          marginBottom: 15 
        }}>
          <Text style={{ 
            color: isDarkMode ? '#D1D5DB' : '#1F2937',
                     
          }}>
            Email Notifications
          </Text>
          <Switch 
            value={emailNotifications}
            onValueChange={setEmailNotifications}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={emailNotifications ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>

        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-between' 
        }}>
          <Text style={{ 
            color: isDarkMode ? '#D1D5DB' : '#1F2937',
                   
          }}>
            SMS Notifications
          </Text>
          <Switch 
            value={smsNotifications}
            onValueChange={setSMSNotifications}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={smsNotifications ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
      </View>

      {/* Inventory Settings */}
      <View style={{ 
        padding: 20, 
        backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF' 
      }}>
        <Text style={{ 
          fontSize: 18, 
          fontWeight: 'bold', 
          marginBottom: 15,
          color: isDarkMode ? '#FFFFFF' : '#1F2937',
               
        }}>
          Inventory Settings
        </Text>

        <View>
          <Text style={{ 
            marginBottom: 5,
            color: isDarkMode ? '#D1D5DB' : '#6B7280' ,
                     
          }}>
            Low Stock Threshold
          </Text>
          <Picker
            selectedValue={lowStockThreshold}
            onValueChange={(itemValue) => setLowStockThreshold(itemValue)}
            style={{ 
              backgroundColor: isDarkMode ? '#374151' : '#F9FAFB',
              color: isDarkMode ? '#FFFFFF' : '#1F2937',
              
            }}
          >
            <Picker.Item label="10 Units" value="10" />
            <Picker.Item label="20 Units" value="20" />
            <Picker.Item label="50 Units" value="50" />
          </Picker>
        </View>
      </View>

      {/* Save Settings Button */}
      <TouchableOpacity 
        style={{ 
          margin: 20, 
          padding: 15, 
          backgroundColor: '#6366F1', 
          borderRadius: 10, 
          alignItems: 'center' 
        }}
        onPress={() => {
          // Implement save settings logic
          console.log('Settings Saved', {
          
            darkMode: isDarkMode,
            notifications: {
              push: pushNotifications,
              email: emailNotifications,
              sms: smsNotifications
            },
            lowStockThreshold
          });
        }}
      >
        <Text style={{ 
          color: '#FFFFFF', 
          fontWeight: 'bold',
          fontSize: 16 ,
              
        }}>
          Save Settings
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SettingsScreen;
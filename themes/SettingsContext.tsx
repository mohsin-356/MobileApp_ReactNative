// import React, { createContext, useState, useContext, ReactNode } from 'react';

// interface SettingsContextType {
//     isDarkMode: boolean;
//     setIsDarkMode: (value: boolean) => void;
//     selectedFont: string;
//     setSelectedFont: (font: string) => void;
//     selectedLanguage: string;
//     setSelectedLanguage: (language: string) => void;
//     selectedTimeZone: string;
//     setSelectedTimeZone: (timeZone: string) => void;
//     selectedCurrency: string;
//     setSelectedCurrency: (currency: string) => void;
//     pushNotifications: boolean;
//     setPushNotifications: (value: boolean) => void;
//     emailNotifications: boolean;
//     setEmailNotifications: (value: boolean) => void;
//     smsNotifications: boolean;
//     setSMSNotifications: (value: boolean) => void;
//     lowStockThreshold: string;
//     setLowStockThreshold: (value: string) => void;
// }

// export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

// export const useSettings = (): SettingsContextType => {
//     const context = useContext(SettingsContext);
//     if (!context) {
//         throw new Error('useSettings must be used within a SettingsProvider');
//     }
//     return context;
// };

// interface SettingsProviderProps {
//     children: ReactNode;
// }

// export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
//     const [isDarkMode, setIsDarkMode] = useState<any>(false);
//     const [selectedFont, setSelectedFont] = useState<string>('Roboto');
//     const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
//     const [selectedTimeZone, setSelectedTimeZone] = useState<string>('UTC');
//     const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
//     const [pushNotifications, setPushNotifications] = useState<boolean>(true);
//     const [emailNotifications, setEmailNotifications] = useState<boolean>(false);
//     const [smsNotifications, setSMSNotifications] = useState<boolean>(false);
//     const [lowStockThreshold, setLowStockThreshold] = useState<string>('10');

//     const value = {
//         isDarkMode,
//         setIsDarkMode,
//         selectedFont,
//         setSelectedFont,
//         selectedLanguage,
//         setSelectedLanguage,
//         selectedTimeZone,
//         setSelectedTimeZone,
//         selectedCurrency,
//         setSelectedCurrency,
//         pushNotifications,
//         setPushNotifications,
//         emailNotifications,
//         setEmailNotifications,
//         smsNotifications,
//         setSMSNotifications,
//         lowStockThreshold,
//         setLowStockThreshold,
      
//     };

//     return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
// };

import React, { createContext, useState, useContext, useEffect } from 'react';
import { EventRegister } from 'react-native-event-listeners';

interface SettingsContextType {
    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
    pushNotifications: boolean;
    setPushNotifications: (value: boolean) => void;
    emailNotifications: boolean;
    setEmailNotifications: (value: boolean) => void;
    smsNotifications: boolean;
    setSMSNotifications: (value: boolean) => void;
    lowStockThreshold: string;
    setLowStockThreshold: (value: string) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = (): SettingsContextType => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSMSNotifications] = useState(false);
    const [lowStockThreshold, setLowStockThreshold] = useState('10');

  

    return (
        <SettingsContext.Provider
            value={{
                isDarkMode,
                setIsDarkMode,
                pushNotifications,
                setPushNotifications,
                emailNotifications,
                setEmailNotifications,
                smsNotifications,
                setSMSNotifications,
                lowStockThreshold,
                setLowStockThreshold,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

import React, { useState ,useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const { login } = useAuth();
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false); // Track mounting state

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false); // Clean up when unmounted
  }, []);

  const handleLogin = () => {
    if (email === "test@example.com" && password === "123") {
      login(); // Update logged-in state
      setTimeout(() => {
        if (isMounted) {
          router.replace("/(main)/"); // Delay navigation to ensure layout is ready
        }
      }, 100); // Small delay to avoid immediate navigation
    } else {
      Alert.alert("Invalid credentials!");
    }
  };
    const forgotPassword = () => {
        // router.push('./components/ForgotPassword.tsx');
    };
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.logoContainer}>
                    <Ionicons name="person-circle" size={80} color="#000" />
                </View>
                <Text style={styles.title}>Welcome Back</Text>

                <View style={styles.inputContainer}>
                    <Ionicons name="mail" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#666"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#666"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={secureText}
                    />
                    <TouchableOpacity
                        onPress={() => setSecureText(!secureText)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons
                            name={secureText ? 'eye-off' : 'eye'}
                            size={20}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Ionicons name="log-in" size={20} color="#fff" style={styles.buttonIcon} />
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>


                <TouchableOpacity  onPress={() => router.push("/(auth)/SignUp")} >
                    <Text style={styles.createAccountText}>Create New Account</Text>
                </TouchableOpacity>

                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.divider} />
                </View>

                <TouchableOpacity style={styles.forgotPasswordContainer}  onPress={() => router.push("/(auth)/forgotpassword")}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    formContainer: {
        borderRadius: 20,
        padding: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#555',
    },
    inputIcon: {
        padding: 10,
        marginLeft: 5,
    },
    input: {
        flex: 1,
        padding: 15,
        fontSize: 16,
        color: '#000',
    },
    eyeIcon: {
        padding: 10,
        marginRight: 5,
        borderLeftColor: "black",
        borderLeftWidth: 1
    },
    loginButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonIcon: {
        marginRight: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#555',
    },
    dividerText: {
        marginHorizontal: 10,
        color: '#000',
        fontWeight: 'bold',
        alignSelf:"center"
    },
    createAccountText: {
        color: '#000',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 15,
       
    },
    forgotPasswordContainer: {
        marginTop: 15,
    },
    forgotPasswordText: {
        color: '#555',
        fontSize: 14,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});
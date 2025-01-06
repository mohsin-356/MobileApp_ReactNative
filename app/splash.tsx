import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withRepeat,
    withTiming
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const SplashScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dots, setDots] = useState(0);
    const router = useRouter();

    // Reanimated shared values
    const logoScale = useSharedValue(0.5);
    const logoRotate = useSharedValue(0);

    // Animated styles
    const animatedLogoStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { scale: withSpring(logoScale.value) },
                { rotate: `${logoRotate.value}deg` }
            ]
        };
    });

    useEffect(() => {
        // Dot animation
        const dotTimer = setInterval(() => {
            setDots(prev => (prev + 1) % 4);
        }, 500);

        // Entrance animations
        logoScale.value = withSpring(1);
        logoRotate.value = withRepeat(
            withTiming(360, { duration: 2000 }),
            -1,
            true
        );

        // Navigation timer
        const timer = setTimeout(() => {
            clearInterval(dotTimer);
            setIsLoading(false);
        }, 3000);

        return () => {
            clearInterval(dotTimer);
            clearTimeout(timer);
        };
    }, []);

    if (isLoading) {
        return (
            <View style={styles.splashContainer}>
                <Animatable.View
                    animation="fadeIn"
                    duration={1000}
                    style={styles.splashLogo}
                >
                    <Animated.Image
                        source={require('../assets/images/Mefco.png')}
                        style={[styles.logoImage, animatedLogoStyle]}
                    />
                </Animatable.View>

                <View style={styles.loaderContainer}>
                    <Text style={styles.loadingText}>
                        Loading{'.'.repeat(dots)}
                    </Text>
                    <View style={styles.dotContainer}>
                        {[0, 1, 2].map((_, index) => (
                            <Animatable.View
                                key={index}
                                animation={dots === index ? 'pulse' : undefined}
                                style={[
                                    styles.dot,
                                    {
                                        backgroundColor: dots === index
                                            ? '#2563EB'
                                            : '#A0AEC0'
                                    }
                                ]}
                            />
                        ))}
                    </View>
                </View>
            </View>
        );
    }

    return null;
};

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EBF8FF',
    },
    splashLogo: {
        marginBottom: 40,
    },
    logoImage: {
        width: 100,
        height: 100,
        borderRadius:5,
        resizeMode: 'contain',
    },
    loaderContainer: {
        alignItems: 'center',
    },
    loadingText: {
        color: '#1E40AF',
        fontSize: 18,
        marginBottom: 10,
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 5,
    }
});

export default SplashScreen;
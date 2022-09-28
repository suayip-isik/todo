import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import styles from './TodoComplate.style';
import Lottie from 'lottie-react-native';
import checkGif from '../LottieFiles/check.json';

const TodoComplate = () => {
    const animationRef = useRef(null);

    useEffect(() => {
        animationRef.current?.play()
    }, [])

    return (
        <View style={styles.container}>
            <Lottie
                ref={animationRef}
                source={checkGif}
                autoPlay={false}
                loop={false}
            />
        </View>
    );
}

export default TodoComplate;
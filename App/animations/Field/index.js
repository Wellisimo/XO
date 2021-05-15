import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

export default (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;
  let fadeEndValue = 0;
  let fadeDuration = 2000;

  // start field fade animation on field mount
  useEffect(() => {
    endGameCheck();
    Animated.timing(fadeAnim, {
      toValue: fadeEndValue,
      duration: fadeDuration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, props.endGame]);

  // stop field fade animation on field press
  useEffect(() => {
    if (props.stopAnimation) {
      fadeAnim.setValue(1);
    }
  }, [props.stopAnimation]);

  // start shake animation after player turn changed
  useEffect(() => {
    if (props.allowShake) {
      const timeout = setTimeout(() => {
        fieldShake();
      }, 450);
      return () => clearTimeout(timeout);
    }
  }, [props.playerTurn]);

  // field end game fade out animation
  const endGameCheck = () => {
    fadeEndValue = props.endGame === "" ? 1 : 0;
    fadeDuration = props.endGame === "" ? 1500 : 500;
    props.endGame === "" ? fadeAnim.setValue(0) : fadeAnim.setValue(1);
  };

  // field shake general animation
  const fieldShake = () => {
    props.playerTurn ? shakeAnim.setValue(-10) : shakeAnim.setValue(10);
    Animated.spring(shakeAnim, {
      toValue: 0,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  // field shake on move animation
  let shakeProp = shakeAnim.interpolate({
    inputRange: [0, 5],
    outputRange: ["0deg", "5deg"],
  });

  // field rotation animation
  let rotateProp = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["90deg", "0deg"],
  });

  // field zoom animation
  let zoomProp = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.1, 1],
  });

  return (
    <Animated.View
      style={[
        props.style,
        { opacity: fadeAnim },
        {
          transform: [
            { translateX: shakeAnim },
            { rotateY: shakeProp },
            { rotateX: rotateProp },
            { rotateZ: rotateProp },
            { scale: zoomProp },
          ],
        },
      ]}
    >
      {props.children}
    </Animated.View>
  );
};

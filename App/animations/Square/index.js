import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";
import { useSelector } from "react-redux";

export default (props) => {
  const playerTurn = useSelector((state) => state.turn);
  const spinAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [spinAnim]);

  let rotateProp = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  let zoom = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [3, 1],
  });

  let computerMoveDistortion = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [80, 0],
  });

  let playerMoveDistortion = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-80, 0],
  });

  return (
    <Animated.View
      style={[
        props.style,
        {
          transform: [
            { rotate: rotateProp },
            { scale: zoom },
            {
              translateY: !playerTurn
                ? computerMoveDistortion
                : playerMoveDistortion,
            },
            {
              translateX: !playerTurn
                ? computerMoveDistortion
                : playerMoveDistortion,
            },
          ],
        },
      ]}
    >
      {props.children}
    </Animated.View>
  );
};

import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import { resetField, changePlayer } from "../../Redux/Actions";

const Button = (props) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        dispatch(resetField());
        dispatch(changePlayer(true));
        props.setStopAnimation(false);
        props.setAllowShake(false);
      }}
    >
      <Text style={styles.text}>New Game</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
});

// testing git

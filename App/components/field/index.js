import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { useSelector } from "react-redux";

import FadeView from "../../animations/Field";
import Square from "../square";
import Button from "../button";

import result from "../../Gamelogic/result";

const Fields = () => {
  const [stopAnimation, setStopAnimation] = useState(false);
  const [message, setMessage] = useState("");
  const [allowShake, setAllowShake] = useState(false);
  const [endGame, setEndGame] = useState("");

  const squares = useSelector((state) => state.squares);
  const playerTurn = useSelector((state) => state.turn);

  // check for game result with delay to allow player or computer move animation to play till end
  useEffect(() => {
    const timeout_1 = setTimeout(() => {
      setEndGame(result(squares));
    }, 600);

    const timeout_2 = setTimeout(() => {
      setMessage(result(squares));
    }, 1000);
    return () => {
      clearTimeout(timeout_1);
      clearTimeout(timeout_2);
    };
  }, [squares]);

  return (
    <View style={styles.container}>
      {!message ? (
        <Pressable
          style={styles.container}
          onPress={() => {
            if (!stopAnimation) {
              setStopAnimation(true);
            }
          }}
        >
          <FadeView
            playerTurn={playerTurn}
            allowShake={allowShake}
            stopAnimation={stopAnimation}
            style={styles.container}
            endGame={endGame}
          >
            <View style={styles.row}>
              <Square
                setAllowShake={setAllowShake}
                setStopAnimation={setStopAnimation}
                fieldNumber="0"
              />
              <Square
                setAllowShake={setAllowShake}
                setStopAnimation={setStopAnimation}
                fieldNumber="1"
              />
              <Square
                setAllowShake={setAllowShake}
                setStopAnimation={setStopAnimation}
                fieldNumber="2"
              />
            </View>
            <View style={styles.row}>
              <Square
                setAllowShake={setAllowShake}
                setStopAnimation={setStopAnimation}
                fieldNumber="3"
              />
              <Square
                setAllowShake={setAllowShake}
                setStopAnimation={setStopAnimation}
                fieldNumber="4"
              />
              <Square
                setAllowShake={setAllowShake}
                setStopAnimation={setStopAnimation}
                fieldNumber="5"
              />
            </View>
            <View style={styles.row}>
              <Square
                setAllowShake={setAllowShake}
                setStopAnimation={setStopAnimation}
                fieldNumber="6"
              />
              <Square
                setAllowShake={setAllowShake}
                setStopAnimation={setStopAnimation}
                fieldNumber="7"
              />
              <Square
                setAllowShake={setAllowShake}
                setStopAnimation={setStopAnimation}
                fieldNumber="8"
              />
            </View>
          </FadeView>
        </Pressable>
      ) : (
        <Text style={styles.text}>{message}</Text>
      )}
      <Button
        setStopAnimation={setStopAnimation}
        setAllowShake={setAllowShake}
      />
    </View>
  );
};

export default Fields;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
  },
});

// testing git

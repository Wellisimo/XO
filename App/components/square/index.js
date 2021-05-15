import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import computerMove from "../../Gamelogic/AI";
import winRowCheck from "../../Gamelogic/winRowCheck";
import { updateField, changePlayer } from "../../Redux/Actions";
import RotationSquare from "../../animations/Square";

const Square = (props) => {
  const [winRow, setWinRow] = useState({});

  const squares = useSelector((state) => state.squares);
  const playerTurn = useSelector((state) => state.turn);
  const dispatch = useDispatch();

  const computerChangePlayer = (value) => {
    dispatch(changePlayer(value));
  };
  const computerUpdateField = (value) => {
    dispatch(updateField(value));
  };

  // launch computer move logic and winning row check logic after turn change with delay for better user experience
  useEffect(() => {
    const timeout_1 = setTimeout(() => setWinRow(winRowCheck(squares)), 300);
    if (!playerTurn) {
      const timeout_2 = setTimeout(
        () =>
          computerMove(
            squares,
            playerTurn,
            computerChangePlayer,
            computerUpdateField
          ),
        1000
      );
      return () => {
        clearTimeout(timeout_2);
      };
    }
  }, [playerTurn]);

  return (
    <Pressable
      style={styles.square}
      onPress={() => {
        props.setAllowShake(true); //allow field shake animation
        props.setStopAnimation(true); //block field fade animation on game start
        if (!squares[props.fieldNumber].done && playerTurn) {
          dispatch(changePlayer(false));
          dispatch(
            updateField({
              fieldNumber: props.fieldNumber,
              done: true,
              value: "X",
            })
          );
        }
      }}
    >
      {squares[props.fieldNumber].done ? (
        <RotationSquare
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {winRow.row?.includes(props.fieldNumber) ? (
            <View
              style={{
                position: "absolute",
                top: "50%",
                width:
                  winRow.angle !== 0 && winRow.angle !== 90 ? "150%" : "100%", //change winner crossing line depending on win row position for better user experience
                borderBottomColor: "black",
                borderWidth: 2,
                transform: [{ rotateZ: `${winRow.angle}deg` }],
              }}
            />
          ) : null}
          <Text style={styles.text}>{squares[props.fieldNumber].value}</Text>
        </RotationSquare>
      ) : null}
    </Pressable>
  );
};

export default Square;

const styles = StyleSheet.create({
  square: {
    borderColor: "black",
    borderWidth: 1,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 60,
    fontWeight: "100",
  },
});

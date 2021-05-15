export default (squares, playerTurn, changePlayer, updateField) => {
  if (!playerTurn) {
    // offensive logic
    if (
      ((squares[1].value === "O" && squares[2].value === "O") ||
        (squares[3].value === "O" && squares[6].value === "O") ||
        (squares[4].value === "O" && squares[8].value === "O")) &&
      !squares[0].value
    ) {
      updateField({
        fieldNumber: 0,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[4].value === "O" && squares[7].value === "O") ||
        (squares[0].value === "O" && squares[2].value === "O")) &&
      !squares[1].value
    ) {
      updateField({
        fieldNumber: 1,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[0].value === "O" && squares[1].value === "O") ||
        (squares[5].value === "O" && squares[8].value === "O") ||
        (squares[4].value === "O" && squares[6].value === "O")) &&
      !squares[2].value
    ) {
      updateField({
        fieldNumber: 2,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[0].value === "O" && squares[6].value === "O") ||
        (squares[4].value === "O" && squares[5].value === "O")) &&
      !squares[3].value
    ) {
      updateField({
        fieldNumber: 3,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[0].value === "O" && squares[8].value === "O") ||
        (squares[1].value === "O" && squares[7].value === "O") ||
        (squares[2].value === "O" && squares[6].value === "O") ||
        (squares[3].value === "O" && squares[5].value === "O")) &&
      !squares[4].value
    ) {
      updateField({
        fieldNumber: 4,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[2].value === "O" && squares[8].value === "O") ||
        (squares[3].value === "O" && squares[4].value === "O")) &&
      !squares[5].value
    ) {
      updateField({
        fieldNumber: 5,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[0].value === "O" && squares[3].value === "O") ||
        (squares[7].value === "O" && squares[8].value === "O") ||
        (squares[4].value === "O" && squares[2].value === "O")) &&
      !squares[6].value
    ) {
      updateField({
        fieldNumber: 6,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[1].value === "O" && squares[4].value === "O") ||
        (squares[6].value === "O" && squares[8].value === "O")) &&
      !squares[7].value
    ) {
      updateField({
        fieldNumber: 7,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[2].value === "O" && squares[5].value === "O") ||
        (squares[6].value === "O" && squares[7].value === "O") ||
        (squares[0].value === "O" && squares[4].value === "O")) &&
      !squares[8].value
    ) {
      updateField({
        fieldNumber: 8,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    // defensive logic
    if (
      ((squares[1].value === "X" && squares[2].value === "X") ||
        (squares[3].value === "X" && squares[6].value === "X") ||
        (squares[4].value === "X" && squares[8].value === "X")) &&
      !squares[0].value
    ) {
      updateField({
        fieldNumber: 0,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[4].value === "X" && squares[7].value === "X") ||
        (squares[0].value === "X" && squares[2].value === "X")) &&
      !squares[1].value
    ) {
      updateField({
        fieldNumber: 1,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[0].value === "X" && squares[1].value === "X") ||
        (squares[5].value === "X" && squares[8].value === "X") ||
        (squares[4].value === "X" && squares[6].value === "X")) &&
      !squares[2].value
    ) {
      updateField({
        fieldNumber: 2,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[0].value === "X" && squares[6].value === "X") ||
        (squares[4].value === "X" && squares[5].value === "X")) &&
      !squares[3].value
    ) {
      updateField({
        fieldNumber: 3,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[0].value === "X" && squares[8].value === "X") ||
        (squares[1].value === "X" && squares[7].value === "X") ||
        (squares[2].value === "X" && squares[6].value === "X") ||
        (squares[3].value === "X" && squares[5].value === "X")) &&
      !squares[4].value
    ) {
      updateField({
        fieldNumber: 4,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[2].value === "X" && squares[8].value === "X") ||
        (squares[3].value === "X" && squares[4].value === "X")) &&
      !squares[5].value
    ) {
      updateField({
        fieldNumber: 5,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[0].value === "X" && squares[3].value === "X") ||
        (squares[7].value === "X" && squares[8].value === "X") ||
        (squares[4].value === "X" && squares[2].value === "X")) &&
      !squares[6].value
    ) {
      updateField({
        fieldNumber: 6,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[1].value === "X" && squares[4].value === "X") ||
        (squares[6].value === "X" && squares[8].value === "X")) &&
      !squares[7].value
    ) {
      updateField({
        fieldNumber: 7,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[2].value === "X" && squares[5].value === "X") ||
        (squares[6].value === "X" && squares[7].value === "X") ||
        (squares[0].value === "X" && squares[4].value === "X")) &&
      !squares[8].value
    ) {
      updateField({
        fieldNumber: 8,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    // advanced defensive logic
    if (
      ((squares[0].value === "O" && squares[1].value === "X") ||
        (squares[0].value === "O" && squares[3].value === "X")) &&
      !squares[4].value
    ) {
      updateField({
        fieldNumber: 4,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[2].value === "O" && squares[1].value === "X") ||
        (squares[2].value === "O" && squares[5].value === "X")) &&
      !squares[4].value
    ) {
      updateField({
        fieldNumber: 4,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[6].value === "O" && squares[3].value === "X") ||
        (squares[6].value === "O" && squares[7].value === "X")) &&
      !squares[4].value
    ) {
      updateField({
        fieldNumber: 4,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      ((squares[8].value === "O" && squares[7].value === "X") ||
        (squares[8].value === "O" && squares[5].value === "X")) &&
      !squares[4].value
    ) {
      updateField({
        fieldNumber: 4,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      squares[0].value === "O" &&
      squares[3].value === "X" &&
      !squares[2].value
    ) {
      updateField({
        fieldNumber: 2,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (
      squares[0].value === "O" &&
      squares[1].value === "X" &&
      !squares[6].value
    ) {
      updateField({
        fieldNumber: 6,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (squares[0].value === "X" && !squares[1].value) {
      updateField({
        fieldNumber: 1,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (squares[0].value === "X" && !squares[3].value) {
      updateField({
        fieldNumber: 3,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (squares[2].value === "X" && !squares[1].value) {
      updateField({
        fieldNumber: 1,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (squares[2].value === "X" && !squares[5].value) {
      updateField({
        fieldNumber: 5,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (squares[6].value === "X" && !squares[3].value) {
      updateField({
        fieldNumber: 3,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (squares[6].value === "X" && !squares[7].value) {
      updateField({
        fieldNumber: 7,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (squares[8].value === "X" && !squares[7].value) {
      updateField({
        fieldNumber: 7,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (squares[8].value === "X" && !squares[5].value) {
      updateField({
        fieldNumber: 5,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    // advanced offensive logic
    if (!squares[0].value) {
      updateField({
        fieldNumber: 0,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (!squares[2].value) {
      updateField({
        fieldNumber: 2,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (!squares[6].value) {
      updateField({
        fieldNumber: 6,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }

    if (!squares[8].value) {
      updateField({
        fieldNumber: 8,
        done: true,
        value: "O",
      });
      changePlayer(true);
      return;
    }
  }
  return;
};

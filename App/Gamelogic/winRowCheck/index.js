export default (squares) => {
  if (
    (squares[0].value === "X" &&
      squares[1].value === "X" &&
      squares[2].value === "X") ||
    (squares[0].value === "O" &&
      squares[1].value === "O" &&
      squares[2].value === "O")
  ) {
    return { row: ["0", "1", "2"], angle: 0 };
  }
  if (
    (squares[0].value === "X" &&
      squares[3].value === "X" &&
      squares[6].value === "X") ||
    (squares[0].value === "O" &&
      squares[3].value === "O" &&
      squares[6].value === "O")
  ) {
    return { row: ["0", "3", "6"], angle: 90 };
  }
  if (
    (squares[3].value === "X" &&
      squares[4].value === "X" &&
      squares[5].value === "X") ||
    (squares[3].value === "O" &&
      squares[4].value === "O" &&
      squares[5].value === "O")
  ) {
    return { row: ["3", "4", "5"], angle: 0 };
  }
  if (
    (squares[1].value === "X" &&
      squares[4].value === "X" &&
      squares[7].value === "X") ||
    (squares[1].value === "O" &&
      squares[4].value === "O" &&
      squares[7].value === "O")
  ) {
    return { row: ["1", "4", "7"], angle: 90 };
  }
  if (
    (squares[6].value === "X" &&
      squares[7].value === "X" &&
      squares[8].value === "X") ||
    (squares[6].value === "O" &&
      squares[7].value === "O" &&
      squares[8].value === "O")
  ) {
    return { row: ["6", "7", "8"], angle: 0 };
  }
  if (
    (squares[2].value === "X" &&
      squares[5].value === "X" &&
      squares[8].value === "X") ||
    (squares[2].value === "O" &&
      squares[5].value === "O" &&
      squares[8].value === "O")
  ) {
    return { row: ["2", "5", "8"], angle: 90 };
  }
  if (
    (squares[0].value === "X" &&
      squares[4].value === "X" &&
      squares[8].value === "X") ||
    (squares[0].value === "O" &&
      squares[4].value === "O" &&
      squares[8].value === "O")
  ) {
    return { row: ["0", "4", "8"], angle: 45 };
  }
  if (
    (squares[2].value === "X" &&
      squares[4].value === "X" &&
      squares[6].value === "X") ||
    (squares[2].value === "O" &&
      squares[4].value === "O" &&
      squares[6].value === "O")
  ) {
    return { row: ["2", "4", "6"], angle: 135 };
  }
  return {};
};

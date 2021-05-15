import { combineReducers } from "redux";
import emptyField from "../initialState";

const squaresReducer = (squares = emptyField, action) => {
  if (action.type === "UPDATE_FIELD") {
    let result = [...squares];
    result[action.payload.fieldNumber] = {
      done: action.payload.done,
      value: action.payload.value,
    };
    return result;
  }
  if (action.type === "RESET_FIELD") {
    return emptyField;
  }
  return squares;
};

const turn = (playerMove = true, action) => {
  if (action.type === "CHANGE_PLAYER") {
    return action.payload;
  }
  return playerMove;
};

export default combineReducers({
  squares: squaresReducer,
  turn: turn,
});

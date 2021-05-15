export const updateField = (field) => {
  return {
    type: "UPDATE_FIELD",
    payload: {
      fieldNumber: field.fieldNumber,
      done: field.done,
      value: field.value,
    },
  };
};

export const resetField = () => {
  return {
    type: "RESET_FIELD",
  };
};

export const changePlayer = (value) => {
  return {
    type: "CHANGE_PLAYER",
    payload: value,
  };
};

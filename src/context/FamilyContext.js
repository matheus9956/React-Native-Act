import createDataContext from "./createDataContext";
import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "register":
      return [
        ...state,
        { id: Math.floor(Math.random() * 999999), dados: action.payload },
      ];
    default:
      return state;
  }
};

const RegisterFamily = (dispatch) => {
  return (values, callback) => {
    dispatch({ type: "register", payload: { values } });

    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { RegisterFamily },
  []
);

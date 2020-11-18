import createDataContext from "./createDataContext";
import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "register":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          nomeMae: action.payload.nomeMae,
          nomePai: action.payload.nomePai,
          nomeCrianca: action.payload.nomeCrianca,
        },
      ];
    default:
      return state;
  }
};

const RegisterFamily = (dispatch) => {
  return (nomeMae, nomePai, nomeCrianca, callback) => {
    dispatch({ type: "register", payload: { nomeMae, nomePai, nomeCrianca } });
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

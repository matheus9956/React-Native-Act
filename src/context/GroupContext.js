import createDataContext from "./createDataContext";
import React from "react";

const groupReducer = (state, action) => {
  switch (action.type) {
    case "read": {
      state = action.payload.groups;
      return state;
    }
    default:
      return state;
  }
};
const ReadGroups = (dispatch) => {
  const groups = [
    {
      id: 231,
      controle: [{ id: 123 }, { id: 1234 }, { id: 354 }],
      intervencao: [{ id: 324 }, { id: 534 }, { id: 654 }],
    },
    {
      id: 324,
      controle: [{ id: 4456 }, { id: 1236 }, { id: 3547 }],
      intervencao: [{ id: 3247 }, { id: 53434 }, { id: 65435 }],
    },
  ];
  return () => {
    dispatch({ type: "read", payload: { groups } });
  };
};
const CreateGroup = (dispatch) => {
  return (familias, callback) => {
    dispatch({ type: "newGroup", payload: { familias } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  groupReducer,
  { CreateGroup, ReadGroups },
  []
);

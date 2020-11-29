import createDataContext from "./createDataContext";

const familyReducer = (state, action) => {
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
  familyReducer,
  { RegisterFamily },
  []
);

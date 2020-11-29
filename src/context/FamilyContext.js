import createDataContext from "./createDataContext";

const familyReducer = (state, action) => {
  switch (action.type) {
    case "register":
      return [
        ...state,
        { id: Math.floor(Math.random() * 999999), dados: action.payload },
      ];
    case "read": {
      state = action.payload.families;
      return state;
    }
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

const ReadFamilies = (dispatch) => {
  const families = [
    { id: 123, dados: "test" },
    { id: 1234, dados: "testando" },
  ];
  return () => {
    dispatch({ type: "read", payload: { families } });
  };
};

export const { Context, Provider } = createDataContext(
  familyReducer,
  { RegisterFamily, ReadFamilies },
  []
);

import createDataContext from "./createDataContext";

const registerReducer = (state, action) => {
  switch (action.type) {
    case "clear": {
      return [];
    }
    default:
      return state;
  }
};
const clearState = (dispatch) => () => {
  dispatch({ type: "clear" });
};

export const { Context, Provider } = createDataContext(
  registerReducer,
  { clearState },
  []
);

import createDataContext from "./createDataContext";
import dadosApi from "../api/dados";

const familyReducer = (state, action) => {
  switch (action.type) {
    case "register":
      return state;

    case "readFamilies":
      return action.payload;

    default:
      return state;
  }
};

const RegisterFamily = (dispatch) => async (values, callback) => {
  const response = await dadosApi.post("/novafamilia", values);

  dispatch({ type: "register", payload: { values } });

  if (callback) callback();
};

const ReadFamilies = (dispatch) => async () => {
  const families = await dadosApi.get("/familias");

  dispatch({ type: "readFamilies", payload: families.data });
};

export const { Context, Provider } = createDataContext(
  familyReducer,
  { RegisterFamily, ReadFamilies },
  []
);

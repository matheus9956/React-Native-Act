import createDataContext from "./createDataContext";
import dadosApi from "../api/dados";

const familyReducer = (state, action) => {
  switch (action.type) {
    case "register":
      return state;

    case "readfamilies": {
      return action.payload.data;
    }
    case "readfamily": {
      return action.payload.data;
    }
    default:
      return state;
  }
};

const RegisterFamily = (dispatch) => async (values, callback) => {
  const response = await dadosApi.post("/novafamilia", values);

  dispatch({ type: "register", payload: { values } });

  if (callback) {
    callback();
  }
};

const ReadFamilies = (dispatch) => {
  return async () => {
    const families = await dadosApi.get("/familias");
    dispatch({ type: "readfamilies", payload: families });
  };
};
const ReadFamily = (dispatch) => async (id) => {
  console.log(id);
  const familia = await dadosApi.get(`/familia/${id}`);

  dispatch({ type: "readfamily", payload: familia });
};

export const { Context, Provider } = createDataContext(
  familyReducer,
  { RegisterFamily, ReadFamilies, ReadFamily },
  []
);

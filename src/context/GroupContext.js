import createDataContext from "./createDataContext";
import dadosApi from "../api/dados";

const groupReducer = (state, action) => {
  switch (action.type) {
    case "create": {
      return state;
    }
    case "readGroups": {
      state = action.payload.data;
      return state;
    }
    case "readGroup": {
      state = action.payload.data;
      return state;
    }
    default:
      return state;
  }
};
const ReadGroups = (dispatch) => {
  return async () => {
    const Groups = await dadosApi.get("/grupos");

    dispatch({ type: "readGroups", payload: Groups });
  };
};
const ReadGroup = (dispatch) => async (id) => {
  //console.log(id);
  const group = await dadosApi.get(`/grupo/${id}`);

  dispatch({ type: "readGroup", payload: group });
};

const CreateGroup = (dispatch) => async (callback) => {
  const response = await dadosApi.post("/novogrupo");

  dispatch({ type: "create", payload: response });
  if (callback) callback();
};

export const { Context, Provider } = createDataContext(
  groupReducer,
  { CreateGroup, ReadGroups, ReadGroup },
  []
);

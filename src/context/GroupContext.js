import createDataContext from "./createDataContext";
import dadosApi from "../api/dados";

const groupReducer = (state, action) => {
  switch (action.type) {
    case "change":
      return action.payload;

    case "create":
      return state;

    case "readGroups":
      return action.payload;

    case "readGroup":
      return action.payload;

    default:
      return state;
  }
};
const ReadGroups = (dispatch) => async () => {
  const groups = await dadosApi.get("/grupos");

  dispatch({ type: "readGroups", payload: groups.data });
};

const CreateGroup = (dispatch) => async (callback) => {
  const response = await dadosApi.post("/novogrupo");

  dispatch({ type: "create", payload: response });

  if (callback) callback();
};
const ChangeGroup = (dispatch) => async (_id, callback) => {
  const response = await dadosApi.get(`/grupo/fase/${_id}`);

  dispatch({ type: "change", payload: response.data });

  if (callback) callback();
};

export const { Context, Provider } = createDataContext(
  groupReducer,
  { CreateGroup, ReadGroups, ChangeGroup },
  []
);

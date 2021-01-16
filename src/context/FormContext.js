import createDataContext from "./createDataContext";
import dadosApi from "../api/dados";
const formReducer = (state, action) => {
  switch (action.type) {
    case "read": {
      state = action.payload.form;
      return state;
    }

    case "register":
      return state;
    default:
      return state;
  }
};

const ReadForm = (dispatch) => {
  /////////////////////////////////////////
  const form = [
    {
      id: "Q01",
      pergunta: "Pergunta 1:",
      type: "alternativa",
      alternativas: [
<<<<<<< HEAD
        { label: "gabriel nao sabe como enviar", value: 0 },
        { label: "gabriel se esforça", value: 1 },
        { label: "gabriel se esforça mt", value: 2 },
=======
        { label: "Alternativa 1", value: 0 },
        { label: "Alternativa 2", value: 1 },
>>>>>>> 3dd0ed548c5b6e2029146947f0e7a04f5cb39a03
      ],
    },
    { id: "Q02", pergunta: "Pergunta 2:", type: "number" },
    { id: "Q03", pergunta: "Pergunta 3:", type: "text" },
  ];
  /////////////////////////////////////////

  return () => {
    dispatch({ type: "read", payload: { form } });
  };
};

const RegisterForm = (dispatch) => async (values, id, callback) => {
  console.log(id);

  const response = await dadosApi.post("/novoFormulario/", {
    questionario: values,
    familyId: id,
  });

  dispatch({ type: "register", payload: response });

  if (callback) {
    callback();
  }
};

export const { Context, Provider } = createDataContext(
  formReducer,
  { ReadForm, RegisterForm },
  []
);

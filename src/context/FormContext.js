import createDataContext from "./createDataContext";

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
  const form = [
    {
      id: "Q01",
      pergunta: "Pergunta 1?",
      type: "alternativa",
      alternativas: [
        { label: "gabriel nao sabe como enviar", value: 0 },
        { label: "gabriel se esforça", value: 1 },
      ],
    },
    { id: "Q02", pergunta: "Pergunta 2?", type: "number" },
    { id: "Q03", pergunta: "Pergunta 3?", type: "text" },
  ];
  return () => {
    dispatch({ type: "read", payload: { form } });
  };
};

const RegisterForm = (dispatch) => {
  return (values, callback) => {
    dispatch({ type: "register", payload: { values } });

    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  formReducer,
  { ReadForm, RegisterForm },
  []
);

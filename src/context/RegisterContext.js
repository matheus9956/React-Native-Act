import createDataContext from "./createDataContext";

const registerReducer = (state, action) => {
  switch (action.type) {
    case "read": {
      state = action.payload.form;
      return state;
    }
    default:
      return state;
  }
};

const ReadRegister = (dispatch) => {
  const form = [
    { id: "Q01", pergunta: "Qual o seu nome?" },
    { id: "Q02", pergunta: "Qual a sua ocupação?" },
    { id: "Q03", pergunta: "Quantos filhos você tem?" },
    { id: "Q04", pergunta: "Qual o nome do mais velho?" },
  ];
  return () => {
    dispatch({ type: "read", payload: { form } });
  };
};

export const { Context, Provider } = createDataContext(
  registerReducer,
  { ReadRegister },
  []
);

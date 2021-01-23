import createDataContext from "./createDataContext";

const registerReducer = (state, action) => {
  switch (action.type) {
    case "read": {
      state = action.payload.form;
      return state;
    }
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

const ReadRegister = (dispatch) => {
  const form = [
    { id: "crianca.nome", pergunta: "Nome completo da criança:" },
    {
      id: "crianca.sexo",
      pergunta: "Sexo da criança:",
      type: "alternativa",
      alternativas: [
        { label: "Masculino", value: 0 },
        { label: "Feminino", value: 1 },
      ],
    },
    { id: "crianca.idade", pergunta: "Idade da criança:", type: "number" },
    { id: "crianca.nascimento", pergunta: "Nascimento da criança:" },

    { id: "cuidador.nome", pergunta: "Nome completo do Cuidador(a):" },
    { id: "cuidador.idade", pergunta: "Idade do Cuidador(a):", type: "number" },
    { id: "cuidador.nascimento", pergunta: "Nascimento do Cuidador(a):" },
    {
      id: "cuidador.parentesco",
      pergunta: "Parentesco da criança:",
      type: "alternativa",
      alternativas: [
        { label: "Mãe biológica", value: 0 },
        { label: "Mãe adotiva", value: 1 },
        { label: "Madrastra", value: 2 },
        { label: "Pai biológico", value: 3 },
        { label: "Pai adotivo", value: 4 },
        { label: "Padrasto", value: 5 },
        { label: "Outro cuidador principal", value: 6 },
      ],
    },
    {
      id: "cuidador.escolaridade",
      pergunta: "Escolaridade:",
      type: "alternativa",
      alternativas: [
        { label: "Ensino Fundamental Incompleto", value: 0 },
        { label: "Ensino Fundamental Completo", value: 1 },
        { label: "Ensino  Médio Incompleto", value: 2 },
        { label: "Ensino Médio Completo", value: 3 },
        { label: "Ensino Técnico", value: 4 },
        { label: "Ensino Superior Incompleto", value: 5 },
        { label: "Ensino Superior Completo", value: 6 },
      ],
    },

    {
      id: "cuidador.anosEstudo",
      pergunta: "Anos de Estudo:",
      type: "number",
    },
    { id: "cuidador.localGrupo", pergunta: "Local do grupo:" },
    { id: "cuidador.endereco", pergunta: "Endereço da família:" },
    { id: "cuidador.cep", pergunta: "CEP:", type: "number" },
    { id: "cuidador.cidade", pergunta: "Cidade:" },
    { id: "cuidador.estado", pergunta: "Estado:" },
    { id: "cuidador.telefones", pergunta: "Telefones:" },
    {
      id: "cuidador.ocupacao",
      pergunta: "Ocupação:",
      type: "alternativa",
      alternativas: [
        { label: "Estudante", value: 0 },
        { label: "Do lar", value: 1 },
        { label: "Autônomo(a)", value: 2 },
        { label: "Funcionário(a) contratado(a)", value: 3 },
        { label: "Desempregado(a)", value: 4 },
      ],
    },
    {
      id: "cuidador.pele",
      pergunta: "Qual a sua cor da pele/etnia:",
      type: "alternativa",
      alternativas: [
        { label: "Branca", value: 0 },
        { label: "Preta", value: 1 },
        { label: "Amarela", value: 2 },
        { label: "Indígena", value: 3 },
        { label: "Prefiro não declarar", value: 4 },
      ],
    },
    {
      id: "crianca.pele",
      pergunta: "Qual a sua cor da pele/etnia da sua criança:",
      type: "alternativa",
      alternativas: [
        { label: "Branca", value: 0 },
        { label: "Preta", value: 1 },
        { label: "Amarela", value: 2 },
        { label: "Indígena", value: 3 },
        { label: "Prefiro não declarar", value: 4 },
      ],
    },
    {
      id: "cuidador.religiao",
      pergunta: "Religião:",
      type: "alternativa",
      alternativas: [
        { label: "Católica", value: 0 },
        { label: "Evangélica", value: 1 },
        { label: "Espírita", value: 2 },
        { label: "Outras religiões", value: 3 },
        { label: "Não tenho religião", value: 4 },
      ],
    },
    {
      id: "cuidador.situacaoConjugal",
      pergunta: "Situação conjugal:",
      type: "alternativa",
      alternativas: [
        { label: "Casada/União estável", value: 0 },
        { label: "Solteira", value: 1 },
        { label: "Separada", value: 2 },
        { label: "Viúva", value: 3 },
      ],
    },
    {
      id: "cuidador.numeroFilhos",
      pergunta: "Número de filhos:",
      type: "number",
    },
    {
      id: "cuidador.filhos0a6anos",
      pergunta: "Quantos filhos de 0 a 6 anos:",
      type: "number",
    },
    {
      id: "cuidador.pessoasMorando",
      pergunta: "Quantas pessoas moram na casa?",
      type: "number",
    },
    {
      id: "cuidador.recebeAuxilio ",
      pergunta: "Recebe algum auxílio do governo?",
      type: "alternativa",
      alternativas: [
        { label: "Sim", value: 0 },
        { label: "Não", value: 1 },
      ],
    },
    {
      id: "cuidador.casoReceba",
      pergunta: "Se sim, qual?",
    },
    {
      id: "moraAtualmente",
      pergunta: "Com quem a criança mora atualmente?",
      type: "checkbox",
      alternativas: [
        { name: "Mãe", id: "mae" },
        { name: "Pai", id: "pai" },
        { name: "Madrasta", id: "madrasta" },
        { name: "Padrasto", id: "padrasto" },
        { name: "Irmãos", id: "irmaos" },
        { name: "Avô/Avó", id: "avo" },
        { name: "Tio/Tia", id: "tio" },
        { name: "Outras pessoas da família", id: "outroFamiliar" },
        { name: "Outras pessoas não familiares", id: "outroNaoFamiliar" },
      ],
    },
    {
      id: "cuidador.rendaMensal",
      pergunta: "Renda Mensal:",
      type: "alternativa",
      alternativas: [
        { label: "Menos de R$1000", value: 0 },
        { label: "Entre R$1.100 - R$3000", value: 1 },
        { label: "Entre R$ 3100 - R$5000", value: 2 },
        { label: "Mais de R$5000", value: 3 },
      ],
    },
  ];
  return () => {
    dispatch({ type: "read", payload: { form } });
  };
};

export const { Context, Provider } = createDataContext(
  registerReducer,
  { ReadRegister, clearState },
  []
);

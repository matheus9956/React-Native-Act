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
    { id: "crianca.nome", pergunta: "Nome da criança:" },
    {
      id: "crianca.sexo",
      pergunta: "Sexo:",
      type: "alternativa",
      alternativas: [
        { label: "M", value: 0 },
        { label: "F", value: 1 },
      ],
    },
    { id: "crianca.idade", pergunta: "Idade:", type: "number" },
    { id: "crianca.nascimento", pergunta: "Nascimento:" },

    { id: "cuidador.nome", pergunta: "Nome do Cuidador(a):" },
    { id: "cuidador.idade", pergunta: "Idade:", type: "number" },
    { id: "cuidador.nascimento", pergunta: "Nascimento:" },
    {
      id: "cuidador.parentesco",
      pergunta: "Parentesco Criança",
      type: "alternativa",
      alternativas: [
        { label: "Mãe biológica", value: 0 },
        { label: "Mãe adotiva", value: 1 },
        { label: "Pai biológico", value: 2 },
        { label: "Pai adotivo", value: 3 },
        { label: "Cuidador(a) com guarda", value: 4 },
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
        { label: "Ensino Superior Incompleto", value: 4 },
        { label: "Ensino Superior Completo", value: 5 },
      ],
    },

    {
      id: "cuidador.anosEstudo",
      pergunta: "Anos de Estudo:",
      type: "number",
    },
    { id: "cuidador.localGrupo", pergunta: "Local do grupo:" },
    { id: "cuidador.endereco", pergunta: "Endereço:" },
    { id: "cuidador.cep", pergunta: "CEP", type: "number" },
    { id: "cuidador.cidade", pergunta: "Cidade" },
    { id: "cuidador.estado", pergunta: "Estado" },
    { id: "cuidador.telefones", pergunta: "Telefones:" },
    {
      id: "cuidador.ocupacao",
      pergunta: "Ocupação:",
      type: "alternativa",
      alternativas: [
        { label: "Estudante", value: 0 },
        { label: "Do lar", value: 1 },
        { label: "Autônomo(a)", value: 2 },
        { label: "Funcionário(a) contratado(a)-função ou profissão", value: 3 },
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
        { label: "outras", value: 3 },
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
      id: "cuidador.idadeFilhos",
      pergunta: "idade dos filhos:",
      type: "number",
    },
    { id: "cuidador.filhos0a6anos", pergunta: "Quantos filhos de 0 a 6anos:" },
    {
      id: "cuidador.moradia",
      pergunta: "Tipo-moradia:",
      type: "alternativa",
      alternativas: [
        { label: "Casa", value: 0 },
        { label: "Apartamento", value: 1 },
        { label: "Edícula", value: 2 },
      ],
    },
    {
      id: "cuidador.situacaoMoradia",
      pergunta: "Situação da moradia:",
      type: "alternativa",
      alternativas: [
        { label: "Própria", value: 0 },
        { label: "Alugada", value: 1 },
        { label: "Emprestada", value: 2 },
        { label: "Outros", value: 3 },
      ],
    },
    {
      id: "cuidador.numeroComodos",
      pergunta: "Número de cômodos:",
      ype: "alternativa",
      alternativas: [
        { label: "1", value: 0 },
        { label: "2", value: 1 },
        { label: "3", value: 2 },
        { label: "4 ou mais", value: 3 },
      ],
    },
    {
      id: "cuidador.pessoasMorando",
      pergunta: "Quantas pessoas moram na casa:",
      ype: "alternativa",
      alternativas: [
        { label: "1", value: 0 },
        { label: "2", value: 1 },
        { label: "3", value: 2 },
        { label: "4 ou mais ", value: 3 },
      ],
    },

    {
      id: "cuidador.recebeAuxilio ",
      pergunta: "Recebe algum auxílio do governo?",
      ype: "alternativa",
      alternativas: [
        { label: "Sim", value: 0 },
        { label: "Não", value: 1 },
      ],
    },
    {
      id: "cuidador.rendaMensal",
      pergunta: "Renda Mensal:",
      ype: "alternativa",
      alternativas: [
        { label: "Menos de R$1000", value: 0 },
        { label: "Entre R$1.100 - R$3000", value: 1 },
        { label: "Entre R$ 3100-R$5000", value: 2 },
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
  { ReadRegister },
  []
);

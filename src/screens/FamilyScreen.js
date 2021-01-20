import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  StatusBar,
  Platform,
  FlatList,
} from "react-native";
import { Context as FamilyContext } from "../context/FamilyContext";
import { ScrollView } from "react-native-gesture-handler";

const FamilyScreen = ({ route }) => {
  const { state } = useContext(FamilyContext);
  const _id = route.params?._id ?? "noId";
  const grupo = route.params?.grupo ?? "noGroup";

  const family =
    grupo === "comGrupo"
      ? state.comGrupo.find((item) => item._id === _id)
      : state.semGrupo.find((item) => item._id === _id);

  const form = [
    { pergunta: "Nome da criança", resposta: family.crianca.nome },
    {
      pergunta: "Sexo",
      resposta: family.crianca.sexo,
    },
    { pergunta: "Idade", resposta: family.crianca.idade },
    { pergunta: "Nascimento", resposta: family.crianca.nascimento },

    { pergunta: "Nome do Cuidador(a)", resposta: family.cuidador.nome },
    { pergunta: "Idade", resposta: family.cuidador.idade },
    { pergunta: "Nascimento", resposta: family.cuidador.nascimento },
    {
      pergunta: "Parentesco Criança",
      resposta: family.cuidador.parentesco,
    },
    {
      pergunta: "Escolaridade",
      resposta: family.cuidador.escolaridade,
    },

    {
      pergunta: "Anos de Estudo",
      resposta: family.cuidador.anosEstudo,
    },
    { pergunta: "Local do grupo", resposta: family.cuidador.localGrupo },
    { pergunta: "Endereço", resposta: family.cuidador.endereco },
    { pergunta: "CEP", resposta: family.cuidador.cep },
    { pergunta: "Cidade", resposta: family.cuidador.cidade },
    { pergunta: "Estado", resposta: family.cuidador.estado },
    { pergunta: "Telefones", resposta: family.cuidador.telefones },
    {
      pergunta: "Ocupação",
      resposta: family.cuidador.ocupacao,
    },
    {
      pergunta: "Qual a sua cor da pele/etnia",
      resposta: family.cuidador.pele,
    },
    {
      pergunta: "Qual a sua cor da pele/etnia da sua criança",
      resposta: family.crianca.pele,
    },
    {
      pergunta: "Religião",
      resposta: family.cuidador.religiao,
    },
    {
      pergunta: "Situação conjugal",
      resposta: family.cuidador.situacaoConjugal,
    },
    {
      pergunta: "Número de filhos",
      resposta: family.cuidador.numeroFilhos,
    },
    {
      pergunta: "idade dos filhos",
      resposta: family.cuidador.idadeFilhos,
    },
    {
      pergunta: "Quantos filhos de 0 a 6anos",
      resposta: family.cuidador.filhos0a6anos,
    },
    {
      pergunta: "Tipo-moradia",
      resposta: family.cuidador.moradia,
    },
    {
      pergunta: "Situação da moradia",
      resposta: family.cuidador.situacaoMoradia,
    },
    {
      pergunta: "Número de cômodos",
      resposta: family.cuidador.numeroComodos,
    },
    {
      pergunta: "Quantas pessoas moram na casa",
      resposta: family.cuidador.pessoasMorando,
    },

    {
      pergunta: "Recebe algum auxílio do governo?",
      resposta: family.cuidador.recebeAuxilio,
    },
    {
      pergunta: "Renda Mensal",
      resposta: family.cuidador.rendaMensal,
    },
    {
      pergunta: "Formulários Preenchidos",
      resposta: family.formulariosPreenchidos,
    },
  ];

  return family !== undefined && form[0].resposta !== undefined ? (
    <View>
      <FlatList
        data={form}
        keyExtractor={(item, index) => `${item.pergunta}` + index}
        renderItem={({ item }) => {
          return (
            <View style={styles.caixinha}>
              <Text style={styles.text}>
                {item.pergunta}: {item.resposta}
              </Text>
            </View>
          );
        }}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#336699" />
    </View>
  );
};

const styles = StyleSheet.create({
  caixinha: {
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#c9c9c9",
    justifyContent: "center",
    height: 40,
    paddingLeft: 10,
  },
  text: {
    fontSize: 17,
    color: "#575757",
  },
});

export default FamilyScreen;

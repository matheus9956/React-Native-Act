import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as FamilyContext } from "../context/FamilyContext";
import { NavigationEvents } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";
const FamilyScreen = ({ navigation }) => {
  const { state, ReadFamily } = useContext(FamilyContext);
  const _id = navigation.getParam("_id");

  const lefamilia = () => {
    ReadFamily(_id);
  };
  if (state.crianca === undefined) {
    return (
      <>
        <NavigationEvents onWillFocus={lefamilia} />
        <Text>Carregando</Text>
      </>
    );
  }

  return (
    <ScrollView>
      <NavigationEvents onWillFocus={lefamilia} />
      <Text style={styles.title}>
        Formularios preenchida:{state.formulariosPreenchidos}
      </Text>

      <Text style={styles.title}>Nome da criança:</Text>

      <Text>{state.crianca.nome}</Text>
      <Text style={styles.title}>Sexo:</Text>
      <Text>{state.crianca.sexo}</Text>
      <Text style={styles.title}>Idade:</Text>
      <Text>{state.crianca.idade}</Text>
      <Text style={styles.title}>Nascimento:</Text>
      <Text>{state.crianca.nascimento}</Text>
      <Text style={styles.title}>Pele:</Text>
      <Text>{state.crianca.pele}</Text>
      <Text style={styles.title}>Cuidador:</Text>
      <Text>{state.cuidador.nome}</Text>
      <Text style={styles.title}>Idade:</Text>
      <Text>{state.cuidador.idade}</Text>
      <Text style={styles.title}>Nascimento:</Text>
      <Text>{state.cuidador.nascimento}</Text>
      <Text style={styles.title}>Parentesco Criança:</Text>
      <Text>{state.cuidador.parentesco}</Text>
      <Text style={styles.title}>Escolaridade:</Text>
      <Text>{state.cuidador.escolaridade}</Text>
      <Text style={styles.title}>Anos de estudo:</Text>
      <Text>{state.cuidador.anosEstudo}</Text>
      <Text style={styles.title}>Local do grupo:</Text>
      <Text>{state.cuidador.localGrupo}</Text>
      <Text style={styles.title}>Endereço:</Text>
      <Text>{state.cuidador.endereco}</Text>
      <Text style={styles.title}>CEP:</Text>
      <Text>{state.cuidador.cep}</Text>
      <Text style={styles.title}>Cidade:</Text>
      <Text>{state.cuidador.cidade}</Text>
      <Text style={styles.title}>Estado:</Text>
      <Text>{state.cuidador.estado}</Text>
      <Text style={styles.title}>Telefones:</Text>
      <Text>{state.cuidador.telefones}</Text>
      <Text style={styles.title}>Ocupação:</Text>
      <Text>{state.cuidador.ocupacao}</Text>
      <Text style={styles.title}>pele/etnia:</Text>
      <Text>{state.cuidador.pele}</Text>
      <Text style={styles.title}>Religião:</Text>
      <Text>{state.cuidador.religiao}</Text>
      <Text style={styles.title}>Situação conjugal:</Text>
      <Text>{state.cuidador.situacaoConjugal}</Text>
      <Text style={styles.title}>Número de filhos:</Text>
      <Text>{state.cuidador.numeroFilhos}</Text>
      <Text style={styles.title}>Idade dos filhos:</Text>
      <Text>{state.cuidador.idadeFilhos}</Text>
      <Text style={styles.title}>Filhos de 0 a 6 anos:</Text>
      <Text>{state.cuidador.filhos0a6anos}</Text>
      <Text style={styles.title}>Tipo de moradia:</Text>
      <Text>{state.cuidador.moradia}</Text>
      <Text style={styles.title}>Situação da moradia:</Text>
      <Text>{state.cuidador.situacaoMoradia}</Text>
      <Text style={styles.title}>Número de cômodos:</Text>
      <Text>{state.cuidador.numeroComodos}</Text>
      <Text style={styles.title}>Quantas pessoas moram na casa:</Text>
      <Text>{state.cuidador.pessoasMorando}</Text>
      <Text style={styles.title}>auxilio do governo:</Text>
      <Text>{state.cuidador.recebeAuxilio}</Text>
      <Text style={styles.title}>Renda Mensal:</Text>
      <Text>{state.cuidador.rendaMensal}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
});

export default FamilyScreen;

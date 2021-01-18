import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  StatusBar,
  Platform,
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

  return family !== undefined ? (
    <ScrollView>
      <Text style={styles.title}>
        Formularios preenchida:{family.formulariosPreenchidos}
      </Text>

      <Text style={styles.title}>Nome da criança:</Text>

      <Text>{family.crianca.nome}</Text>
      <Text style={styles.title}>Sexo:</Text>
      <Text>{family.crianca.sexo}</Text>
      <Text style={styles.title}>Idade:</Text>
      <Text>{family.crianca.idade}</Text>
      <Text style={styles.title}>Nascimento:</Text>
      <Text>{family.crianca.nascimento}</Text>
      <Text style={styles.title}>Pele:</Text>
      <Text>{family.crianca.pele}</Text>
      <Text style={styles.title}>Cuidador:</Text>
      <Text>{family.cuidador.nome}</Text>
      <Text style={styles.title}>Idade:</Text>
      <Text>{family.cuidador.idade}</Text>
      <Text style={styles.title}>Nascimento:</Text>
      <Text>{family.cuidador.nascimento}</Text>
      <Text style={styles.title}>Parentesco Criança:</Text>
      <Text>{family.cuidador.parentesco}</Text>
      <Text style={styles.title}>Escolaridade:</Text>
      <Text>{family.cuidador.escolaridade}</Text>
      <Text style={styles.title}>Anos de estudo:</Text>
      <Text>{family.cuidador.anosEstudo}</Text>
      <Text style={styles.title}>Local do grupo:</Text>
      <Text>{family.cuidador.localGrupo}</Text>
      <Text style={styles.title}>Endereço:</Text>
      <Text>{family.cuidador.endereco}</Text>
      <Text style={styles.title}>CEP:</Text>
      <Text>{family.cuidador.cep}</Text>
      <Text style={styles.title}>Cidade:</Text>
      <Text>{family.cuidador.cidade}</Text>
      <Text style={styles.title}>Estado:</Text>
      <Text>{family.cuidador.estado}</Text>
      <Text style={styles.title}>Telefones:</Text>
      <Text>{family.cuidador.telefones}</Text>
      <Text style={styles.title}>Ocupação:</Text>
      <Text>{family.cuidador.ocupacao}</Text>
      <Text style={styles.title}>pele/etnia:</Text>
      <Text>{family.cuidador.pele}</Text>
      <Text style={styles.title}>Religião:</Text>
      <Text>{family.cuidador.religiao}</Text>
      <Text style={styles.title}>Situação conjugal:</Text>
      <Text>{family.cuidador.situacaoConjugal}</Text>
      <Text style={styles.title}>Número de filhos:</Text>
      <Text>{family.cuidador.numeroFilhos}</Text>
      <Text style={styles.title}>Idade dos filhos:</Text>
      <Text>{family.cuidador.idadeFilhos}</Text>
      <Text style={styles.title}>Filhos de 0 a 6 anos:</Text>
      <Text>{family.cuidador.filhos0a6anos}</Text>
      <Text style={styles.title}>Tipo de moradia:</Text>
      <Text>{family.cuidador.moradia}</Text>
      <Text style={styles.title}>Situação da moradia:</Text>
      <Text>{family.cuidador.situacaoMoradia}</Text>
      <Text style={styles.title}>Número de cômodos:</Text>
      <Text>{family.cuidador.numeroComodos}</Text>
      <Text style={styles.title}>Quantas pessoas moram na casa:</Text>
      <Text>{family.cuidador.pessoasMorando}</Text>
      <Text style={styles.title}>auxilio do governo:</Text>
      <Text>{family.cuidador.recebeAuxilio}</Text>
      <Text style={styles.title}>Renda Mensal:</Text>
      <Text>{family.cuidador.rendaMensal}</Text>
    </ScrollView>
  ) : (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#4d4dff" />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    fontWeight: "bold",
  },
});

export default FamilyScreen;

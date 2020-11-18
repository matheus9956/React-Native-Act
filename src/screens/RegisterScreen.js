import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Context } from "../context/FamilyContext";

const RegisterScreen = ({ navigation }) => {
  const { RegisterFamily } = useContext(Context);

  const [nomeMae, setNomeMae] = useState("");
  const [nomePai, setNomePai] = useState("");
  const [nomeCrianca, setNomeCrianca] = useState("");

  return (
    <View>
      <Text style={styles.label}>Nome da Mãe: </Text>
      <TextInput
        value={nomeMae}
        onChangeText={(text) => setNomeMae(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Nome do Pai: </Text>
      <TextInput
        value={nomePai}
        onChangeText={(text) => setNomePai(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Nome da Criança: </Text>
      <TextInput
        value={nomeCrianca}
        onChangeText={(text) => setNomeCrianca(text)}
        style={styles.input}
      />

      <Button
        title="Finalizar cadastro"
        onPress={() => {
          RegisterFamily(nomeMae, nomePai, nomeCrianca, () =>
            navigation.navigate("Families")
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
});

export default RegisterScreen;

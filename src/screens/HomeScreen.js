import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Bem vindo!</Text>
      <Text style={styles.texto}>Selecione a opção desejada: </Text>
      <View style={styles.buttonLabel}>
        <Button
          onPress={() => navigation.navigate("Register")}
          title="Cadastro"
          style={styles.button}
        />
        <Button
          onPress={() => navigation.navigate("Families")}
          title="Famílias"
          style={styles.button}
        />
        <Button
          onPress={() => navigation.navigate("Groups")}
          title="Grupos"
          style={styles.button}
        />
        <Button
          onPress={() => navigation.navigate("Settings")}
          title="Ajustes"
          style={styles.button}
        />
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: "Início",
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    alignSelf: "center",
    marginVertical: 20,
  },
  buttonLabel: {
    marginHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  texto: {
    marginLeft: 12,
    marginBottom: 10,
    color: "grey",
  },
});

export default HomeScreen;

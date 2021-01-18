import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Keyboard,
  StatusBar,
  Platform,
  AsyncStorage,
} from "react-native";
import { navigate } from "../navigationRef";
const HomeScreen = ({ navigation }) => {
  Keyboard.dismiss();

  const nick = navigation.getParam("nick");
  return (
    <View style={styles.statusBar}>
      <Text style={styles.text}>Bem vindo, {nick}! </Text>
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
  statusBar: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
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

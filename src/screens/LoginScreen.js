import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  StatusBar,
  Platform,
} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={(styles.label, styles.statusBar)}>
      <Text style={styles.text}>Usuario:</Text>
      <TextInput
        style={styles.input}
        value={nick}
        onChangeText={(text) => setNick(text)}
      />
      <Text style={styles.text}>Senha:</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Button title="Entrar" onPress={() => signin({ nick, password })} />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  input: {
    borderWidth: 1,
    color: "black",
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  label: {
    marginTop: 10,
    marginHorizontal: 8,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 11,
  },
});

export default LoginScreen;

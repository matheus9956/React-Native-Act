import React, { useState, useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ACT</Text>
      <View style={styles.inputView}>
        <View style={styles.icon}>
          <AntDesign name="user" size={27} color="#575757" />
        </View>
        <TextInput
          style={styles.text}
          placeholderTextColor="#575757"
          placeholder="Usuário"
          autoCapitalize="none"
          value={nick}
          onChangeText={(text) => setNick(text)}
        />
      </View>
      <View style={styles.inputView}>
        <View style={styles.icon}>
          <AntDesign name="lock" size={29} color="#575757" />
        </View>
        <TextInput
          placeholderTextColor="#575757"
          placeholder="Senha"
          autoCapitalize="none"
          secureTextEntry={true}
          style={styles.text}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      {state.errorMessage ? (
        <Text style={{ color: "red" }}>{state.errorMessage}</Text>
      ) : null}
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => signin({ nick, password })}
      >
        <Text style={styles.appButtonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    borderColor: "#575757",
    color: "#000000",
    padding: 5,
    flexDirection: "row",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#336699",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  text: {
    width: "90%",
    fontSize: 16,
  },

  icon: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  appButtonText: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#336699",
    marginBottom: 40,
  },
});

export default LoginScreen;

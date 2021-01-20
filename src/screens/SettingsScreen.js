import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  StatusBar,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
const handleEmaillPress = async () => {
  await Linking.openURL("mailto: actribeirao@gmail.com");
};

const SettingsScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  return (
    <View style={styles.statusBar}>
      <TouchableOpacity style={styles.button} onPress={handleEmaillPress}>
        <Text style={styles.text}>Contatar Suporte</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={signout}>
        <Text style={styles.text}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  button: {
    width: "80%",
    backgroundColor: "#336699",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    alignSelf: "center",
  },
});

export default SettingsScreen;

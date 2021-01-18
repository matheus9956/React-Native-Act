import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  StatusBar,
  Platform,
} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
const handleEmaillPress = async () => {
  await Linking.openURL("mailto: actribeirao@gmail.com");
};

const SettingsScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  return (
    <View style={(styles.label, styles.statusBar)}>
      <Text style={styles.versao}>v1.0</Text>

      <Button
        style={styles.button}
        title="Enviar e-mail"
        onPress={handleEmaillPress}
      />
      <Button style={styles.button} title="logout" onPress={signout} />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  button: {
    width: 10,
    height: 10,
  },
  label: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },

  versao: {
    marginTop: 10,
    alignSelf: "center",
    color: "grey",
  },
});

export default SettingsScreen;

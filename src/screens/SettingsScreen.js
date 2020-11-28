import React from "react";
import { View, StyleSheet, Text, Button, Linking } from "react-native";

const handleEmaillPress = async () => {
  await Linking.openURL("mailto: actribeirao@gmail.com");
};

const SettingsScreen = () => {
  return (
    <View style={styles.label}>
      <Text style={styles.versao}>v1.0</Text>
      <Text style={styles.text}>SUPORTE: </Text>
      <Button
        style={styles.button}
        title="Enviar e-mail"
        onPress={handleEmaillPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 10,
    height: 10,
  },
  label: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 50,
  },
  versao: {
    marginTop: 10,
    alignSelf: "center",
    color: "grey",
  },
});

export default SettingsScreen;

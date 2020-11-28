import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const GroupsScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.texto}>Você não possui grupos cadastrados</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    marginTop: 10,
    alignSelf: "center",
    color: "grey",
  },
});

export default GroupsScreen;

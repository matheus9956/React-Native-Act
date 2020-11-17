import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen screen</Text>

      <Button
        onPress={() => navigation.navigate("Register")}
        title="Cadastro"
      />
      <Button
        onPress={() => navigation.navigate("Families")}
        title="Famílias"
      />
      <Button onPress={() => navigation.navigate("Groups")} title="Grupos" />
      <Button onPress={() => navigation.navigate("Settings")} title="Ajustes" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;

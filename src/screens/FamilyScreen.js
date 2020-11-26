import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context } from "../context/FamilyContext";

const FamilyScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam("id");

  const family = state.find((family) => family.id === id);

  return (
    <View>
      <Text>{family.id}</Text>
      <Text>{family.dados.values.mae}</Text>
      <Text>{family.dados.values.pai}</Text>
      <Text>{family.dados.values.crianca}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FamilyScreen;

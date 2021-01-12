import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as FamilyContext } from "../context/FamilyContext";

const FamilyScreen = ({ navigation }) => {
  const { state, ReadFamily } = useContext(FamilyContext);
  const id = navigation.getParam("id");

  useEffect(() => {
    ReadFamily({ id });
  }, []);

  return (
    <View>
      <Text>{state.crianca.nome}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FamilyScreen;

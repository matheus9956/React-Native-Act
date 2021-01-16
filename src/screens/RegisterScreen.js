import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Context as RegisterContext } from "../context/RegisterContext";
import { Context as FamilyContext } from "../context/FamilyContext";

import FormComponent from "../components/FormComponent";

const RegisterScreen = ({ navigation }) => {
  const { RegisterFamily } = useContext(FamilyContext);
  const { state, ReadRegister } = useContext(RegisterContext);

  useEffect(() => {
    ReadRegister();
  }, []);

  return (
    <ScrollView>
      <FormComponent
        data={state}
        submit={(data) => {
          RegisterFamily(data, () => navigation.navigate("Families"));
        }}
      />
    </ScrollView>
  );
};

RegisterScreen.navigationOptions = {
  tabBarLabel: "Cadastro",
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    color: "black",
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  label: {
    marginTop: 10,
    marginHorizontal: 8,
  },
});

export default RegisterScreen;

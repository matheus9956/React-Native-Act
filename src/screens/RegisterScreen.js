import React, { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Context } from "../context/FamilyContext";
import { Formik } from "formik";
import FormComponent from "../components/FormComponent";

const Form = [
  { id: "Q01", pergunta: "Qual o seu nome?" },
  { id: "Q02", pergunta: "Qual a sua ocupação?" },
  { id: "Q03", pergunta: "Quantos filhos você tem?" },
];
/////////////////////////////////////////////////////////////////////

const RegisterScreen = ({ navigation }) => {
  const { RegisterFamily } = useContext(Context);

  return (
    <View>
      <FormComponent
        data={Form}
        submit={(data) => {
          RegisterFamily(data, () => navigation.navigate("Families"));
        }}
      />
    </View>
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

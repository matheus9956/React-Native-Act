import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Context as FormContext } from "../context/FormContext";
import FormComponent from "../components/FormComponent";

const RegisterScreen = ({ navigation }) => {
  const { state, ReadForm, RegisterForm } = useContext(FormContext);

  useEffect(() => {
    ReadForm();
  }, []);

  return (
    <View>
      <FormComponent
        data={state}
        submit={(data) => {
          RegisterForm(data, () => navigation.navigate("Families"));
        }}
      />
    </View>
  );
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

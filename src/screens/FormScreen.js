import React, { useContext, useEffect } from "react";
import { View, StyleSheet, StatusBar, Platform } from "react-native";
import { Context as FormContext } from "../context/FormContext";
import FormComponent from "../components/FormComponent";

const RegisterScreen = ({ navigation, route }) => {
  const { state, ReadForm, RegisterForm } = useContext(FormContext);
  const _id = route.params?._id ?? "noId";

  useEffect(() => {
    ReadForm();
  }, []);

  return (
    <View>
      <FormComponent
        data={state}
        submit={(data) => {
          RegisterForm(data, _id, () => navigation.navigate("Families"));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default RegisterScreen;

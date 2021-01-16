import React, { useContext, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Context as RegisterContext } from "../context/RegisterContext";
import { Context as FamilyContext } from "../context/FamilyContext";

import FormComponent from "../components/FormComponent";

const RegisterScreen = ({ navigation }) => {
  const { RegisterFamily } = useContext(FamilyContext);
  const { state, ReadRegister } = useContext(RegisterContext);

  useEffect(() => {
    ReadRegister();

    const focusListener = navigation.addListener("didFocus", () =>
      ReadRegister()
    );

    return () => {
      focusListener.remove();
    };
  }, []);

  return state !== undefined ? (
    <ScrollView>
      <FormComponent
        data={state}
        submit={(data) => {
          RegisterFamily(data, () => navigation.navigate("Families"));
        }}
      />
    </ScrollView>
  ) : (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#4d4dff" />
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

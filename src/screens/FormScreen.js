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
    <View style={styles.statusBar}>
      <FormComponent
        data={state}
        submit={(data) => {
          RegisterForm(data, _id, () => navigation.navigate("Families"));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
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

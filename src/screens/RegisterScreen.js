import React, { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Context } from "../context/FamilyContext";
import { Formik } from "formik";

const RegisterScreen = ({ navigation }) => {
  const { RegisterFamily } = useContext(Context);

  return (
    <View>
      <Formik
        initialValues={{ pai: "", mae: "", crianca: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.label}>
            <TextInput
              placeholder="Nome do Pai"
              onChangeText={handleChange("pai")}
              value={values.pai}
              style={styles.input}
            />
            <TextInput
              placeholder="Nome da Mãe"
              onChangeText={handleChange("mae")}
              value={values.mae}
              style={styles.input}
            />
            <TextInput
              placeholder="Nome da Criança"
              onChangeText={handleChange("crianca")}
              value={values.crianca}
              style={styles.input}
            />
            <Button
              onPress={() => {
                handleSubmit;
                RegisterFamily(values, () => navigation.navigate("Form"));
              }}
              title="Cadastrar"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

RegisterScreen.navigationOptions = {
  headerTitle: "Cadastro",
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

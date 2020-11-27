import React from "react";
import { Keyboard, View, StyleSheet, Text, Button } from "react-native";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";

/// VARIÁVEL DE EXEMPLO PARA TESTE (RECEBIDO DO BANCO DE DADOS ASSIM)
const Form = [
  { id: "Q01", pergunta: "Qual o seu nome?" },
  { id: "Q02", pergunta: "Qual a sua ocupação?" },
  { id: "Q03", pergunta: "Quantos filhos você tem?" },
];
/////////////////////////////////////////////////////////////////////

const InitialValues = Form.reduce(
  (acc, curr) => ({ ...acc, [curr.id]: "" }),
  {}
);

const FormScreen = () => {
  Keyboard.dismiss();

  return (
    <View>
      <Formik
        initialValues={InitialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, values, handleSubmit }) => (
          <View style={styles.label}>
            {Form.map((formulario, index) => (
              <View key={index}>
                <Text style={styles.text}>{formulario.pergunta}</Text>
                <TextInput
                  placeholder={formulario.pergunta}
                  onChangeText={handleChange(formulario.id)}
                  value={values.id}
                  style={styles.input}
                />
              </View>
            ))}
            <Button onPress={() => handleSubmit()} title="Finalizar" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    color: "black",
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  label: {
    marginTop: 10,
    marginHorizontal: 8,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default FormScreen;

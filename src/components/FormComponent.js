import React from "react";
import { Keyboard, View, StyleSheet, Text, Button } from "react-native";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";

const FormComponent = ({ data, submit }) => {
  Keyboard.dismiss();

  const InitialValues = data.reduce(
    (acc, curr) => ({ ...acc, [curr.id]: "" }),
    {}
  );

  return (
    <View>
      <Formik
        initialValues={InitialValues}
        onSubmit={(values) => submit(values)}
      >
        {({ handleChange, values, handleSubmit }) => (
          <View style={styles.label}>
            {data.map((formulario, index) => (
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

export default FormComponent;

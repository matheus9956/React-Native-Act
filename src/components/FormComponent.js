import React from "react";
import { Keyboard, View, StyleSheet, Text, Button } from "react-native";
import { Formik, Field, Form } from "formik";
import { TextInput } from "react-native-gesture-handler";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import * as yup from "yup";

const FormComponent = ({ data, submit }) => {
  Keyboard.dismiss();

  const InitialValues = data.reduce(
    (acc, curr) => ({ ...acc, [curr.id]: "" }),
    {}
  );
  const obj = Object.keys(InitialValues);

  console.log(obj.length);

  //console.log(Object.keys(InitialValues));
  return (
    <View>
      <Formik
        initialValues={InitialValues}
        validationSchema={ReviewSchema}
        onSubmit={(values) => {
          console.log(values);
          submit(values);
        }}
      >
        {({ handleChange, values, handleSubmit, setFieldValue }) => (
          <View style={styles.label}>
            {data.map((formulario, index) => (
              <View key={index}>
                <Text style={styles.text}>{formulario.pergunta}</Text>
                {formulario.type == "alternativa" ? (
                  <RadioForm
                    radio_props={formulario.alternativas}
                    initial={-1}
                    onPress={(value) => {
                      {
                        console.log(values);
                        setFieldValue(
                          formulario.id,
                          formulario.alternativas[value].label
                        );
                      }
                    }}
                  />
                ) : formulario.type == "number" ? (
                  <TextInput
                    placeholder={formulario.pergunta}
                    onChangeText={handleChange(formulario.id)}
                    value={values.id}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                ) : (
                  <TextInput
                    placeholder={formulario.pergunta}
                    onChangeText={handleChange(formulario.id)}
                    value={values.id}
                    style={styles.input}
                    //keyboardType="numeric"
                  />
                )}
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

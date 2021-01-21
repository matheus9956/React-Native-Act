import React from "react";
import {
  Keyboard,
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { Formik, Field, Form } from "formik";
import { TextInput } from "react-native-gesture-handler";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

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
        onSubmit={(values) => {
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
                  />
                )}
              </View>
            ))}

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.textbutton}>Finalizar</Text>
            </TouchableOpacity>
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
    paddingBottom: 45,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textbutton: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  button: {
    width: "80%",
    backgroundColor: "#336699",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});

export default FormComponent;

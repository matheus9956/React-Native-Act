import React from "react";
import {
  Keyboard,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Formik, Field, Form } from "formik";
import { TextInput } from "react-native-gesture-handler";
import RadioForm from "react-native-simple-radio-button";
import { Context as RegisterContext } from "../context/RegisterContext";
import SelectMultiple from "react-native-select-multiple";

const FormComponent = ({ data, submit }) => {
  Keyboard.dismiss();

  const { clearState } = React.useContext(RegisterContext);
  const [state, setState] = React.useState({ values: [] });

  const InitialValues = data.reduce(
    (acc, curr) => ({ ...acc, [curr.id]: "" }),
    {}
  );

  const onSelectionsChange = (values) => {
    setState({ values });
  };

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
                {formulario.type === "alternativa" ? (
                  <View style={styles.box}>
                    <Text style={styles.textAlternativa}>
                      {formulario.pergunta}
                    </Text>
                    <RadioForm
                      radio_props={formulario.alternativas}
                      buttonColor="#bd786e"
                      selectedButtonColor="#bd786e"
                      labelColor="#575757"
                      animation={false}
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
                  </View>
                ) : formulario.type === "number" ? (
                  <TextInput
                    placeholder={formulario.pergunta}
                    onChangeText={handleChange(formulario.id)}
                    value={values.id}
                    style={styles.box}
                    keyboardType="numeric"
                    placeholderTextColor="#575757"
                  />
                ) : formulario.type === "checkbox" ? (
                  <View style={styles.box}>
                    <Text style={styles.textAlternativa}>
                      {formulario.pergunta}
                    </Text>
                    <Text style={styles.textCheck}>
                      (Marcar todas que se aplicarem)
                    </Text>

                    <SelectMultiple
                      items={formulario.alternativas.map((item) => item.label)}
                      selectedItems={state.values}
                      onSelectionsChange={onSelectionsChange}
                    />
                  </View>
                ) : (
                  <TextInput
                    placeholder={formulario.pergunta}
                    onChangeText={handleChange(formulario.id)}
                    value={values.id}
                    style={styles.box}
                    placeholderTextColor="#575757"
                  />
                )}
              </View>
            ))}

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                values.moraAtualmente = state.values.map((item) => item.label);

                handleSubmit();
              }}
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
    backgroundColor: "#bd786e",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "center",
  },
  box: {
    backgroundColor: "white",
    borderRadius: 30,
    padding: 10,
    margin: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    color: "black",
  },
  textAlternativa: {
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  textCheck: {
    alignSelf: "center",
    marginBottom: 12,
    textTransform: "uppercase",
  },
});

export default FormComponent;

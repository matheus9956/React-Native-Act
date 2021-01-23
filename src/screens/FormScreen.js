import React, { useContext, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Context as FormContext } from "../context/FormContext";
import FormComponent from "../components/FormComponent";

const RegisterScreen = ({ navigation, route }) => {
  const { state, ReadForm, RegisterForm } = useContext(FormContext);
  const _id = route.params?._id ?? "noId";
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    ReadForm();
  }, []);

  return !isLoading ? (
    <View style={styles.all}>
      <FormComponent
        data={state}
        submit={(data) => {
          setIsLoading(true);
          RegisterForm(data, _id, () => {
            setIsLoading(false);
            navigation.navigate("Families");
          });
        }}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#336699" />
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: "#f5f1e9",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f1e9",
  },
});

export default RegisterScreen;

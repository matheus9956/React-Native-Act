import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationEvents } from "react-navigation";

import { Context as RegisterContext } from "../context/RegisterContext";
import { Context as FamilyContext } from "../context/FamilyContext";

import FormComponent from "../components/FormComponent";

const RegisterScreen = ({ navigation }) => {
  const { RegisterFamily } = useContext(FamilyContext);
  const { state, ReadRegister, clearState } = useContext(RegisterContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ReadRegister();

    const focusListener = navigation.addListener("didFocus", () =>
      ReadRegister()
    );

    return () => {
      focusListener.remove();
    };
  }, []);

  return state.length > 0 && state !== undefined && !isLoading ? (
    <ScrollView>
      <NavigationEvents onWillBlur={clearState} />
      <FormComponent
        data={state}
        submit={(data) => {
          setIsLoading(true);
          RegisterFamily(
            data,
            () => setIsLoading(false),
            () => navigation.navigate("Families")
          );
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
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default RegisterScreen;

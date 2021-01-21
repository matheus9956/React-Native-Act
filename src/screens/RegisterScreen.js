import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Platform,
  StatusBar,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Context as RegisterContext } from "../context/RegisterContext";
import { Context as FamilyContext } from "../context/FamilyContext";
import FormComponent from "../components/FormComponent";
import { useFocusEffect } from "@react-navigation/native";

const RegisterScreen = ({ navigation }) => {
  const { RegisterFamily } = useContext(FamilyContext);
  const { state, ReadRegister, clearState } = useContext(RegisterContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      clearState();
    });

    return unsubscribe;
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      ReadRegister();
    }, [])
  );

  return state.length > 0 && state !== undefined && !isLoading ? (
    <ScrollView style={styles.statusBar}>
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
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#336699" />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#f5f1e9",
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
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f1e9",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default RegisterScreen;

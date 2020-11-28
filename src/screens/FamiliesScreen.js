import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context as FamilyContext } from "../context/FamilyContext";
import { Context as GroupContext } from "../context/GroupContext";

const FamiliesScreen = ({ navigation }) => {
  const { state } = useContext(FamilyContext);

  console.log(state);

  if (state.length >= 6) {
    return (
      <View>
        <Button
          title="Criar Novo Grupo"
          onPress={() => {
            navigation.navigate("Groups");
          }}
        ></Button>
        <FlatList
          data={state}
          keyExtractor={(family) => family.dados.values.mae}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Family", { id: item.id })}
              >
                <View style={styles.familiesLabel}>
                  <Text style={styles.familiesText}>Família ID: {item.id}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  } else if (state.length === 0) {
    return (
      <View>
        <Text style={styles.texto}>Você não possui famílias cadastradas</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(family) => family.dados.values.mae}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Family", { id: item.id })}
            >
              <View style={styles.familiesLabel}>
                <Text style={styles.familiesText}>Família ID: {item.id}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  familiesLabel: {
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 12,
    paddingVertical: 12,
  },
  familiesText: {
    fontSize: 30,
  },
  texto: {
    marginTop: 10,
    alignSelf: "center",
    color: "grey",
  },
});

export default FamiliesScreen;

import React, { useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context as FamilyContext } from "../context/FamilyContext";

const FamiliesScreen = ({ navigation }) => {
  const { state, ReadFamilies } = useContext(FamilyContext);

  useEffect(() => {
    ReadFamilies();
  }, []);

  if (state.lenght >= 6) {
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
          keyExtractor={(family) => `${family._id}`}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Family", { id: item._id })}
              >
                <View style={styles.familiesLabel}>
                  <Text style={styles.familiesText}>
                    Família ID: {item._id}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  } else if (state.lenght === 0) {
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
        keyExtractor={(family) => `${family._id}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Family", { id: item._id })}
            >
              <View style={styles.familiesLabel}>
                <Text style={styles.familiesText}>Família ID: {item._id}</Text>
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
    marginHorizontal: 8,
  },
  familiesText: {
    fontSize: 30,
    marginHorizontal: 5,
  },
  texto: {
    marginTop: 10,
    alignSelf: "center",
    color: "grey",
  },
});

export default FamiliesScreen;

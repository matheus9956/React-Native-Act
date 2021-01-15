import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Picker,
} from "react-native";
import { Context as FamilyContext } from "../context/FamilyContext";
import { Context as GroupContext } from "../context/GroupContext";
import { NavigationEvents } from "react-navigation";

const FamiliesScreen = ({ navigation }) => {
  const { state, ReadFamilies } = useContext(FamilyContext);
  const { CreateGroup } = useContext(GroupContext);
  const [selectedValue, setSelectedValue] = useState("Sem Grupo");
  if (state.semGrupo === undefined) {
    return (
      <>
        <NavigationEvents onWillFocus={ReadFamilies} />
        <Text>Carregando</Text>
      </>
    );
  }
  if (state.semGrupo.length === 0 && state.comGrupo.length === 0) {
    return (
      <View>
        <NavigationEvents onWillFocus={ReadFamilies} />
        <Text style={styles.texto}>Você não possui famílias cadastradas</Text>
      </View>
    );
  }
  return (
    <>
      <NavigationEvents onWillFocus={ReadFamilies} />
      <View style={styles.vertical}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Sem Grupo" value="Sem Grupo" />
          <Picker.Item label="Com Grupo" value="Com Grupo" />
        </Picker>
        {state.semGrupo.length >= 6 && selectedValue === "Sem Grupo" ? (
          <Button
            title="Criar Grupo"
            onPress={() => {
              CreateGroup(() => {
                navigation.navigate("Groups");
              });
            }}
          />
        ) : (
          <></>
        )}
      </View>
      {selectedValue === "Sem Grupo" ? (
        <FlatList
          data={state.semGrupo}
          keyExtractor={(family) => `${family._id}`}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Family", { _id: item._id })}
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
      ) : (
        <FlatList
          data={state.comGrupo}
          keyExtractor={(family) => `${family._id}`}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Family", { _id: item._id })}
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
      )}
    </>
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
  vertical: {
    flexDirection: "row",
  },
});

export default FamiliesScreen;

import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Picker,
  ActivityIndicator,
} from "react-native";
import { Context as FamilyContext } from "../context/FamilyContext";
import { Context as GroupContext } from "../context/GroupContext";

const FamiliesScreen = ({ navigation }) => {
  const { state, ReadFamilies } = useContext(FamilyContext);
  const { CreateGroup } = useContext(GroupContext);
  const [selectedValue, setSelectedValue] = useState("Sem Grupo");

  useEffect(() => {
    ReadFamilies();

    const focusListener = navigation.addListener("didFocus", () =>
      ReadFamilies()
    );

    return () => {
      focusListener.remove();
    };
  }, []);

  return state.semGrupo !== undefined ? (
    <>
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
          keyExtractor={(item) => `${item._id}`}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Family", {
                    _id: item._id,
                    grupo: "semGrupo",
                  })
                }
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
          keyExtractor={(item) => `${item._id}`}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Family", {
                    _id: item._id,
                    grupo: "comGrupo",
                  })
                }
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
  ) : (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#4d4dff" />
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
  vertical: {
    flexDirection: "row",
  },
});

export default FamiliesScreen;

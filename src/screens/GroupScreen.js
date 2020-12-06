import React, { useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/GroupContext";

const GroupScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const controle = navigation.getParam("controle");

  const group = state.find((group) => group.controle === controle);
  return (
    <>
      <View style={styles.GroupLabel}>
        <Text style={styles.texto}>Grupo de controle:</Text>
        <FlatList
          data={group.controle}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Family", { id: item.id })}
              >
                <View>
                  <Text style={styles.GroupText}>Família ID: {item.id}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.GroupLabel}>
        <Text style={styles.texto}>Grupo de intervencao:</Text>
        <FlatList
          data={group.controle}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Family", { id: item.id })}
              >
                <View>
                  <Text style={styles.GroupText}>Família ID: {item.id}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  GroupLabel: {
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 12,
    paddingVertical: 12,
    marginHorizontal: 8,
  },
  GroupText: {
    fontSize: 30,
    marginHorizontal: 5,
  },
  texto: {
    marginTop: 10,
    alignSelf: "center",
    color: "grey",
  },
});

export default GroupScreen;

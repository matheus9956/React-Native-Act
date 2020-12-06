import React, { useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context as GroupContext } from "../context/GroupContext";

const GroupsScreen = ({ navigation }) => {
  const { state, ReadGroups } = useContext(GroupContext);

  useEffect(() => {
    ReadGroups();
  }, []);

  if (state.length === 0) {
    return (
      <View>
        <Text style={styles.texto}>Você não possui grupos cadastradas</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(groups) => `${groups.id}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Group", {
                  id: item.id,
                  controle: item.controle,
                })
              }
            >
              <View style={styles.GroupsLabel}>
                <Text style={styles.GroupsText}>Group id : {item.id}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  GroupsLabel: {
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 12,
    paddingVertical: 12,
    marginHorizontal: 8,
  },
  GroupsText: {
    fontSize: 30,
    marginHorizontal: 5,
  },
  texto: {
    marginTop: 10,
    alignSelf: "center",
    color: "grey",
  },
});

export default GroupsScreen;

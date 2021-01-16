import React, { useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Context as GroupContext } from "../context/GroupContext";

const GroupsScreen = ({ navigation }) => {
  const { state, ReadGroups } = useContext(GroupContext);

  useEffect(() => {
    ReadGroups();

    const focusListener = navigation.addListener("didFocus", () =>
      ReadGroups()
    );

    return () => {
      focusListener.remove();
    };
  }, []);

  return state !== undefined ? (
    <View>
      <FlatList
        data={state}
        keyExtractor={(item) => `${item._id}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Group", {
                  _id: item._id,
                })
              }
            >
              <View style={styles.GroupsLabel}>
                <Text style={styles.GroupsText}>Group id : {item._id}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  ) : (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#4d4dff" />
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

import React, { useContext, useEffect, useRef } from "react";
import { NavigationEvents } from "react-navigation";
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

  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  return mounted.current ? (
    <View>
      <NavigationEvents onWillFocus={ReadGroups} />
      <FlatList
        data={state}
        keyExtractor={(groups) => `${groups._id}`}
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
    <>
      <NavigationEvents onWillFocus={ReadGroups} />
      <Text>Carregando</Text>
    </>
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

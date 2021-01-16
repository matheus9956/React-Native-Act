import React, { useContext, useEffect, useRef } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
} from "react-native";

import { NavigationEvents } from "react-navigation";
import { Context as GroupContext } from "../context/GroupContext";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const GroupScreen = ({ navigation }) => {
  const { state, ReadGroup, ChangeGroup } = useContext(GroupContext);
  const _id = navigation.getParam("_id");

  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    if (mounted.current) ReadGroup(_id);

    return () => {
      mounted.current = false;
    };
  }, []);

  const legrupo = () => {
    ReadGroup(_id);
  };
  const data = [
    {
      title: "Controle",
      data: state.controle,
    },
    {
      title: "Intervenção",
      data: state.intervencao,
    },
  ];
  return mounted.current ? (
    <SafeAreaView>
      <NavigationEvents onWillFocus={legrupo} />
      <View style={styles.GroupLabel}>
        <SectionList
          sections={data}
          keyExtractor={(item) => `${item._id}`}
          renderItem={({ item, section: { title } }) => {
            if (title === "Controle") {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Family", { _id: item._id })
                  }
                >
                  <View style={styles.coluna}>
                    <Text>Família ID: {item._id}</Text>

                    <TouchableOpacity
                      style={styles.form}
                      onPress={() =>
                        navigation.navigate("Form", { _id: item._id })
                      }
                    >
                      <AntDesign name="filetext1" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Family", { _id: item._id })}
              >
                <View style={styles.coluna}>
                  <Text>Família ID: {item._id}</Text>
                  <TouchableOpacity style={styles.form}>
                    <AntDesign name="filetext1" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
          renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
        />
      </View>
    </SafeAreaView>
  ) : (
    <View style={[styles.container, styles.horizontal]}>
      <NavigationEvents onWillFocus={legrupo} />
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

GroupScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="swap-vertical-bold"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  GroupLabel: {},
  GroupText: {
    fontSize: 30,
    marginHorizontal: 5,
  },
  texto: {
    marginTop: 10,
    alignSelf: "center",
    color: "grey",
  },
  coluna: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 12,
    paddingVertical: 12,
    marginHorizontal: 8,
  },
  form: {
    left: 80,
    flexDirection: "row",
  },
  form2: {
    left: 80,
    flexDirection: "row",
    color: "red",
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

export default GroupScreen;

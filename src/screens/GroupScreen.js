import React, { useContext, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
} from "react-native";
import { Context as GroupContext } from "../context/GroupContext";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const GroupScreen = ({ navigation }) => {
  const { state, ReadGroup } = useContext(GroupContext);
  const _id = navigation.getParam("_id");
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

  useEffect(() => {
    const focusListener = navigation.addListener("didFocus", () => {
      ReadGroup(_id);
    });

    return () => {
      focusListener.remove();
    };
  }, []);

  return state.controle != undefined ? (
    <SafeAreaView>
      <View style={styles.GroupLabel}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item, section: { title } }) => {
            return title === "Controle" ? (
              <TouchableOpacity
                onPress={() => navigation.navigate("Family", { _id: item._id })}
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
            ) : (
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
          renderSectionHeader={({ section: { title } }) => (
            <Text>{title}:</Text>
          )}
        />
      </View>
    </SafeAreaView>
  ) : (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#4d4dff" />
    </View>
  );
};

/*GroupScreen.navigationOptions = ({ navigation }) => {
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
};*/

const styles = StyleSheet.create({
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

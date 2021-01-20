import React, { useContext, useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
  Button,
  StatusBar,
  Platform,
} from "react-native";
import { Context as GroupContext } from "../context/GroupContext";
import { Context as FamilyContext } from "../context/FamilyContext";
import { AntDesign } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

const GroupScreen = ({ navigation, route }) => {
  const { state, ChangeGroup, ReadGroups } = useContext(GroupContext);
  const { ReadFamilies } = useContext(FamilyContext);
  const _id = route.params?._id ?? "noId";
  const [tipo, setTipo] = useState(route.params?.tipo ?? "semTipo");
  const [isLoading, setIsLoading] = useState(false);
  const grupo =
    tipo === "ativo"
      ? state.ativos.find((item) => item._id === _id)
      : state.encerrados.find((item) => item._id);

  useFocusEffect(
    React.useCallback(() => {
      ReadFamilies();
    }, [])
  );

  const data = [
    {
      title: "Controle",
      data: grupo.controle,
    },
    {
      title: "Intervenção",
      data: grupo.intervencao,
    },
  ];

  const footer = () => {
    return grupo.fase === 1 ? (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setIsLoading(true);
          ChangeGroup(_id, () => setIsLoading(false));
        }}
      >
        <Text style={styles.text}>Inverter</Text>
      </TouchableOpacity>
    ) : grupo.fase === 2 ? (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setIsLoading(true);
          setTipo("encerrado");
          ChangeGroup(
            _id,
            () => setIsLoading(false),
            () => navigation.navigate("Groups")
          );
        }}
      >
        <Text style={styles.text}>Encerrar Grupo</Text>
      </TouchableOpacity>
    ) : (
      <></>
    );
  };

  return grupo.controle !== undefined && !isLoading ? (
    <SafeAreaView style={styles.GroupLabel}>
      <SectionList
        ListFooterComponent={footer()}
        sections={data}
        keyExtractor={(item) => `${item._id}`}
        renderItem={({ item, section: { title } }) => {
          return title === "Controle" ? (
            <TouchableOpacity
              style={styles.coluna}
              onPress={() =>
                navigation.navigate("Family", {
                  _id: item._id,
                  grupo: "comGrupo",
                })
              }
            >
              <View style={styles.text2}>
                <Text>Família ID: {item._id}</Text>
              </View>
              <TouchableOpacity
                style={styles.form}
                onPress={() => navigation.navigate("Form", { _id: item._id })}
              >
                <AntDesign name="filetext1" size={24} color="black" />
              </TouchableOpacity>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.coluna}
              onPress={() =>
                navigation.navigate("Family", {
                  _id: item._id,
                  grupo: "comGrupo",
                })
              }
            >
              <View style={styles.text2}>
                <Text>Família ID: {item._id}</Text>
              </View>

              <TouchableOpacity style={styles.form}>
                <AntDesign name="filetext1" size={24} color="red" />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.title}>
            <Text style={styles.text3}>{title}:</Text>
          </View>
        )}
      />
    </SafeAreaView>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#336699" />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "80%",
    backgroundColor: "#336699",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    alignSelf: "center",
  },
  text: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
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
  coluna: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 10,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#c9c9c9",
    alignSelf: "center",
  },
  form: {
    width: "20%",
    alignItems: "center",

    justifyContent: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
  },

  text2: {
    paddingLeft: 10,
    width: "80%",

    justifyContent: "center",
  },
  text3: {
    textTransform: "uppercase",
    fontSize: 17,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: "bold",
    color: "#575757",
  },
  title: {
    width: "80%",
    alignSelf: "center",
  },
});

export default GroupScreen;

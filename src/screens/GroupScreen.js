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

const GroupScreen = ({ navigation }) => {
  const { state, ChangeGroup, ReadGroups } = useContext(GroupContext);
  const { ReadFamilies } = useContext(FamilyContext);
  const _id = navigation.getParam("_id");
  const [tipo, setTipo] = useState(navigation.getParam("tipo"));
  const [isLoading, setIsLoading] = useState(false);
  const grupo =
    tipo === "ativo"
      ? state.ativos.find((item) => item._id === _id)
      : state.encerrados.find((item) => item._id);

  useEffect(() => {
    ReadFamilies();

    const focusListener = navigation.addListener("didFocus", () => {
      ReadFamilies();
    });

    return () => {
      focusListener.remove();
    };
  }, []);

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
      <Button
        onPress={() => {
          setIsLoading(true);
          ChangeGroup(_id, () => setIsLoading(false));
        }}
        title="Inverter Controle/Intervenção"
      />
    ) : grupo.fase === 2 ? (
      <Button
        onPress={() => {
          setIsLoading(true);
          setTipo("encerrado");
          ChangeGroup(
            _id,
            () => setIsLoading(false),
            () => navigation.navigate("Groups")
          );
        }}
        title="Encerrar Grupo"
      />
    ) : (
      <></>
    );
  };

  return grupo.controle !== undefined && !isLoading ? (
    <SafeAreaView>
      <View style={styles.GroupLabel}>
        <SectionList
          ListFooterComponent={footer()}
          sections={data}
          keyExtractor={(item) => `${item._id}`}
          renderItem={({ item, section: { title } }) => {
            return title === "Controle" ? (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Family", {
                    _id: item._id,
                    grupo: "comGrupo",
                  })
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
            ) : (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Family", {
                    _id: item._id,
                    grupo: "comGrupo",
                  })
                }
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

const styles = StyleSheet.create({
  statusBar: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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

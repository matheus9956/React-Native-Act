import React, { useContext, useState } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
  FlatList,
  Alert,
} from "react-native";
import { Context as GroupContext } from "../context/GroupContext";
import { Context as FamilyContext } from "../context/FamilyContext";
import { AntDesign } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

const GroupScreen = ({ navigation, route }) => {
  const { state, ChangeGroup } = useContext(GroupContext);
  const familyContext = useContext(FamilyContext);
  const _id = route.params?._id ?? "noId";
  const [tipo, setTipo] = useState(route.params?.tipo ?? "semTipo");
  const [isLoading, setIsLoading] = useState(false);
  const grupo =
    tipo === "ativo"
      ? state.ativos.find((item) => item._id === _id)
      : state.encerrados.find((item) => item._id);

  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(true);
      familyContext.ReadFamilies(() => setIsLoading(false));
    }, [])
  );

  const InvertButton = () =>
    Alert.alert(
      "INVERTER",
      "Deseja mesmo passar os membros de controle para intervenção? Essa alteração não poderá ser desfeita!",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => {
            setIsLoading(true);
            ChangeGroup(_id, () => setIsLoading(false));
          },
        },
      ],
      { cancelable: false }
    );

  const FinishButton = () =>
    Alert.alert(
      "ENCERRAR GRUPO",
      "Deseja mesmo encerrar o grupo? Essa alteração não poderá ser desfeita!",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => {
            setIsLoading(true);
            setTipo("encerrado");
            ChangeGroup(
              _id,
              () => setIsLoading(false),
              () => navigation.navigate("Groups")
            );
          },
        },
      ],
      { cancelable: false }
    );

  const data = [
    {
      title: "Intervenção",
      data: grupo.intervencao,
    },
    {
      title: "Controle",
      data: grupo.controle,
    },
  ];

  const namePicker = (fullName) => {
    if (fullName !== undefined) {
      const split = fullName.split(" ");
      if (split.length > 1) return `${split[0]} ${split[split.length - 1]}`;
      return `${split[0]}`;
    }

    return "Sem nome";
  };

  return !isLoading ? (
    <SafeAreaView style={{ backgroundColor: "#f5f1e9", flex: 1 }}>
      {grupo.fase === 1 ? (
        <SectionList
          ListFooterComponent={
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                InvertButton();
              }}
            >
              <Text style={styles.text}>Inverter</Text>
            </TouchableOpacity>
          }
          sections={data}
          keyExtractor={(item) => `${item._id}`}
          renderItem={({ item, section: { title } }) => {
            console.log(item);
            return title === "Intervenção" ? (
              item.desabilitado === 1 ? (
                <TouchableOpacity
                  style={styles.coluna2}
                  onPress={() =>
                    navigation.navigate("Family", {
                      family: item,
                    })
                  }
                >
                  <View style={styles.text2}>
                    <Text>Família de {namePicker(item.cuidador.nome)}</Text>
                  </View>
                  <TouchableOpacity style={styles.form}>
                    <Text styles={{ color: "red" }}>
                      {item.formulariosPreenchidos}
                    </Text>
                    <AntDesign name="filetext1" size={24} color="red" />
                  </TouchableOpacity>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.coluna}
                  onPress={() =>
                    navigation.navigate("Family", {
                      family: item,
                    })
                  }
                >
                  <View style={styles.text2}>
                    <Text>Família de {namePicker(item.cuidador.nome)}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.form}
                    onPress={() =>
                      navigation.navigate("Form", { _id: item._id })
                    }
                  >
                    <Text>{item.formulariosPreenchidos}</Text>
                    <AntDesign name="filetext1" size={24} color="black" />
                  </TouchableOpacity>
                </TouchableOpacity>
              )
            ) : item.desabilitado === 1 ? (
              <TouchableOpacity
                style={styles.coluna2}
                onPress={() =>
                  navigation.navigate("Family", {
                    family: item,
                  })
                }
              >
                <View style={styles.text2}>
                  <Text>Família de {namePicker(item.cuidador.nome)}</Text>
                </View>

                <TouchableOpacity style={styles.form}>
                  <Text style={{ color: "red" }}>
                    {item.formulariosPreenchidos}
                  </Text>
                  <AntDesign name="filetext1" size={24} color="red" />
                </TouchableOpacity>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.coluna}
                onPress={() =>
                  navigation.navigate("Family", {
                    family: item,
                  })
                }
              >
                <View style={styles.text2}>
                  <Text>Família de {namePicker(item.cuidador.nome)}</Text>
                </View>
                <TouchableOpacity
                  style={styles.form}
                  onPress={() => navigation.navigate("Form", { _id: item._id })}
                >
                  <Text>{item.formulariosPreenchidos}</Text>
                  <AntDesign name="filetext1" size={24} color="black" />
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
      ) : grupo.fase === 2 ? (
        <View>
          <View style={styles.title}>
            <Text style={styles.text3}>Intervenção:</Text>
          </View>
          <FlatList
            contentContainerStyle={{ paddingBottom: 50 }}
            data={data[0].data}
            keyExtractor={(item) => `${item._id}`}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.coluna}
                  onPress={() =>
                    navigation.navigate("Family", {
                      family: item,
                    })
                  }
                >
                  <View style={styles.text2}>
                    <Text>Família de {namePicker(item.cuidador.nome)}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.form}
                    onPress={() =>
                      navigation.navigate("Form", { _id: item._id })
                    }
                  >
                    <Text>{item.formulariosPreenchidos}</Text>
                    <AntDesign name="filetext1" size={24} color="black" />
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              FinishButton();
            }}
            data
          >
            <Text style={styles.text}>Encerrar Grupo</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View style={styles.title}>
            <Text style={styles.text3}>Grupo Encerrado:</Text>
          </View>
          <FlatList
            contentContainerStyle={{ paddingBottom: 50 }}
            data={data[0].data}
            keyExtractor={(item) => `${item._id}`}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.coluna}
                  onPress={() =>
                    navigation.navigate("Family", {
                      family: item,
                    })
                  }
                >
                  <View style={styles.text2}>
                    <Text>Família de {namePicker(item.cuidador.nome)}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
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
  coluna2: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 10,
    height: 50,
    backgroundColor: "#EEEEEE",

    borderColor: "red",
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,

    alignSelf: "center",
  },
  form: {
    width: "20%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f1e9",
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

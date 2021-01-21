import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  StatusBar,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Context as FamilyContext } from "../context/FamilyContext";
import { Context as GroupContext } from "../context/GroupContext";
import { useFocusEffect } from "@react-navigation/native";

const FamiliesScreen = ({ navigation }) => {
  const { state, ReadFamilies } = useContext(FamilyContext);
  const { CreateGroup } = useContext(GroupContext);
  const [selectedValue, setSelectedValue] = useState("Sem Grupo");
  const [refreshing, setRefreshing] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      ReadFamilies();
    }, [])
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    ReadFamilies().then(() => setRefreshing(false));
  }, []);

  return state.semGrupo !== undefined && !isLoading ? (
    <View style={styles.statusBar}>
      <View style={styles.picker}>
        <Picker
          itemStyle={{ alignSelf: "center" }}
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Sem Grupo" value="Sem Grupo" />
          <Picker.Item label="Com Grupo" value="Com Grupo" />
        </Picker>
      </View>

      {selectedValue === "Sem Grupo" ? (
        <View style={styles.flatlist}>
          <FlatList
            contentContainerStyle={{ paddingBottom: 170 }}
            ListFooterComponent={() => {
              return state.semGrupo.length >= 6 &&
                selectedValue === "Sem Grupo" ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setIsLoading(true);
                    CreateGroup(
                      () => navigation.navigate("Groups"),
                      () => setIsLoading(false)
                    );
                  }}
                >
                  <Text style={styles.appButtonText}>criar grupo</Text>
                </TouchableOpacity>
              ) : (
                <></>
              );
            }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={state.semGrupo}
            keyExtractor={(item) => `${item._id}`}
            ListEmptyComponent={() => {
              return (
                <Text style={styles.empty}>Não existe família disponíveis</Text>
              );
            }}
            renderItem={({ item, index }) => {
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
                      Família: {index + 1}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : (
        <View style={styles.flatlist}>
          <FlatList
            contentContainerStyle={{ paddingBottom: 170 }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={state.comGrupo}
            keyExtractor={(item) => `${item._id}`}
            ListEmptyComponent={() => {
              return (
                <Text style={styles.empty}>Não existe família disponíveis</Text>
              );
            }}
            renderItem={({ item, index }) => {
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
                      Família: {index + 1}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </View>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#336699" />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    backgroundColor: "#f5f1e9",
  },

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

  appButtonText: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },

  familiesLabel: {
    justifyContent: "center",
    paddingLeft: 10,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#c9c9c9",
  },
  picker: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  flatlist: {
    width: "90%",
  },
  familiesText: {
    fontSize: 18,
  },
  empty: {
    color: "#575757",
    alignSelf: "center",
  },
});

export default FamiliesScreen;

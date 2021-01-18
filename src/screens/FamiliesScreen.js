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
      <View style={styles.vertical}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Sem Grupo" value="Sem Grupo" />
          <Picker.Item label="Com Grupo" value="Com Grupo" />
        </Picker>
        {state.semGrupo.length >= 6 && selectedValue === "Sem Grupo" ? (
          <Button
            title="Criar Grupo"
            onPress={() => {
              setIsLoading(true);
              CreateGroup(
                () => navigation.navigate("Groups"),
                () => setIsLoading(false)
              );
            }}
          />
        ) : (
          <></>
        )}
      </View>
      {selectedValue === "Sem Grupo" ? (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={state.semGrupo}
          keyExtractor={(item) => `${item._id}`}
          ListEmptyComponent={() => {
            return <Text>Não existe familia disponiveis </Text>;
          }}
          renderItem={({ item }) => {
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
                    Família ID: {item._id}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={state.comGrupo}
          keyExtractor={(item) => `${item._id}`}
          ListEmptyComponent={() => {
            return <Text>Não existe familia disponiveis </Text>;
          }}
          renderItem={({ item }) => {
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
                    Família ID: {item._id}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
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
  familiesLabel: {
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 12,
    paddingVertical: 12,
    marginHorizontal: 8,
  },
  familiesText: {
    fontSize: 30,
    marginHorizontal: 5,
  },
  texto: {
    marginTop: 10,
    alignSelf: "center",
    color: "grey",
  },
  vertical: {
    flexDirection: "row",
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

export default FamiliesScreen;

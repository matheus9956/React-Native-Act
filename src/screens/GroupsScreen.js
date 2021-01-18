import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Context as GroupContext } from "../context/GroupContext";

const GroupsScreen = ({ navigation }) => {
  const { state, ReadGroups } = useContext(GroupContext);
  const [refreshing, setRefreshing] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("ativos");

  useEffect(() => {
    setIsLoading(true);
    ReadGroups(() => setIsLoading(false));

    const focusListener = navigation.addListener("didFocus", () => {
      setIsLoading(true);
      ReadGroups(() => setIsLoading(false));
    });

    return () => {
      focusListener.remove();
    };
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    ReadGroups().then(() => setRefreshing(false));
  }, []);

  return state !== undefined && !isLoading ? (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Grupos Ativos" value="ativos" />
        <Picker.Item label="Grupos Encerrados" value="encerrados" />
      </Picker>
      {selectedValue === "ativos" ? (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={state.ativos}
          keyExtractor={(item) => `${item._id}`}
          ListEmptyComponent={() => {
            return <Text>Não existe Grupos disponiveis </Text>;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Group", {
                    _id: item._id,
                    tipo: "ativo",
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
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={state.encerrados}
          keyExtractor={(item) => `${item._id}`}
          ListEmptyComponent={() => {
            return <Text>Não existe Grupos disponiveis </Text>;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Group", {
                    _id: item._id,
                    tipo: "encerrado",
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
      )}
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

export default GroupsScreen;

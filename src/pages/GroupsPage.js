import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const GroupsPage = ({ navigation }) => {
  return (
    <View>
      <Text>groups page screen</Text>
      <Button
        onPress={() => navigation.navigate("Group")}
        title="Go to groups page"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default GroupsPage;

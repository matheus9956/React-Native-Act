import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const GroupsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>groups Screen screen</Text>
      <Button
        onPress={() => navigation.navigate("Group")}
        title="Go to groups Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default GroupsScreen;

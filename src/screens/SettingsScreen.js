import React from "react";
import { View, StyleSheet, Text, Button, Linking } from "react-native";

const handleEmaillPress = async () => {
  await Linking.openURL("mailto: matheus.matheus99@gmail.com");
};

const SettingsScreen = () => {
  return (
    <View>
      <Button title="email" onPress={handleEmaillPress} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SettingsScreen;

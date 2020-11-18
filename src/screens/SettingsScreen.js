import React from "react";
import { View, StyleSheet, Text, Button, Linking } from "react-native";

const handleEmaillPress = async () => {
  await Linking.openURL("mailto: actribeirao@gmail.com");
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

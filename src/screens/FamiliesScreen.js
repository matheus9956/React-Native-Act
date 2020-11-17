import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const FamiliesScreen = ({ navigation }) => {
  return (
    <View>
      <Text>families page screen</Text>

      <Button
        onPress={() => navigation.navigate("Family")}
        title="Go to family page"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FamiliesScreen;

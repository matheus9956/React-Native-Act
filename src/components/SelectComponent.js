import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RadioForm from "react-native-simple-radio-button";

const Select = ({ style, errors, touched, title, ...restProps }) => {
  return (
    <>
      <View style={style}>
        <Text
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            textTransform: "uppercase",
          }}
        >
          {title}
        </Text>
        <RadioForm {...restProps} />
      </View>
      {errors && touched && (
        <Text
          style={{
            fontSize: 14,
            color: "red",
            alignSelf: "center",
          }}
        >
          {errors}
        </Text>
      )}
    </>
  );
};

export default Select;

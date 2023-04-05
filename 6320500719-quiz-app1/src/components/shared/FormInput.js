import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../../constants/theme";
import { TextInput } from "react-native-gesture-handler";

const FormInput = ({
  lableText = "",
  placeholderText = "",
  onChangeText = null,
  value = null,
  ...more
}) => {
  return (
    <View style={{ width: "100%", marginBottom: 20 }}>
      <Text>{lableText}</Text>
      <TextInput
        style={{
          padding: 10,
          borderColor: COLORS.black,
          borderWidth: 1,
          width: "100%",
          borderRadius: 5,
          marginTop: 10,
        }}
        placeholder={placeholderText}
        onChangeText={onChangeText}
        value={value}
        {...more}
      ></TextInput>
    </View>
  );
};

export default FormInput;

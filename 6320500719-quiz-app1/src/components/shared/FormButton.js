import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/theme";
import { TextInput } from "react-native-gesture-handler";

const FormButton = ({
  lableText = "",
  handleOnPress = null,
  style,
  isPrimary = true,
  ...more
}) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        backgroundColor: isPrimary ? COLORS.primary : COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 5,
        ...style,
      }}
      activeOpacity={0.7}
      onPress={handleOnPress}
      {...more}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          backgroundColor: isPrimary ? COLORS.white : COLORS.primary,
        }}
      >
        {lableText}
      </Text>
    </TouchableOpacity>
  );
};

export default FormButton;

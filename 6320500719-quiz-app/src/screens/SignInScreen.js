import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = () => {};

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: COLORS.black,
          fontWeight: "bold",
          marginVertical: 32,
        }}
      >
        Sign In
      </Text>
      <FormInput lableText="Email" placeholder="enter your email" />
    </SafeAreaView>
  );
};

export default SignInScreen;

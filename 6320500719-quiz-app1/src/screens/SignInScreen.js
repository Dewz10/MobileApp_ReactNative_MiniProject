import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import FormInput from "../components/shared/FormInput";
import FormButton from "../components/shared/FormButton";
import signIn from "../Utils/auth";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = () => {
    if (email != "" && password != "") {
      signIn(email, password);
    }
  };

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
      <FormInput
        lableText="Email"
        placeholder="enter your email"
        onChangeText={(value) => setEmail(value)}
        value={email}
        keyboardType={"email-address"}
      />

      <FormInput
        lableText="Password"
        placeholder="enter your password"
        onChangeText={(value) => setPassword(value)}
        value={password}
        secureTextEntry={true}
      />
      <FormButton
        lableText="Submit"
        handleOnPress={handleOnSubmit}
        style={{ width: "100%" }}
      />
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 9 }}
      >
        <Text>Don't have an account?</Text>
        <Text
          style={{ marginLeft: 4, color: COLORS.primary }}
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          Create account
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

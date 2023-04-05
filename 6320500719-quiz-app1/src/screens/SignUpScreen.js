import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import FormInput from "../components/shared/FormInput";
import FormButton from "../components/shared/FormButton";
import { signUp } from "../Utils/auth";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnSubmit = () => {
    if (email != "" && password != "" && confirmPassword != "") {
      if (password == confirmPassword) {
        signUp(email, password);
      } else {
        Alert.alert("รหัสผ่านไม่ตรงกัน :(");
      }
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
        Sign Up
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

      <FormInput
        lableText="Confirm Password"
        placeholder="enter your confirm password"
        onChangeText={(value) => setConfirmPassword(value)}
        value={confirmPassword}
        secureTextEntry={true}
      />
      <FormButton
        lableText="Sign up"
        handleOnPress={handleOnSubmit}
        style={{ width: "100%" }}
      />

      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 9 }}
      >
        <Text>Already have an account?</Text>
        <Text
          style={{ marginLeft: 4, color: COLORS.primary }}
          onPress={() => navigation.navigate("SignInScreen")}
        >
          Sign in
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

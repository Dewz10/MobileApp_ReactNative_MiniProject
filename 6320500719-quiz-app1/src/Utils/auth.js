// import React from "react";
import auth from "@react-native-firebase/auth";
import { ToastAndroid } from "react-native/types";

export const signIn = (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      ToastAndroid.show("Logged in", ToastAndroid.SHORT);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signUp = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      ToastAndroid.show("Signed up", ToastAndroid.SHORT);
    })
    .catch((err) => {
      console.log(err);
    });
};

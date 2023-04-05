// import { Dimensions } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const COLORS = {
  primary: "#2B74D8",
  secondary: "F0F4F9",

  success: "#00DE46",
  error: "#ff4444",

  black: "#171313",
  white: "#FFFFFF",
  background: "FFFFFF",
  border: "#F5F5F7",
};

export const SIZES = {
  base: 10,
  windowWidth,
  windowHeight,
};

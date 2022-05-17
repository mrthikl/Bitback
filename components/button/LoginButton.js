import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

const LoginButton = (props) => {
  return (
    <TouchableOpacity style={[styles.loginButton, props.style]}>
      <Image style={styles.loginButtonImage} source={props.icon} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  loginButton: {
    borderRadius: 4,
    with: 64,
    height: 64,
    minWidth: 64,
    alignItems: "center",
    justifyContent: "center",
  },

  loginButtonImage: {
    width: 40,
    height: 40,
  },
});

export default LoginButton;

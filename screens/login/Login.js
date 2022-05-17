import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import styles from "./index.scss";
import { images, colors } from "../../constants";
import LangButton from "../../components/button/LangButton";
import LoginButton from "../../components/button/LoginButton";

const Login = () => {
  const [langButtonTypes, setLangButtonTypes] = useState([
    { title: "VN", isSelected: true },
    { title: "EN", isSelected: false },
  ]);
  const loginButtonGroup = [
    { style: { backgroundColor: `${colors.black}` }, icon: images.appleLogo },
    {
      style: { borderWidth: 1, borderColor: "rgba(15, 36, 71, 0.15)" },
      icon: images.gmailLogo,
    },
    { style: { backgroundColor: `${colors.blue}` }, icon: images.facebookLogo },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.homeTop]}>
        {langButtonTypes.map((langButtonType, index) => (
          <LangButton
            key={index}
            title={langButtonType.title}
            isSelected={langButtonType.isSelected}
            onPress={() => {
              setLangButtonTypes(
                langButtonTypes.map((eachLangButtonType) => {
                  console.log(eachLangButtonType);
                  return {
                    ...eachLangButtonType,
                    isSelected: eachLangButtonType.name == langButtonType.name,
                  };
                })
              );
            }}
          />
        ))}
      </View>

      <Image style={styles.logo} source={images.logo} />

      <View style={styles.homeBottom}>
        <Text style={{ marginBottom: 32 }}>Đăng nhập với</Text>
        <View style={styles.buttonGroup}>
          {loginButtonGroup.map((loginButton, index) => (
            <LoginButton
              key={index}
              style={loginButton.style}
              icon={loginButton.icon}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Login;

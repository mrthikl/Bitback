import React, { useState } from "react";
import { images, colors } from "../../constants";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const LangButton = (props) => {
  const { onPress, title, isSelected } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonLang,
        { backgroundColor: isSelected == true ? `${colors.pink}` : null },
      ]}
    >
      <Text
        style={{
          color: isSelected == true ? `${colors.white}` : null,
          fontSize: 12,
          textTransform: "uppercase",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonLang: {
    width: 32,
    height: 24,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LangButton;

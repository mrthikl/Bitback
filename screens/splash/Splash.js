import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./index.scss";
import { images } from "../../constants";
const splash = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={images.logo} />
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>Bitback</Text>
    </View>
  );
};

export default splash;

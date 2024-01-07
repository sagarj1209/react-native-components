import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppText from "./AppText";

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <AppText>{title}</AppText>
      <AppText>{subTitle}</AppText>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 400,
    width: 400,
  },
});

import { Platform, StyleSheet, Text } from "react-native";
import React from "react";

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",

    //Platform specific styling...
    // ...Platform.select({
    //   ios: {
    //     fontSize: 20,
    //     fontFamily: "Avenir",
    //   },
    //   android: {
    //     fontSize: 18,
    //     fontFamily: "Roboto",
    //   },
    // }),
  },
});

export default AppText;

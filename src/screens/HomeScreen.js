import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.card}></View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
  },
});

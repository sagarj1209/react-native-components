import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";

export default function ListingDetailsScreen() {
  return (
    <SafeAreaView>
      <Image
        source={require("../assets/photo.jpg")}
        style={styles.image}
        // resizeMode="contain"
      />
      <View style={styles.detailsContainer}>
        <Text>This is Logo of PressX</Text>
        <Text>Description</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 400,
  },
});

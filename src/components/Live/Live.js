import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

const Live = () => {
  return (
    <View style={styles.container}>
      <LottieView style={styles.live} source={require("../../assets/Icons/live.json")} autoPlay />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100, height: 100,
  },
  live: {
    justifyContent: "flex-start",
  },
});

export default Live;

import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./CountryCard.styles";

const CountryCard = ({ country, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.i_container}>
          <Image style={styles.flag} source={{ uri: country.countryInfo.flag }} />
        </View>
        <Text style={styles.text}>{country.country}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CountryCard;

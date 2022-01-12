import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./CountryPage.styles";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch";
import CountryCard from "../../components/CountryCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const CountryPage = ({ navigation }) => {
  const { data, error, loading } = useFetch(Config.API_Url);
  if (data) {
    const handlePress = (item) => {
      navigation.navigate("Details", { item });
    };
    const renderCountry = ({ item }) => {
      return <CountryCard country={item} onSelect={() => handlePress(item)} />;
    };
    if (loading) return <Loading />;
    if (error) return <Error />;
    return (
      <View style={styles.container}>
        <FlatList data={data} renderItem={renderCountry} />
      </View>
    );
  }
};
export default CountryPage;

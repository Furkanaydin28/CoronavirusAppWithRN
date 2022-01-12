import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./DetailPage.styles";
import Config from "react-native-config";
import Live from "../../components/Live";
import AutoHeightImage from "react-native-auto-height-image";
import { Link, NativeBaseProvider } from "native-base";

const DetailPage = ({ route }) => {
  const { item } = route.params;
  return (
    <NativeBaseProvider>
      <ScrollView style={styles.container}>
        <View style={styles.flag_cont}>
          <AutoHeightImage width={320} style={styles.flag} source={{ uri: item.countryInfo.flag }} />
        </View>
        <View style={styles.live}>
          <Live />
          <Text style={styles.live_text}>
            Canlı Güncelleniyor...
          </Text>
        </View>
        <View style={styles.info_container}>
          <Text style={styles.text}>Yeni Vaka Sayısı: {item.todayCases}</Text>
          <Text style={styles.text}>Toplam Vaka Sayısı: {item.cases}</Text>
        </View>
        <View style={styles.info_container}>
          <Text style={styles.text}>Yeni İyileşen Sayısı: {item.todayCases}</Text>
          <Text style={styles.text}>Toplam İyileşen Sayısı: {item.cases}</Text>
        </View>
        <View style={styles.info_container}>
          <Text style={styles.text}>Aktif Vaka Sayısı: {item.active}</Text>
          <Text style={styles.text}>Kritik Vaka Sayısı: {item.critical}</Text>
        </View>
        <View style={styles.info_container}>
          <Text style={styles.text}>Test Sayısı: {item.tests}</Text>
        </View>
        <View style={styles.info_container}>
          <Text style={styles.text}>Yeni Ölüm Sayısı: {item.todayRecovered}</Text>
          <Text style={styles.text}>Toplam Ölüm Sayısı: {item.recovered}</Text>
        </View>
        <View style={styles.link_wrap}>
          <Link isExternal href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
            <Text style={styles.link}>Dünya Sağlık Örgütü Sitesine Git </Text>
          </Link>
        </View>
      </ScrollView>

    </NativeBaseProvider>
  );
};
export default DetailPage;

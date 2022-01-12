import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CountryPage from "./pages/CountryPage";
import DetailPage from "./pages/DetailPage";

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Countries" component={CountryPage} options={{
          title: "Ülkeler",
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: { color: "white" },
          headerTitleAlign: "center",
        }} />
        <Stack.Screen name="Details" component={DetailPage} options={{
          title: "Ülke Detayı",
          headerTitleAlign: "center",
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

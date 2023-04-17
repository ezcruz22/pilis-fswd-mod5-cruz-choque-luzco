import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/home/HomeScreen";

const LocationListStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LocationListStack.Navigator screenOptions={{ headerShown: false }}>
        <LocationListStack.Screen name="Home" component={HomeScreen} />
      </LocationListStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

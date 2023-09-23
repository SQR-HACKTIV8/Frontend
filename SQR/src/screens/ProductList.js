import React from "react";
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { recommdedImage } from "../assets/assests";
import CardList from "../components/CardList";

export default function ProductList({ navigation, route }) {
  const { category } = route.params;
  const dataLength = recommdedImage.length;
//   let itemWidth = dataLength > 2 ? "50%" : "100%";

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
          }}
        >
          <Pressable onPress={() => navigation.goBack()} style={{ flex: 1 }}>
            <FontAwesome name={"arrow-circle-left"} size={30} color="black" />
          </Pressable>

          <View style={{ flex: 2, alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{category}</Text>
          </View>

          <Pressable
            onPress={() => navigation.goBack()}
            style={{ flex: 1, alignItems: "flex-end" }}
          >
            <FontAwesome name={"heart-o"} size={28} color="black" />
          </Pressable>
        </View>

          <CardList/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingVertical: 10,
  },
  cardRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 15,
  },
  cardContainer: {
    width: 100,
    overflow:"hidden",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  bannerHomeLarge: {
    width: "100%",
    height: 150,
  },
  cardText: {
    padding: 5,
    fontWeight: "bold",
  },
  descriptionText: {
    paddingHorizontal: 5,
    color: "#808080",
  },
});

import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { qurbanType } from "../assets/assests";
import { useNavigation } from "@react-navigation/native";

export default function QurbanType() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={styles.cardContainer}
            onPress={() =>
              navigation.navigate("ProductList", { category: "Kambing" })
            }
          >
            <Image
              source={{
                uri: `https://i.ibb.co/ydSDhJd/484-4843725-gambar-kepala-kambing-kartun-hd-png-download-removebg-preview.png`,
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>KAMBING</Text>
          </Pressable>
          <Pressable
            style={styles.cardContainer}
            onPress={() =>
              navigation.navigate("ProductList", { category: "Sapi" })
            }
          >
            <Image
              source={{
                uri: `https://i.ibb.co/ssZZ2M3/pngtree-big-black-bangs-black-and-white-cow-head-png-image-7163573-removebg-preview.png`,
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>SAPI</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 230,
    height: 100,
    backgroundColor: "#D0E7D2",
    marginTop: 10,
    marginEnd: 16,
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  cardText: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});

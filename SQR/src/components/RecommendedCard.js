import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { rupiah } from "../hooks/rupiahConvert";
export default function RecommendedCard({ qurbans }) {
  const navigation = useNavigation();

  if (!qurbans || qurbans.length === 0) {
    return <Text>No recommended qurbans available.</Text>;
  }
  
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", overflow: "hidden" }}>
          {qurbans.map((e, i) => (
            <Pressable
              key={i}
              style={styles.cardContainer}
              onPress={() =>
                navigation.navigate("ProductDetail", { qurbanId: e.id })
              }
            >
              <Image
                source={{
                  uri: `${e.imageUrl1}`,
                }}
                style={styles.bannerHome}
              />
              <View style={styles.textContainer}>
                <Text style={styles.cardText} numberOfLines={1}>
                  {e.name}
                </Text>
                <Text style={styles.descriptionText} numberOfLines={2}>
                  {e.description}
                </Text>
                <Text style={styles.priceText}>
                  {rupiah(e.price)} / {e.weight}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 16,
  },

  bannerHome: {
    width: 150,
    height: 150,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },

  textContainer: {
    padding: 5,
    width: 150,
  },

  cardText: {
    fontWeight: "bold",
  },

  descriptionText: {
    color: "#808080",
  },

  priceText: {
    color: "#808080",
  },
});

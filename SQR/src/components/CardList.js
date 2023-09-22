import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { recommdedImage } from "../assets/assests";
import { useNavigation } from "@react-navigation/native";

export default function CardList() {
  const navigation = useNavigation()
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.cardRow}>
        {recommdedImage.map((item, index) => (
          <Pressable
            onPress={() => navigation.navigate("ProductDetail", { qurbanId: item.id })}
            key={index}
            style={[styles.cardContainer, { width: 180, margin: 5 }]}
          >
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.bannerHomeLarge}
            />
            <Text style={styles.cardText}>{item.title}</Text>
            <Text style={styles.descriptionText} numberOfLines={1}>
              {item.description}
            </Text>
            <Text style={styles.cardText}>
              {item.price}/ {item.weight} KG
            </Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
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
    overflow: "hidden",
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

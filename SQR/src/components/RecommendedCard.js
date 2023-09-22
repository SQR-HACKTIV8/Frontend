import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { bannerImage, recommdedImage } from "../assets/assests";

export default function RecommendedCard() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
          {recommdedImage.map((e, i) => {
            return (
              <View key={i}>
                <Image
                  source={{
                    uri: `${e.imageUrl}`,
                  }}
                  style={styles.bannerHome}
                />
                <View>
                  <Text style={styles.cardText}>{e.title}</Text>
                  <Text style={{ paddingHorizontal: 5, color: "#808080" }}>
                    {e.description}
                  </Text>
                  <Text style={{ paddingHorizontal: 5, color: "#808080" }}>
                    {e.price}/ {e.weight} KG
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerHome: {
    width: 150,
    height: 150,
    backgroundColor: "#fff",
    marginTop: 10,
    marginEnd: 16,
    borderRadius: 10,
    overflow: "hidden",
  },

  cardText: {
    padding: 5,
    fontWeight: "bold",
  },
});

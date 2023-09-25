import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, ActivityIndicator, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addCartDetail, addToCart, fetchOneQurban } from "../stores/action";
import { colors } from "../assets/assests";
import YoutubePlayer from "react-native-youtube-iframe";
import { FontAwesome } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DropdownSelect from "react-native-input-select";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProductDetail({ route, navigation }) {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [playing, setPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Akasia");
  const [onBehalfOf, setOnBehalfOf] = useState("");
  const { qurbanId } = route.params;
  const oneQurban = useSelector((state) => {
    return state.oneQurban;
  });
  const videoUrl = oneQurban?.videoUrl || "";
  const videoId = videoUrl.split("/").pop();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleBasketDetail = (item) => {
    dispatch(addCartDetail(item));
  };

  const handleBack = () => {
    try {
      handleBasketDetail({
        onBehalfOf: onBehalfOf,
        name: oneQurban.name,
        price: oneQurban.price,
        imageUrl: oneQurban.imageUrl1,
      });
      handleAddToCart({
        QurbanId: oneQurban.id,
        onBehalfOf: onBehalfOf,
        treeType: selectedOption,
      });

      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };
  const screenWidth = Dimensions.get("window").width;

  const containerWidht = screenWidth < 450 ? 370 : 430;
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    dispatch(fetchOneQurban(qurbanId));
  }, []);

  const options = ["Akasia", "Pinus", "Cemara", "Edelweis"];

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <ActivityIndicator size="large" color={colors.COLOR_PRIMARY} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          {isLoading ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <ActivityIndicator size="large" color={colors.COLOR_PRIMARY} />
            </View>
          ) : (
            <ScrollView>
              {/* Header */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingStart: 20,
                  paddingEnd: 20,
                  paddingTop: 10,
                }}
              >
                <TouchableOpacity onPress={handleBack}>
                  <FontAwesome name={"arrow-circle-left"} size={28} color="black" />
                </TouchableOpacity>
                <FontAwesome name={"heart-o"} size={26} color="black" />
              </View>

              {/* Product Details */}
              <View style={{ padding: 16 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                  {[oneQurban.imageUrl1, oneQurban.imageUrl2, oneQurban.imageUrl3].map((imageUrl, index) => (
                    <Image
                      key={index}
                      source={{ uri: imageUrl }}
                      style={{
                        width: 300,
                        height: 300,
                        resizeMode: "contain",
                        borderRadius: 20,
                        marginHorizontal: 10,
                      }}
                    />
                  ))}
                </ScrollView>
                <Text style={{ paddingTop: 10, fontSize: 24, fontWeight: "bold" }}>{oneQurban.name}</Text>
                <Text style={{ fontSize: 17, fontWeight: "500", color: "#808080", marginTop: 0 }}>
                  Rp. {oneQurban.price}/{oneQurban.weight}
                </Text>

                {/* Description */}
                <View style={{ borderRadius: 10, marginTop: 20, marginBottom: 5, flex: 1, backgroundColor: "#97CF8A", alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ paddingStart: 10, paddingEnd: 10, marginVertical: 15, fontSize: 16, marginTop: 16 }}>{oneQurban.description}</Text>
                </View>

                {isFocused ? (
                  <TextInput
                    style={{
                      height: 40,
                      borderColor: "gray",
                      borderWidth: 1,
                      marginTop: 20,
                      paddingLeft: 10,
                      borderRadius: 10,
                      marginBottom: 10,
                    }}
                    placeholder="On Behalf Of"
                    value={onBehalfOf}
                    onChangeText={(text) => setOnBehalfOf(text)}
                  />
                ) : null}

                {/* YouTube Video */}
                <View style={{ marginTop: 16 }}>{isFocused ? <YoutubePlayer height={200} play={playing} videoId={videoId} /> : null}</View>

                {/* Tree Type Picker */}
                <View style={{ marginTop: 30 }}>
                  <Text style={{ fontSize: 18 }}>Select Tree Type:</Text>
                  <View style={{ marginBottom: -36 }}>
                    <DropdownSelect
                      label="Country"
                      placeholder="Select an option..."
                      options={options.map((v) => ({ label: v, value: v }))}
                      selectedValue={selectedOption}
                      onValueChange={(value) => setSelectedOption(value)}
                      primaryColor={"green"}
                    />
                  </View>
                </View>
              </View>

              {/* Add to Basket Button */}
              <TouchableOpacity
                onPress={() => {
                  handleBasketDetail({
                    name: oneQurban.name,
                    price: oneQurban.price,
                    imageUrl: oneQurban.imageUrl1,
                    onBehalfOf: onBehalfOf,
                  });
                  handleAddToCart({
                    QurbanId: oneQurban.id,
                    onBehalfOf: onBehalfOf,
                    treeType: selectedOption,
                  });
                  navigation.navigate("Home");
                }}
                style={{
                  backgroundColor: colors.COLOR_PRIMARY,
                  margin: 16,
                  padding: 16,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialCommunityIcons name="basket-plus" size={26} color="#fff" />
                  <Text style={{ marginStart: 10, color: "white", fontSize: 18, fontWeight: "bold" }}>Add to Basket</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

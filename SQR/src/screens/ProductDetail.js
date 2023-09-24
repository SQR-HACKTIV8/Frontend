import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  Alert,
  Button,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import YoutubePlayer from "react-native-youtube-iframe";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../assets/assests";
import { recommdedImage } from "../assets/assests";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneQurban } from "../stores/action";

export default function ProductDetail({ route, navigation }) {
  const dispatch = useDispatch();
  const [playing, setPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Akasia");
  console.log(selectedOption);
  const { qurbanId } = route.params;
  const oneQurban = useSelector((state) => {
    return state.oneQurban;
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    dispatch(fetchOneQurban(qurbanId));
  }, []);

  const videoUrl = oneQurban?.videoUrl || "";
  const videoId = videoUrl.split("/").pop();

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("Video telah selesai diputar!");
    }
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
    <View style={{ backgroundColor: colors.COLOR_PRIMARY, flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
          <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
            <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
          </Pressable>

          <FontAwesome name={"heart-o"} size={28} color="white" />
        </SafeAreaView>
      </SafeAreaProvider>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 2,
          marginTop: 0,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            height: 300,
            width: 300,
            position: "absolute",
            top: -250,
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            {[
              oneQurban.imageUrl1,
              oneQurban.imageUrl2,
              oneQurban.imageUrl3,
            ].map((imageUrl, index) => (
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
        </View>

        <Text style={{ marginTop: 60, fontSize: 24, fontWeight: "bold" }}>
          {oneQurban.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#808080",
            width: 350,
            textAlign: "center",
          }}
        >
          RP. {oneQurban.price} / {oneQurban.weight} KG
        </Text>

        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginTop: 16,
              width: 350,
              borderBottomWidth: 1,
              borderBottomColor: colors.COLOR_PRIMARY,
              textAlign: "left",
            }}
          >
            Description:
          </Text>
          <Text
            style={{
              fontSize: 18,
              width: 350,
              textAlign: "left",
              marginBottom: 16,
            }}
          >
            {oneQurban.description}
          </Text>
          <View
            style={{
              borderRadius: 10,
              borderBottomEndRadius: 10,
              borderBottomLeftRadius: 10,
              overflow: "hidden",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            <YoutubePlayer
              height={200}
              play={playing}
              videoId={videoId}
              onChangeState={onStateChange}
            />
          </View>

          <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
            <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}>
              We plant trees where they’re needed the most
            </Text>
            <Picker
              selectedValue={selectedOption}
              onValueChange={(itemValue) => setSelectedOption(itemValue)}
              style={{
                width: 370,
                borderWidth: 1,
                borderColor: colors.COLOR_PRIMARY,
                borderRadius: 5,
                marginTop: 16,
                backgroundColor: "white",
              }}
            >
              {options.map((option, index) => (
                <Picker.Item
                  key={index}
                  label={option}
                  value={option}
                />
              ))}
            </Picker>

            <View
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                width: 350,
              }}
            >
              <Text
                style={{
                  marginTop: 16,
                  fontSize: 16,
                  width: 350,
                  textAlign: "left",
                }}
              >
                Tujuan Reboisasi: Reboisasi di hutan Bromo bertujuan utama untuk
                memulihkan ekosistem yang telah terganggu akibat aktivitas
                manusia dan perubahan iklim. Upaya ini juga bertujuan untuk
                mengurangi erosi tanah, mempertahankan keanekaragaman hayati,
                dan menjaga kualitas air
              </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("History")}
                style={{
                  backgroundColor: colors.COLOR_PRIMARY,
                  marginTop: 50,
                  borderRadius: 18,
                  paddingVertical: 18,
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}
                >
                  Add to Basket
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

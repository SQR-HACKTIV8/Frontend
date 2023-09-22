import { Image, Pressable, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


export default function Header() {
  return (
    <>
      <Image
        source={{
          uri: "https://i.ibb.co/Nm8LW9j/logo-home-screen-removebg-preview.png",
        }}
        style={{
          width: 150,
          height: 30,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          marginLeft: "auto",
          marginRight: 16,
        }}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginRight: 12 }}
        >
          <FontAwesome name="bell-o" size={28} color="black" />
        </Pressable>
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesome name={"shopping-basket"} size={28} color="black" />
        </Pressable>
      </View>
    </>
  );
}

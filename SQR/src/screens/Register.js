import { Text, View, Image, TextInput, TouchableOpacity, Animated, Easing } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../assets/assests";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RegisterScreen({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.COLOR_PRIMARY }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.5, backgroundColor: colors.COLOR_PRIMARY }}>
            <View style={{ alignItems: "center", marginVertical: -35 }}>
              <Image style={{ width: 350, height: 350 }} source={require("../assets/goat_login.png")} />
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 5 }}>
            <View style={{ flexDirection: "row", paddingStart: 30, paddingEnd: 30 }}>
              <View style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#F5F5F5", height: 55, marginVertical: 10, paddingHorizontal: 10 }}>
                <Ionicons name="person" size={28} color="#b0aeae" />
              </View>
              <TextInput placeholder="Username" style={{ fontSize: 15, fontWeight: "400", borderTopRightRadius: 10, borderBottomRightRadius: 10, flex: 1, backgroundColor: "#F5F5F5", marginVertical: 10, height: 55 }} />
            </View>
            <View style={{ flexDirection: "row", paddingStart: 30, paddingEnd: 30 }}>
              <View style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#F5F5F5", height: 55, marginVertical: 10, paddingHorizontal: 10 }}>
                <MaterialIcons name="email" size={30} color="#b0aeae" />
              </View>
              <TextInput placeholder="Email" style={{ fontSize: 15, fontWeight: "400", borderTopRightRadius: 10, borderBottomRightRadius: 10, flex: 1, backgroundColor: "#F5F5F5", marginVertical: 10, height: 55 }} />
            </View>
            <View style={{ flexDirection: "row", paddingStart: 30, paddingEnd: 30 }}>
              <View style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#F5F5F5", height: 55, marginVertical: 10, paddingHorizontal: 10 }}>
                <FontAwesome name="lock" size={30} color="#b0aeae" />
              </View>
              <TextInput placeholder="Password" style={{ fontSize: 15, fontWeight: "400", borderTopRightRadius: 10, borderBottomRightRadius: 10, flex: 1, backgroundColor: "#F5F5F5", marginVertical: 10, height: 55 }} />
            </View>
            <View style={{ flexDirection: "row", paddingStart: 30, paddingEnd: 30 }}>
              <View style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#F5F5F5", height: 55, marginVertical: 10, paddingHorizontal: 10 }}>
                <FontAwesome name="phone" size={30} color="#b0aeae" />
              </View>
              <TextInput placeholder="Phone Number" style={{ fontSize: 15, fontWeight: "400", borderTopRightRadius: 10, borderBottomRightRadius: 10, flex: 1, backgroundColor: "#F5F5F5", marginVertical: 10, height: 55 }} />
            </View>
            <View style={{ flexDirection: "row", paddingStart: 30, paddingEnd: 30 }}>
              <View style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#F5F5F5", height: 55, marginVertical: 10, paddingHorizontal: 10 }}>
                <MaterialCommunityIcons name="file-image-plus" size={30} color="#b0aeae" />
              </View>
              <TextInput placeholder="Image Url" style={{ fontSize: 15, fontWeight: "400", borderTopRightRadius: 10, borderBottomRightRadius: 10, flex: 1, backgroundColor: "#F5F5F5", marginVertical: 10, height: 55 }} />
            </View>

            <View style={{ paddingStart: 30, paddingEnd: 30, marginVertical: -30 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={{
                  backgroundColor: colors.COLOR_PRIMARY,
                  marginTop: 50,
                  borderRadius: 18,
                  paddingVertical: 18,
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>Start Save the Earth</Text>
              </TouchableOpacity>
            </View>
            <View style={{ paddingStart: 30, paddingEnd: 30, marginVertical: 50 }}>
              <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}>
                already have an account ?{" "}
                <Text onPress={() => navigation.navigate("Login")} style={{ color: colors.COLOR_PRIMARY }}>
                  Login
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

{
  /* <Text style={{ fontWeight: "bold", fontSize: 20 }}>Your Password</Text> */
}

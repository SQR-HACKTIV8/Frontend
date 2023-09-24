import { Text, View, Image, TextInput, TouchableOpacity, Animated, Easing } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../assets/assests";
import { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [login, setLogin] = useState({ email: "", password: "" });

  const onChangeLogin = ({ target }) => {
    const { name, value } = target;
    setLogin({ ...login, [name]: value });
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.COLOR_PRIMARY }}>
      <SafeAreaProvider>
        <SafeAreaView>
          <View style={{ alignItems: "center", marginVertical: 30 }}>
            <Image style={{ width: 350, height: 350 }} source={require("../assets/goat_login.png")} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ padding: 30 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>What is your Email ?</Text>
          <TextInput textAlign="center" placeholder="Email" style={{ backgroundColor: "#F5F5F5", marginVertical: 10, height: 55, borderRadius: 10 }} />
        </View>
        <View style={{ paddingStart: 30, paddingEnd: 30, marginVertical: -25 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Your Password</Text>
          <TextInput textAlign="center" placeholder="Password" style={{ backgroundColor: "#F5F5F5", marginVertical: 10, height: 55, borderRadius: 10 }} />
        </View>
        <View style={{ paddingStart: 30, paddingEnd: 30 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
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
        <View style={{ paddingStart: 30, paddingEnd: 30, marginVertical: 20 }}>
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
            create an account ?{" "}
            <Text onPress={() => navigation.navigate("Register")} style={{ color: colors.COLOR_PRIMARY }}>
              Sing up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

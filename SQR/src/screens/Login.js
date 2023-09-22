import { Text, View, Image, TextInput, TouchableOpacity, Animated, Easing } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../assets/assests";

export default function LoginScreen() {
  const position = new Animated.ValueXY({ x: 0, y: 0 });
  Animated.timing(position, {
    toValue: { x: -30, y: 0 },
    duration: 2000,
    useNativeDriver: true,
    easing: Easing.inOut(Easing.ease),
  }).start;

  return (
    <View style={{ flex: 1, backgroundColor: colors.COLOR_PRIMARY }}>
      <SafeAreaProvider>
        <SafeAreaView>
          <Animated.View style={{ transform: [{ translateY: position.x }, { translateY: position.y }], alignItems: "center", marginTop: 30 }}>
            <Image source={require("../assets/goat2.png")} style={{ width: 250, height: 250 }} />
          </Animated.View>
          <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 21 }}>Sustainable Qurban & Reforestation</Text>
          <View style={{ alignItems: "center", marginTop: -80 }}>
            <Image source={require("../assets/floor2.png")} style={{ width: 360, height: 120 }} />
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
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>create an account ?</Text>
        </View>
      </View>
    </View>
  );
}

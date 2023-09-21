import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../assets/assests";

export default function Home({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>HELLO</Text>

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
          <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>Let's Go</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

import React from "react";
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <Text>HALllo</Text>
        <Text>HALllo</Text>
        <Text>HALllo</Text>
        <Text>HALllo</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

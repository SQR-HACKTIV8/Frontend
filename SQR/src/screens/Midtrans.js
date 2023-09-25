import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";

export default function Midtrans() {
  const tokenMidtrans = useSelector((state) => {
    return state.tokenMidtrans;
  });
  
  console.log(tokenMidtrans, "disini token");
  return (
    <Layout>
      <>
        <WebView
          source={{
            uri: tokenMidtrans,
          }}
          style={{ flex: 1 }}
        />
      </>
    </Layout>
  );
}

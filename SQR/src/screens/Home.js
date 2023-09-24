import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../assets/assests";
import Header from "../components/Header";
import Banner from "../components/Banner";
import RecommendedCard from "../components/RecommendedCard";
import QurbanType from "../components/QurbanTypes";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncCategorySuccess, fetchCategory, fetchHabit, fetchQurbans } from "../stores/action";
import useFetch from "../hooks/useFetch";

export default function Home({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  // const { data, loading, refetchData } = useFetch()
  // console.log(data)
  const dispatch = useDispatch();

  const categories = useSelector((state) => {
    return state.categories
  })
  const qurbans = useSelector((state) => {
    return state.qurbans
  })
  
  useEffect(() => {
    // dispatch(fetchHabit())
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);


  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchQurbans())
  }, []);


  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flexDirection: "column", marginHorizontal: 16 }}>
        {isLoading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: "100%" }}
          >
            <ActivityIndicator style={{alignItems: "center", justifyContent:"center"}} size="large" color={colors.COLOR_PRIMARY} />
          </View>
        ) : (
          <>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Header />
            </View>
            <View style={{ marginTop: 50 }}>
              <Banner />
            </View>
            <View style={{ marginTop: 50 }}>
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Recommended
              </Text>
              <RecommendedCard qurbans={qurbans} />
            </View>
            <View style={{ marginTop: 50 }}>
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Browse Qurban Type
              </Text>
              <QurbanType />
            </View>
          </>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../assets/assests";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderList } from "../stores/action";
import dateFormat from "../hooks/dateFormat";

const ProfilePage = ({ navigation }) => {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => {
    return state.orderList;
  });

  console.log(orderList, "di page");

  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({
    username: null,
    userId: null,
    phoneNumber: null,
    imageUrl: null,
    email: null,
  });

  const handleLogout = async () => {
    try {
      await AsyncStorage.multiRemove([
        "access_token",
        "username",
        "userId",
        "phoneNumber",
        "imageUrl",
        "email",
      ]);
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(async () => {
      let usertoken;
      try {
        usertoken = await AsyncStorage.getItem("access_token");
        const username = await AsyncStorage.getItem("username");
        const userId = await AsyncStorage.getItem("userId");
        const phoneNumber = await AsyncStorage.getItem("phoneNumber");
        const imageUrl = await AsyncStorage.getItem("imageUrl");
        const email = await AsyncStorage.getItem("email");

        setUserData({
          username,
          userId,
          phoneNumber,
          imageUrl,
          email,
        });
      } catch (error) {
        console.log(error);
      }

      if (!usertoken) {
        navigation.navigate("Login");
      }
      dispatch(fetchOrderList(usertoken));
      setIsLoading(false);
    }, 200);
  }, []);

  return (
    <>
      <SafeAreaProvider style={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()}>
              <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
            </Pressable>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={[styles.headerText, { textAlign: "center" }]}>
                Profile
              </Text>
            </View>
          </View>
          <View style={styles.profileInfo}>
            <Image
              source={{
                uri:
                  userData.imageUrl ||
                  "https://i.ibb.co/nwp5jr0/logo-tanpa-text.png",
              }}
              style={styles.profileImage}
            />
            <View style={styles.profileDetails}>
              <Text style={styles.username}>
                {userData.username || "Nama Pengguna"}
              </Text>
              <Text style={styles.email}>
                {userData.email || "email@example.com"}
              </Text>
            </View>
          </View>
          <View style={styles.orderListContainer}>
            <Text style={styles.orderListHeader}>Daftar Pesanan</Text>
            <FlatList
              data={orderList}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.orderItem}>
                  <Text style={styles.orderNumber}>Order #{item.OrderId}</Text>
                  <Text style={styles.orderDate}>
                    Tanggal: {dateFormat(item.updatedAt)}
                  </Text>
                  <Text style={styles.orderAmount}>
                    Total: Rp{item.totalPrice}
                  </Text>
                </View>
              )}
            />
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.COLOR_PRIMARY,
  },
  header: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: colors.COLOR_PRIMARY,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F5F5F5",
    textAlign: "center",
  },
  profileInfo: {
    backgroundColor: "white",
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileDetails: {
    flex: 1,
    marginLeft: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  email: {
    fontSize: 18,
    color: "#808080",
  },
  logoutButton: {
    backgroundColor: "red",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  logoutButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  orderListContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  orderListHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  orderItem: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  orderNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  orderDate: {
    fontSize: 16,
    color: "#808080",
  },
  orderAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007BFF",
  },
});

export default ProfilePage;

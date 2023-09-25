import React, { useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../assets/assests";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

const MyBasketScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  const cartItems = useSelector((state) => state.cartItems);
  const basket = useSelector((state) => state.basket);

  const totalAmount = basket.reduce((total, item) => {
    return total + item.price;
  }, 0);


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
                My Basket
              </Text>
            </View>
          </View>
          <ScrollView style={styles.content}>
            {basket.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.itemImage}
                />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemQuantity}>1 ekor</Text>
                </View>
                <View style={styles.itemPrice}>
                  <Text style={styles.itemPriceText}>{rupiah(item.price)}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>{rupiah(totalAmount)}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.checkoutButton}
        >
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
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
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: 2,
    width: 90,
    borderRadius: 18,
  },
  backButtonText: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F5F5F5",
    textAlign: "center",
  },
  content: {
    flex: 1,
    backgroundColor: "white",
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#F4F4F4",
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  itemImage: {
    width: 50,
    height: 50,
    marginEnd: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontWeight: "bold",
  },
  itemQuantity: {
    fontWeight: "400",
  },
  itemPrice: {
    width: 120,
  },
  itemPriceText: {
    fontWeight: "600",
  },
  footer: {
    backgroundColor: colors.COLOR_LIGHT,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  totalContainer: {
    alignItems: "flex-start",
  },
  totalLabel: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
  totalAmount: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
  checkoutButton: {
    backgroundColor: colors.COLOR_PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 18,
    width: 200,
    borderRadius: 10,
  },
  checkoutButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
});

export default MyBasketScreen;
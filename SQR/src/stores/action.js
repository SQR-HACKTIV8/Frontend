const BASE_URL = "https://2ad5-103-156-165-21.ngrok-free.app/";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

export const fetchCategory = () => {
  return async (dispatch) => {
    try {
      // console.log("masuk kesini");
      const response = await axios.get(BASE_URL + "categories");
      // console.log("lewat axios")
      if (response.status !== 200) {
        throw new Error("Fetch Failed");
      }

      const data = response.data;
      const action = {
        type: "categories/fetchSuccess",
        payload: data,
      };
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
};

export const fetchQurbans = () => {
  return async (dispatch) => {
    try {
      // console.log("masuk kesini");
      const response = await axios.get(BASE_URL + "qurbans");
      // console.log("lewat axios")
      if (response.status !== 200) {
        throw new Error("Fetch Failed");
      }

      const data = response.data;
      const action = {
        type: "qurbans/fetchSuccess",
        payload: data,
      };
      // console.log(data , " di action")
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
};

export const fetchOneQurban = (id) => {
  return async (dispatch) => {
    try {
      // console.log("masuk kesini");
      const response = await axios.get(BASE_URL + "qurbans/" + id);
      // console.log("lewat axios")
      if (response.status !== 200) {
        throw new Error("Fetch Failed");
      }

      const data = response.data;
      const action = {
        type: "qurbans/fetchOneQurban",
        payload: data,
      };
      // console.log(data , " di action")
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
};

export const fetchQurbanByType = (filter) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(BASE_URL + "qurbans?filter=" + filter);
      if (response.status !== 200) {
        throw new Error("Fetch Failed");
      }

      const data = response.data;
      const action = {
        type: "qurbans/fetchByTypeSuccess",
        payload: data,
      };
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
};

export const checkoutBasket = (input) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: BASE_URL + "orders",
        method: "post",
        data: input,
        headers: {
          access_token: await AsyncStorage.getItem("access_token"),
        },
      });
      console.log(response.data);
      const result = await axios({
        url: BASE_URL + "token-midtrans",
        method: "post",
        data: {
          OrderId: response.data.findNewOrder.OrderId,
          totalPrice: response.data.findNewOrder.totalPrice,
        },
        headers: {
          access_token: await AsyncStorage.getItem("access_token"),
        },
      });
      const action = {
        type: "token/addSuccess",
        payload: result.data.redirect_url,
      };
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
};

export const clearCart = () => {
  return {
    type: "cart/clearCart",
  };
};

export const register = (input) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: BASE_URL + "register",
        method: "post",
        data: input,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
};

export const loginData = (input) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: BASE_URL + "login",
        method: "post",
        data: input,
      });
      await AsyncStorage.setItem("access_token", response.data.access_token);
      await AsyncStorage.setItem("username", response.data.customer.username);
      await AsyncStorage.setItem("userId", String(response.data.customer.id));
      await AsyncStorage.setItem(
        "phoneNumber",
        response.data.customer.phoneNumber
      );
      await AsyncStorage.setItem("imageUrl", response.data.customer.imageUrl);
      await AsyncStorage.setItem("email", response.data.customer.email);
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
};

export const fetchOrderList = (input) => {
  return async (dispatch) => {
    try {
      // console.log("masuk kesini");
      const response = await axios({
        url: BASE_URL + "orders",
        method: "get",
        headers: {
          access_token: input
        }
      });
      // console.log("lewat axios")
      if (response.status !== 200) {
        throw new Error("Fetch Failed");
      }

      const data = response.data;
      const action = {
        type: "orderList/fetchSuccess",
        payload: data,
      };
      console.log(data)
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
};

export const addCartDetail = (item) => ({
  type: "ADD_TO_CART_DETAIL",
  payload: item,
});

export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: "REMOVE_FROM_CART",
  payload: itemId,
});

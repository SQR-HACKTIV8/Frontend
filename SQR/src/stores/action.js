const BASE_URL = "https://7168-123-253-233-150.ngrok-free.app/";
import axios from "axios";

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

export const login = (payload) => {
  return async () => {
    try {
      const response = await fetch("http:localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw { message: "something wrong!" };
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
      throw err;
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
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk1NTQ0NDA3fQ.kTwxeqodSbetqZJUajHbjWH3ZRPK1d37roqJGR85F-4",
        },
      });
      console.log(response.data)
      const result = await axios({
        url: BASE_URL + "token-midtrans",
        method: "post",
        data: {
          OrderId: response.data.findNewOrder.OrderId,
          totalPrice: response.data.findNewOrder.totalPrice,
        },
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk1NTQ0NDA3fQ.kTwxeqodSbetqZJUajHbjWH3ZRPK1d37roqJGR85F-4",
        },
      });
      console.log(response.data.totalPrice)
      // console.log(result.data.redirect_url);
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

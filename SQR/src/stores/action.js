const BASE_URL = "https://919b-103-156-165-21.ngrok-free.app/";
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

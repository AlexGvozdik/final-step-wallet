import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { alert, defaults } from "@pnotify/core";

defaults.styling = "material";
defaults.icons = "material";
defaults.delay = 1000;

axios.defaults.baseURL = "https://final-step-wallet-back.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("/auth/register", async (credentials) => {
  try {
    const response = await axios.post("/api/auth/register", credentials);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    alert({
      text: error.response.data.token,
      hide: true,
      delay: 2000,
      sticker: false,
      closer: true,
      dir1: "right",
    });
  }
});
// const register = createAsyncThunk(
//   "/api/auth/register",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post("/api/auth/register", credentials);
//       const user = data.data.user;

//       // const login = await axios.post("/api/auth/login", user);
//       const activeUser = login.data.data.user;
//       const activeToken = login.data.data.token;
//       token.set(activeToken);

//       const finishedUser = {
//         token: activeToken,
//         user: activeUser,
//       };

//       return finishedUser;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

const login = createAsyncThunk(
  "/api/auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/login", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      alert({
        text: "Not authorized",
        hide: true,
        delay: 2000,
        sticker: false,
        closer: true,
        dir1: "down",
      });
      // throw new Error(error.message)
      return rejectWithValue(error);
    }
  }
);

const logout = createAsyncThunk("/api/auth/logout", async () => {
  try {
    await axios.get("/api/auth/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  "/auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get("/api/auth/current");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const operations = {
  register,
  logout,
  login,
  fetchCurrentUser,
};
export default operations;

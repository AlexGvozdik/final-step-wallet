import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { alert, defaults } from "@pnotify/core";

defaults.styling = "material";
defaults.icon = "material";
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

const login = createAsyncThunk("/api/auth/login", async (credentials) => {
  try {
    const response = await axios.post("api/auth/login", credentials);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});

// export const logOut = createAsyncThunk("auth/logout", async () => {
//   try {
//     await axios("/users/logout");
//     token.unset();
//   } catch (error) {
//     console.log(error.message);
//   }
// });

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
const authOperations = { register, login, fetchCurrentUser };

export default authOperations;

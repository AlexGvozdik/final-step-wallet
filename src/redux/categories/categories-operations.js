import axios from "axios";

import {
  getCategoryRequest,
  getCategorySuccess,
  getCategoryError,
} from "../categories/categories-actions";

axios.defaults.baseURL = "https://final-step-wallet-back.herokuapp.com";

export const getCategories = () => async (dispatch) => {
  dispatch(getCategoryRequest());

  try {
    const { data } = await axios.get("/api/categories");
    dispatch(getCategorySuccess(data.response.categories));
  } catch (error) {
    dispatch(getCategoryError(error.message));
  }
};

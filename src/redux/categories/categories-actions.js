import { createAction } from "@reduxjs/toolkit";

const getCategoryRequest = createAction("category/getCategoryRequest");
const getCategorySuccess = createAction("category/getCategorySuccess");
const getCategoryError = createAction("category/getCategoryError");

export { getCategoryRequest, getCategorySuccess, getCategoryError };

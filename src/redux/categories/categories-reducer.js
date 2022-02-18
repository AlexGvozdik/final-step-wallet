import { createReducer } from "@reduxjs/toolkit";

import { getCategorySuccess } from "./categories-actions";

export const categoriesReducer = createReducer([], {
  [getCategorySuccess]: (_, { payload }) => payload,
});

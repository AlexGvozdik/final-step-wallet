import { createAction } from "@reduxjs/toolkit";

export const getCurrenciesPending = createAction("currency/getCurrenciesPending");
export const getCurrenciesSuccess = createAction("currency/getCurrenciesSuccess");
export const getCurrenciesError = createAction("currency/getCurrenciesError");
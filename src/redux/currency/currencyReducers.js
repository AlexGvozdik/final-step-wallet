import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as currencyActions from "./currencyActions";

const currencyRates = createReducer(null, {
  [currencyActions.getCurrenciesPending]: (_) => [],
  [currencyActions.getCurrenciesSuccess]: (_, { payload }) => payload,
  [currencyActions.getCurrenciesError] : (_) => []
});

const currencyRatesLoading = createReducer(true, {
  [currencyActions.getCurrenciesPending]: (_) => true,
  [currencyActions.getCurrenciesSuccess]: (_) => false,
  [currencyActions.getCurrenciesError] : (_) => false
});

const currencyRatesError = createReducer(null, {
  [currencyActions.getCurrenciesPending]: (_) => null,
  [currencyActions.getCurrenciesSuccess]: (_) => null,
  [currencyActions.getCurrenciesError] : (_, { error }) => error
});

const currencyReducers = combineReducers({
  currencyRates,
  currencyRatesLoading,
  currencyRatesError
});

export default currencyReducers;
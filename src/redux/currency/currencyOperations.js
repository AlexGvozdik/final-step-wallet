import * as actions from "./currencyActions";
import { getCurrencyRates } from "../../api/currencyApi";

const cacheDays = 1;
const diffDays = (from, to) => (from - to) / 86400000;

export const getCurrencies = (dispatch) => {

  const rawLocalRates = localStorage.getItem('currencyRates');

  if (rawLocalRates) {
    const localRates = JSON.parse(rawLocalRates);
    const cacheDiffDays = diffDays(new Date(), Date.parse(localRates.timestamp));

    if (cacheDiffDays < cacheDays) {
      dispatch(actions.getCurrenciesSuccess(localRates.currencyRates));
      return;
    }
  }

  dispatch(actions.getCurrenciesPending());

  return getCurrencyRates()
    .then((rates) => {
      dispatch(actions.getCurrenciesSuccess(rates));
      return rates;
    })
    .then((currencyRates) => localStorage.setItem("currencyRates", JSON.stringify({ currencyRates, timestamp : new Date() })))
    .catch((error) => dispatch(actions.getCurrenciesError(error.message)));
};
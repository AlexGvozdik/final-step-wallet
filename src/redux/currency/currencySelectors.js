const currencyRates = (state) => state.currency.currencyRates;
const currencyRatesLoading = (state) => state.currency.currencyRatesLoading;
const currencyRatesError = (state) => state.currency.currencyRatesError;

const currencySelectors = { currencyRates, currencyRatesLoading, currencyRatesError };

export default currencySelectors;
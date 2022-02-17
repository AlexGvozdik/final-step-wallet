import axios from "axios";

async function getCurrencyRate() {
  const responce = await axios.get(
    "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"
  );
  return responce.data;
}

export default getCurrencyRate;

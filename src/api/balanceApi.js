import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-backend-g5.herokuapp.com/api';

async function getBalance() {
  const { data } = await axios.get('/users/balance');
  return data.data.user.balance;
}

export { getBalance };

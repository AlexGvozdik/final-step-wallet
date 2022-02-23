import axios from 'axios';

axios.defaults.baseURL = 'https://final-project-back.herokuapp.com/api';

async function getBalance() {
  const { data } = await axios.get('/users/balance');
  return data.data.user.balance;
}

export { getBalance };

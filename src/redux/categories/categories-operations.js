import axios from 'axios';

import {
  fetchCategoriesRequest,
  fetchCategoriesSucces,
  fetchCategoriesError,
} from './categories-actions';

axios.defaults.baseURL = 'https://final-project-back.herokuapp.com/api';

const fetchCategories = (month, year) => async dispatch => {
  dispatch(fetchCategoriesRequest());
  try {
    let responceObj;

    if (!year && !month) {
      const res = await axios.post('/transactions/get')
      responceObj = res.data
    }

    if (!month) {
      const  res  = await axios.post('/transactions/get', { year })
      responceObj = res.data
    }

    if (month && year) {
      const  res  = await axios.post('/transactions/get', { year, month })
      responceObj = res.data
    }

    const array = responceObj.data.transactionsData

    // const { data } = await axios.post('/transactions/get');
    // const array = data.data.transactionsData

    const categories = {
      income: 0,
      spending: 0
    }
    array.forEach((item) => {
      const name = item.category
      const sum = item.sum
      const type = item.type

      if (type) {
        categories.income += sum
        return
      }

      if (!type) {
        categories.spending += sum
      }

      categories[name] = categories[name] === undefined ? sum : categories[name] + sum
    })
    
    const keys = Object.keys(categories)
    const sortedArray = keys.map((item) => {
      return {
        name: item,
        summ: categories[item]
      }
    })

    dispatch(fetchCategoriesSucces(sortedArray));
  } catch (error) {
    dispatch(fetchCategoriesError(error));
  }
};

export default {
  fetchCategories,
};

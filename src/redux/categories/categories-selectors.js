const getAllUserCategory = (state) => state.categories;

const getBalance = (state) => state.auth.user.balance;

const authSelectors = {
  getBalance,
  getAllUserCategory,
};
export default authSelectors;

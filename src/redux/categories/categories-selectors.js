const getBalance = (state) => state.auth.user.balance;
const authSelectors = {
  getBalance,
};
export default authSelectors;

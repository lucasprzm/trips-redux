export const addReserve = (id) => {
  return {
    type: "ADD_RESERVE",
    id,
  };
};
export const incrementAmountRequest = (id, amount) => {
  return {
    type: "INCREMENT_AMOUNT_REQUEST",
    id,
    amount,
  };
};

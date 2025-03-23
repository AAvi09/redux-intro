const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accountReducer = (state = initialStateAccount, action) => {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requisition":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payloan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
};
// store.dispatch({ type: "account/deposit", payload: 1000 });
// store.dispatch({
//   type: "account/requisition",
//   payload: { amount: 1000, purpose: "paying bills" },
// });

// console.log(store.getState());

export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function requisition(amount, purpose) {
  return { type: "account/requisition", payload: { amount, purpose } };
}
export function payloan() {
  return { type: "account/payloan" };
}
// store.dispatch(deposit(1000));
// store.dispatch(requisition(1000, "paying bills"));
// // store.dispatch(payloan());
// console.log(store.getState());

export default accountReducer;

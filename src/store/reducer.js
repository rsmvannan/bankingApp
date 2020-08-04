import * as actionTypes from "./actions";

const initialState = {
  loggedUser: "",
  isLogin: null,
  loanDetails: {
    loanType: "",
    loanAmount: "",
    rateOfInterest: "",
    loanDate: "",
    loanDuration: "",
  },
};

const reducer = (state = initialState, action) => {
  console.log(action.type, action);
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        loggedUser: action.name,
        isLogin: true,
      };
    case actionTypes.APPLY_LOAN:
      return {
        ...state,
        loanDetails: {
          ...state.loanDetails,
          loanType: action.state.loanType,
          loanAmount: action.state.loanAmount,
          rateOfInterest: action.state.rateOfInterest,
          loanDate: action.state.loanDate,
          loanDuration: action.state.loanDuration,
        },
      };
  }
  return state;
};

export default reducer;

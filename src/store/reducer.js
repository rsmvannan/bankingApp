import * as actionTypes from "./actions/actions";

const initialState = {
  loggedUser: "",
  isLogin: true,
  loanDetails: {
    loanType: "",
    loanAmount: "",
    rateOfInterest: "",
    loanDate: "",
    loanDuration: "",
  },
};

const reducer = (state = initialState, action) => {
  console.log("c3", action.type, action);
  switch (action.type) {
    case actionTypes.ADD_USER:
      if (action.name !== null) {
        return {
          ...state,
          loggedUser: action.name,
          isLogin: true,
        };
      }
      // console.log("test");
      return {
        ...state,
        loggedUser: "",
        isLogin: false,
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

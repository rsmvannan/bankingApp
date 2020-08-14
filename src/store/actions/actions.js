export const ADD_USER = "ADD_USER";
export const APPLY_LOAN = "APPLY_LOAN";

export const add_user = (username) => {
  return {
    type: ADD_USER,
    name: username ? username : null,
    // pwd: password,
  };
};

export const apply_loan = (state) => {
  // console.log("c1");
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add_loan(state));
    }, 1000);
  };
};

export const add_loan = (state) => {
  // console.log("c2");
  return {
    type: APPLY_LOAN,
    state: state,
  };
};

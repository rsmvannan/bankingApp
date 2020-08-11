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
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add_loan(state));
    }, 5000);
  };
};

export const add_loan = (state) => {
  return {
    type: APPLY_LOAN,
    state: state,
  };
};

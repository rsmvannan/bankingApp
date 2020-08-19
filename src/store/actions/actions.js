import axios from "axios";
// import { useHistory } from "react-router-dom";

export const ADD_USER = "ADD_USER";
export const APPLY_LOAN = "APPLY_LOAN";
export const AUTH_USER = "AUTH_USER";

export const auth_user = (username) => {
  // console.log(state);
  return async (dispatch) => {
    dispatch(adding_user(username));
  };
};

export const add_user = (state) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:8001/registration", { state })
      .then((result) => {
        // console.log(result.data);
        dispatch(adding_user(result.data.userName));
      });
  };
};

export const adding_user = (username) => {
  return {
    type: ADD_USER,
    name: username ? username : null,
    // pwd: password,
  };
};

export const update_user = (state) => {
  //  return async (dispatch) => {
  return async (dispatch) => {
    await axios
      .put("http://localhost:8001/updateuser", { state })
      .then((result) => {
        console.log(result);
        dispatch(upd_user);
      });
    //  }
  };
};

export const upd_user = () => {
  // let history = useHistory();
  alert("Profile Updated...");
};

export const apply_loan = (state) => {
  // console.log("c1");
  // testing
  // event.preventDefault();
  return async (dispatch) => {
    await axios
      .post("http://localhost:8001/applyloan", { state })
      .then((result) => {
        // console.log(result.data);
        // dispatch(apply_loan(result.data));
        dispatch(add_loan(state));
        alert("Loan Applied !!!");
      });
  };

  // testing

  // return (dispatch) => {
  //   setTimeout(() => {
  //     dispatch(add_loan(state));
  //   }, 1000);
  // };
};

export const add_loan = (state) => {
  // console.log("c2");
  return {
    type: APPLY_LOAN,
    state: state,
  };
};

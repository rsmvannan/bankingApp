import * as actionTypes from "./actions";

const initialState = {
  loggedUser: "",
  isLogin: null,
};

const reducer = (state = initialState, action) => {
  console.log(action.type, action.name);
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        loggedUser: action.name,
        isLogin: true,
      };
  }
  return state;
};

export default reducer;

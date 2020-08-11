import React, { useState } from "react";
import "./Login.css";
import { storeUser } from "../Auth/Authentication";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { add_user } from "../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const LoginComponent = (props) => {
  let [username, setUserName] = useState();
  let [password, setPassword] = useState();
  // let [isLogin, setLogin] = useState(true);

  let history = useHistory();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.isLogin);
  // const selector = useSelector((state) => state);

  const changeHandler = (event) => {
    if (event.target.name === "username") {
      setUserName(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const submitLogin = () => {
    if (username === "admin" && password === "admin") {
      dispatch(add_user(username));
      storeUser(props.user);
      // console.log("if", selector);
      history.push("/welcome");
    } else {
      dispatch(add_user());
      // console.log("else", selector);
    }
  };

  return (
    <div>
      {selector.isLogin && <div className="alert"> Invalid Credentials </div>}
      <div className="page-header">
        <label className="class-label"> User Name</label>
        <input
          type="text"
          className="username"
          placeholder="Enter User Name"
          name="username"
          value={username}
          onChange={changeHandler}
        ></input>
      </div>
      <div>
        <label className="class-label1"> Password </label>
        <input
          type="password"
          className="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={changeHandler}
        ></input>
      </div>
      <div>
        <input
          className="button"
          type="button"
          name="login"
          value="Login"
          onClick={submitLogin}
        />
      </div>
      <p className="paragraph">
        New User? <Link to="register"> Click here</Link> to register
      </p>
    </div>
  );
};

export default LoginComponent;
// const mapStateToProps = (state) => {
//   console.log(state.isLogin, state.loggedUser);
//   const { isLogin, loggedUser } = state;
//   return {
//     isLogin: isLogin,
//     user: loggedUser,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onClickSubmit: (username) => dispatch(add_user(username)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

import React, { useState } from "react";
import "./Login.css";
import Authentication from "../Auth/Authentication";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

const LoginComponent = (props) => {
  let [username, setUserName] = useState();
  let [password, setPassword] = useState();
  // let [isLogin, setLogin] = useState(true);

  let history = useHistory();

  const changeHandler = (event) => {
    if (event.target.name === "username") {
      setUserName(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const submitLogin = () => {
    if (username === "test" && password === "test") {
      // setLogin(true);
      props.onClickSubmit(username);
      console.log(props.user);
      Authentication.storeUser(props.user);
      history.push("/welcome");
    }
    // else {
    //   setLogin(false);
    // }
  };

  return (
    <div>
      {!props.isLogin && <div className="alert"> Invalid Credentials </div>}
      <div className="page-header">
        <label className="class-label"> User Name</label>
        <input
          type="text"
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

const mapStateToProps = (state) => {
  console.log(state.isLogin, state.loggedUser);
  const { isLogin, loggedUser } = state;
  return {
    isLogin: isLogin,
    user: loggedUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickSubmit: (username) =>
      dispatch({
        type: actionTypes.ADD_USER,
        name: username,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

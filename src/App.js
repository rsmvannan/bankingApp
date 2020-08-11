import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouterComponent from "../src/RouterComponent";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import reducer from "./store/reducer";
// import thunk from "redux-thunk";

// const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    </div>
  );
}

export default App;

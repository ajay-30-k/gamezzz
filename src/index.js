import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// redux stepup
import { createStore, applyMiddleware, compose } from "redux";
import rootreducer from "./reducer";
import { Provider } from "react-redux";
import {thunk} from'redux-thunk'
import { BrowserRouter ,Router} from "react-router-dom";

const composeenhancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootreducer,composeenhancer(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
    <BrowserRouter>
    
      <App />
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

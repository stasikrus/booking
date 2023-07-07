import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import { offersData } from "./mocks/offers";
import {createStore} from "redux"
import { reducer } from "./store/reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App offerCards={offersData} />
  </Provider>,
  document.querySelector(`#root`)
);

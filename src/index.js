import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import { reducer } from "./store/reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createAPI } from "./services/api";
import { AuthorizationStatus } from "./const";
import { checkAuth } from "./store/api-actions";
import { ActionCreator } from "./store/action";

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(api))
));

store.dispatch(checkAuth());

const offersState = store.getState().offers;

ReactDOM.render(
  <Provider store={store}>
    <App offerCards={offersState} />
  </Provider>,
  document.querySelector(`#root`)
);

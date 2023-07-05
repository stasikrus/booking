import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import { offersData } from "./mocks/offers";

ReactDOM.render(
    <App offerCards={offersData} />,
    document.querySelector(`#root`)
);

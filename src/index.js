import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offerCards from "./mock-data";


ReactDOM.render(
    <App offerCards={offerCards} />,
    document.querySelector(`#root`)
);

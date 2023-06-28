import React from "react";
import MainPage from "../main-page/main-page";
import PropTypes from "prop-types";

const App = ({offerCards}) => {
  return (
    <MainPage offerCards={offerCards} />
  );
};

// App.propTypes = {
//   placesCount: PropTypes.number.isRequired,
// };

export default App;

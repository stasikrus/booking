import React, {useState} from "react";
import MainPage from "../main-page/main-page";
import RoomPage from "../room-page/room-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import NotFoundPage from "../not-found-page/not-found-page";
import PropTypes from "prop-types";
import TYPES from "../../types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

const App = ({offerCards}) => {
  const [, setHoveredOfferId] = useState(null);
  const [clickOfferId, setClickOfferId] = useState(null);

  const handleOfferCardHover = (offerId) => {
    setHoveredOfferId(offerId);
  };

  const handleOfferCardClick = (offerId) => {
    setClickOfferId(offerId);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            offerCards={offerCards}
            offerCardHover={handleOfferCardHover}
            offerCardClick={handleOfferCardClick}
          />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage offerCards={offerCards} />
        </Route>
        <Route exact path="/offer/:id?">
          {clickOfferId !== null ? (
            <RoomPage
              offer={offerCards.find((card) => card.id === clickOfferId)}
            />
          ) : (
            <RoomPage offer={offerCards[0]} />
          )}
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offerCards: PropTypes.arrayOf(
      PropTypes.shape(TYPES)
  ).isRequired
};

export default App;

import React from "react";
import MainPage from "../main-page/main-page";
import RoomPage from "../room-page/room-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import NotFoundPage from "../not-found-page/not-found-page";
import PropTypes from "prop-types";
import TYPES from "../../types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PrivateRoute from "../private-route/private-route";

const App = ({offerCards}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute exact path="/favorites"
          render={() => <FavoritesPage offerCards={offerCards} />}
        >
        </PrivateRoute>
        <Route exact path="/offer/:id">
            <RoomPage />
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

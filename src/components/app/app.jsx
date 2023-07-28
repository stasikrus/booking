import React from "react";
import MainPage from "../main-page/main-page";
import RoomPage from "../room-page/room-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import NotFoundPage from "../not-found-page/not-found-page";
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import PrivateRoute from "../private-route/private-route";

const App = () => {

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
          render={() => <FavoritesPage />}
        >
        </PrivateRoute>
        <Route path="/offer/:id">
            <RoomPage />
        </Route>
        <Route path="/not-found">
          <NotFoundPage />
        </Route>
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

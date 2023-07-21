import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import TYPES from "../../types";
import OfferList from "../offers-list/offers-list";
import Map from "../map/map";
import { cityMap } from "../../mocks/offers";
import ListOfCities from "../list-of-cities/list-of-cities";
import SortingList from "../sorting-list/sorting-list";
import {
  getFilteredOffers,
  getSelectedCity,
  getIsDataLoaded,
} from "../../store/selectors";
import { fetchOffersList } from "../../store/api-actions";
import LoadingScreen from "../loading-screen/loading-screen";
import { useHistory } from "react-router-dom";
import HeaderNav from "../header-nav/header-nav";

const MainPage = () => {
  const selectedCity = getSelectedCity();
  const filteredOffers = getFilteredOffers();
  const isDataLoaded = getIsDataLoaded();
  const dispatch = useDispatch();
  const history = useHistory();

  const [hoveredOfferId, setHoveredOfferId] = useState(null);

  const handleOfferCardHover = (offerId) => {
    setHoveredOfferId(offerId);
  };

  const handleRedirectToLogin = () => {
    history.push("/login");
  };

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchOffersList());
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <HeaderNav />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ListOfCities />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {filteredOffers.length} places to stay in {selectedCity}
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <SortingList
                  selectedCity={selectedCity}
                  filteredOffers={filteredOffers}
                />
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OfferList
                  offerCards={filteredOffers}
                  offerCardHover={handleOfferCardHover}
                  onRedirectToLogin={handleRedirectToLogin}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={cityMap}
                  points={filteredOffers}
                  heightMap={754}
                  isActiveMarker={hoveredOfferId}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offerCards: PropTypes.arrayOf(PropTypes.shape(TYPES)).isRequired,
};

export default MainPage;

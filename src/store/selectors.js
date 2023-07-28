import { useSelector } from "react-redux";
import { createSelector } from 'reselect';

// const getFilteredOffers = () => useSelector(state => state.filteredOffers);
const getDefaultOffers = () => useSelector(state => state.offers);
const getSelectedCity = () => useSelector(state => state.city);
const getIsDataLoaded = () => useSelector(state => state.isDataLoaded);
const getAuthorizationStatus = () => useSelector(state => state.authorizationStatus);
const getUserLogin = () => useSelector(state => state.user);
const getComments = () => useSelector(state => state.commentsMap);
const getFavorites = () => useSelector(state => state.favorites);
const getActiveHoverOffer = () => useSelector(state => state.hoveredOffers);

const getFilteredOffers = createSelector(
  [getDefaultOffers, getSelectedCity],
  (offers, selectedCity) => {
    // Фильтруем предложения, оставляем только те, которые соответствуют выбранному городу
    return offers.filter(({city}) => city.name === selectedCity);
  }
);

export {getFilteredOffers, getSelectedCity, getDefaultOffers, getIsDataLoaded, getAuthorizationStatus, getUserLogin, getComments, getFavorites, getActiveHoverOffer};

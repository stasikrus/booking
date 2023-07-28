import { createSelector } from 'reselect';

export const getDefaultOffers = state => state.offers;
export const getSelectedCity = state => state.city;
export const getIsDataLoaded = state => state.isDataLoaded;
export const getAuthorizationStatus = state => state.authorizationStatus;
export const getUserLogin = state => state.user;
export const getComments = state => state.commentsMap;
export const getFavorites = state => state.favorites;
export const getActiveHoverOffer = state => state.hoveredOffers;

export const getFilteredOffers = createSelector(
  [getDefaultOffers, getSelectedCity],
  (offers, selectedCity) => {
    // Фильтруем предложения, оставляем только те, которые соответствуют выбранному городу
    return offers.filter(({city}) => city.name === selectedCity);
  }
);

import { createSelector } from 'reselect';
import { SORT_TYPE } from '../utils';

export const getDefaultOffers = state => state.offers;
export const getSelectedCity = state => state.city;
export const getIsDataLoaded = state => state.isDataLoaded;
export const getAuthorizationStatus = state => state.authorizationStatus;
export const getUserLogin = state => state.user;
export const getComments = state => state.commentsMap;
export const getFavorites = state => state.favorites;
export const getActiveHoverOffer = state => state.hoveredOffers;
export const getActiveSorting = state => state.sorting;

export const getFilteredOffersByCity = createSelector(
  [getDefaultOffers, getSelectedCity],
  (offers, selectedCity) => {
    return offers.filter(({city}) => city.name === selectedCity);
  }
);

export const getFilteredOffers = createSelector(
  [getFilteredOffersByCity, getActiveSorting],
  (filteredOffers, activeSort) => {
    switch(activeSort) {
      case SORT_TYPE.PRICE_TO_HIGH:
        return [...filteredOffers].sort((a, b) => a.price-b.price);
      case SORT_TYPE.PRICE_TO_LOW:
        return [...filteredOffers].sort((a, b) => b.price-a.price);
      default:
        return filteredOffers;
    }
  }
);

import { sortOffers, filterOffersByCity, toggleFavoriteById } from "../utils";

const DEFAULT_CITY = `Amsterdam`;

const ActionType = {
  CHANGE_CITY: `city/changeCity`,
  CHANGE_SORT: `sort/changeSort`,
  RESET_SORT: `sort/resetSort`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  ADD_TO_FAVORITES: `user/addToFavorites`,
  LOGIN_SUCCESS: `user/loginSuccess`,
  STORE_COMMENTS: `data/loadComments`,
};

const ActionCreator = {
  changeCity: (item, offers) => ({
    type: ActionType.CHANGE_CITY,
    payload: {
      city: item,
      filteredOffers: filterOffersByCity(offers, item)
    }
  }),
  changeSort: (filter, offers) => ({
    type: ActionType.CHANGE_SORT,
    payload: {
      offers: sortOffers(filter, offers),
    }
  }),
  resetSort: (city, offers) => ({
    type: ActionType.RESET_SORT,
    payload: {
      filteredOffers: filterOffersByCity(offers, city)
    }
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: {
      offers: offers,
      filteredOffers: filterOffersByCity(offers, DEFAULT_CITY)
    },
  }),
  addToFavorites: (id, filteredOffers) => ({
    type: ActionType.ADD_TO_FAVORITES,
    payload: {
      filteredOffers: toggleFavoriteById(filteredOffers, id),
    }
  }),
  loginSuccess: (login) => ({
    type: ActionType.LOGIN_SUCCESS,
    payload: login,
  }),
  storeComments: (comments) => ({
    type: ActionType.STORE_COMMENTS,
    payload: comments,
  })
};

export {ActionType, ActionCreator};

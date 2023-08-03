import { filterOffersByCity, toggleFavoriteById, toggleFavoriteState } from "../utils";
import { SORT_TYPE } from "../utils";

const ActionType = {
  CHANGE_CITY: `user/changeCity`,
  CHANGE_SORT: `sort/changeSort`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_FAVORITES: `data/loadFavorites`,
  ADD_TO_FAVORITES: `user/addToFavorites`,
  LOGIN_SUCCESS: `user/loginSuccess`,
  STORE_COMMENTS: `data/loadComments`,
  CHANGE_FAVORITE: `user/changeFavorite`,
  HOVERED_OFFER: `user/hoverOffer`,
  RESET_HOVER_STATE: `user/resetHoverState`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: {
      city: city,
      sorting: SORT_TYPE.POPULAR
    }
  }),
  changeSort: (filter) => ({
    type: ActionType.CHANGE_SORT,
    payload: filter
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: {
      offers: offers,
      // filteredOffers: filterOffersByCity(offers, DEFAULT_CITY)
    },
  }),
  loginSuccess: (login) => ({
    type: ActionType.LOGIN_SUCCESS,
    payload: login,
  }),
  storeComments: (comments) => ({
    type: ActionType.STORE_COMMENTS,
    payload: comments,
  }),
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites,
  }),
  changeFavorite: (offers, id) => ({
    type: ActionType.CHANGE_FAVORITE,
    payload: {
      offers: toggleFavoriteState(offers, id)
    }
  }),
  hoverOffer: (id) => ({
    type: ActionType.HOVERED_OFFER,
    payload: id,
  }),
  resetHoverState: (state) => ({
    type: ActionType.RESET_HOVER_STATE,
    payload: state
  })
};

export {ActionType, ActionCreator};

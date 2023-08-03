import { ActionType } from "./action";
import { AuthorizationStatus } from "../const";
import { SORT_TYPE } from "../utils";

const DEFAULT_CITY = `Amsterdam`;

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  user: null,
  commentsMap: {},
  hoveredOffers: null,
  sorting: SORT_TYPE.POPULAR,
  favorites: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload.city,
        sorting: action.payload.sorting
      }
    case ActionType.CHANGE_SORT:
      return {
        ...state,
        sorting: action.payload,
      }
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      }
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload.offers,
        isDataLoaded: true,
      }
     case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload
      }
     case ActionType.STORE_COMMENTS:
      return {
        ...state,
        commentsMap: action.payload
      }
     case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      }
     case ActionType.CHANGE_FAVORITE:
      return {
        ...state,
        offers: action.payload.offers,
      }
     case ActionType.HOVERED_OFFER:
      return {
        ...state,
        hoveredOffers: action.payload
      }
     case ActionType.RESET_HOVER_STATE:
      return {
        ...state,
        hoveredOffers: action.payload
      }
  }

  return state;
};

export {reducer};

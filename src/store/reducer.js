import { ActionType } from "./action";
import { AuthorizationStatus } from "../const";

const DEFAULT_CITY = `Amsterdam`;

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  filteredOffers: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  user: null,
  commentsMap: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload.city,
        filteredOffers: action.payload.filteredOffers
      }
    case ActionType.CHANGE_SORT:
      return {
        ...state,
        filteredOffers: action.payload.offers,
      }
    case ActionType.RESET_SORT:
      return {
        ...state,
        filteredOffers: action.payload.filteredOffers
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
        filteredOffers: action.payload.filteredOffers,
        isDataLoaded: true,
      }
    case ActionType.ADD_TO_FAVORITES:
      return {
        ...state,
        filteredOffers: action.payload.filteredOffers
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
  }

  return state;
};

export {reducer};

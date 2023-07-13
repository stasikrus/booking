import { offersData } from "../mocks/offers";
import { ActionType } from "./action";
import { filterOffersByCity } from "../utils";

const DEFAULT_CITY = `Amsterdam`;

const initialState = {
  city: DEFAULT_CITY,
  offers: offersData,
  filteredOffers: filterOffersByCity(offersData, DEFAULT_CITY),
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
  }

  return state;
};

export {reducer};

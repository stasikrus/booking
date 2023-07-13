import { sortOffers, filterOffersByCity } from "../utils";

const ActionType = {
  CHANGE_CITY: `city/changeCity`,
  CHANGE_SORT: `sort/changeSort`,
  RESET_SORT: `sort/resetSort`
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
  })
}

export {ActionType, ActionCreator};

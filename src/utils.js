const SORT_TYPE = {
  PRICE_TO_HIGH: `Price: low to high`,
  PRICE_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`,
  POPULAR: `Popular`
}

function filterOffersByCity(offers, city) {
  return offers.filter((offer) => offer.city === city);
}

function filterCityMapByName(offers, city) {
  return offers.find((offer) => offer.city === city);
}

const sortOffers = (filter, offers) => {
  switch(filter) {
    case SORT_TYPE.PRICE_TO_HIGH:
      return [...offers].sort((a, b) => a.price-b.price);
    case SORT_TYPE.PRICE_TO_LOW:
      return [...offers].sort((a, b) => b.price-a.price);
    default:
      return offers;
  }
}

export {filterOffersByCity, filterCityMapByName, sortOffers, SORT_TYPE};

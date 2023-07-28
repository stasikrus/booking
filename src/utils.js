const SORT_TYPE = {
  PRICE_TO_HIGH: `Price: low to high`,
  PRICE_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`,
  POPULAR: `Popular`
}

function filterOffersByCity(offers, currentCity) {
  return offers.filter(({city}) => city.name === currentCity);
}

function filterCityMapByName(offers, city) {
  return offers.find((offer) => offer.city === city);
}

const handleToBookmarksClick = () => {
  if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
    onRedirectToLogin(); // Вызываем колбэк для перенаправления на страницу входа
  } else {
    dispatch(ActionCreator.addToFavorites(id, filteredOffers));
  }
};

const toggleFavoriteById = (offers, id) => {
  const index = offers.findIndex(obj => obj.id === id);
  if (index !== -1) {
    offers[index].is_favorite = !offers[index].is_favorite;
  }
  return offers;
};

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

const toggleFavoriteState = (data, id) => {
  return data.map((item) =>
    item.id === id ? { ...item, is_favorite: !item.is_favorite } : item
  );
};

export {filterOffersByCity, filterCityMapByName, sortOffers, toggleFavoriteById, SORT_TYPE, toggleFavoriteState};

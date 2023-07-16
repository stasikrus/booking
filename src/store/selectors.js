import { useSelector } from "react-redux";

const getFilteredOffers = () => useSelector(state => state.filteredOffers);
const getDefaultOffers = () => useSelector(state => state.offers);
const getSelectedCity = () => useSelector(state => state.city);
const getIsDataLoaded = () => useSelector(state => state.isDataLoaded);

export {getFilteredOffers, getSelectedCity, getDefaultOffers, getIsDataLoaded};

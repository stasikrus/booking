import { useSelector } from "react-redux";

const getFilteredOffers = () => useSelector(state => state.filteredOffers);
const getDefaultOffers = () => useSelector(state => state.offers);
const getSelectedCity = () => useSelector(state => state.city);
const getIsDataLoaded = () => useSelector(state => state.isDataLoaded);
const getAuthorizationStatus = () => useSelector(state => state.authorizationStatus);
const getUserLogin = () => useSelector(state => state.user);
const getComments = () => useSelector(state => state.commentsMap);

export {getFilteredOffers, getSelectedCity, getDefaultOffers, getIsDataLoaded, getAuthorizationStatus, getUserLogin, getComments};

import React from "react";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../store/action";
import { SORT_TYPE } from "../../utils";
import { getFilteredOffers, getSelectedCity, getDefaultOffers } from "../../store/selectors";

const SortingList = () => {

  const dispatch = useDispatch();
  const filteredOffers = getFilteredOffers();
  const city = getSelectedCity();
  const defaultOffers = getDefaultOffers();

  const changeSort = (filter) => {
    dispatch(ActionCreator.changeSort(filter, filteredOffers));
  }

  const resetSort = () => {
    dispatch(ActionCreator.resetSort(city, defaultOffers));
  }

  return (
    <ul className="places__options places__options--custom places__options--opened">
      <li className="places__option places__option--active" tabIndex="0" onClick={resetSort}>
        Popular
      </li>
      <li className="places__option" tabIndex="0" onClick={() => changeSort(SORT_TYPE.PRICE_TO_HIGH)}>
        Price: low to high
      </li>
      <li className="places__option" tabIndex="0" onClick={() => changeSort(SORT_TYPE.PRICE_TO_LOW)}>
        Price: high to low
      </li>
      <li className="places__option" tabIndex="0">
        Top rated first
      </li>
    </ul>
  );
};

export default SortingList;

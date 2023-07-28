import React from "react";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../store/action";
import { SORT_TYPE } from "../../utils";
import { getDefaultOffers } from "../../store/selectors";
import PropTypes from "prop-types";

const SortingList = ({filteredOffers, selectedCity}) => {

  const dispatch = useDispatch();
  const defaultOffers = getDefaultOffers();

  const changeSort = (filter) => {
    dispatch(ActionCreator.changeSort(filter, filteredOffers));
  };

  const resetSort = () => {
    dispatch(ActionCreator.resetSort(selectedCity, defaultOffers));
  };

  const handleChangeSort = (filter) => () => {
    changeSort(filter);
  };

  return (
    <ul className="places__options places__options--custom places__options--opened">
      <li className="places__option places__option--active" tabIndex="0" onClick={resetSort}>
        Popular
      </li>
      <li className="places__option" tabIndex="0" onClick={handleChangeSort(SORT_TYPE.PRICE_TO_HIGH)}>
        Price: low to high
      </li>
      <li className="places__option" tabIndex="0" onClick={handleChangeSort(SORT_TYPE.PRICE_TO_LOW)}>
        Price: high to low
      </li>
      <li className="places__option" tabIndex="0">
        Top rated first
      </li>
    </ul>
  );
};

SortingList.propTypes = {
  filteredOffers: PropTypes.array.isRequired,
  selectedCity: PropTypes.string.isRequired
};

export default SortingList;

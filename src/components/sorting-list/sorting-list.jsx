import React from "react";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../store/action";
import { SORT_TYPE } from "../../utils";

const SortingList = () => {

  const dispatch = useDispatch();

  const changeSort = (filter) => {
    dispatch(ActionCreator.changeSort(filter));
  };

  const handleChangeSort = (filter) => () => {
    changeSort(filter);
  };

  return (
    <ul className="places__options places__options--custom places__options--opened">
      <li className="places__option places__option--active" tabIndex="0" onClick={handleChangeSort(SORT_TYPE.POPULAR)}>
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

export default React.memo(SortingList);

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreator } from "../../store/action";
import { SORT_TYPE } from "../../utils";
import { getActiveSorting } from "../../store/selectors";

const SortingList = () => {
  const dispatch = useDispatch();
  const activeSorting = useSelector(getActiveSorting);
  const [isOpened, setIsOpened] = useState(false);

  const changeSort = (filter) => {
    dispatch(ActionCreator.changeSort(filter));
  };

  const handleChangeSort = (filter) => () => {
    changeSort(filter);
    setIsOpened(false);
  };

  const toggleOpen = () => {
    setIsOpened(!isOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={toggleOpen}>
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? "places__options--opened" : ""}`}>
        {Object.keys(SORT_TYPE).map((key) => (
          <li
            key={key}
            className={`places__option ${activeSorting === SORT_TYPE[key] ? "places__option--active" : ""}`}
            tabIndex="0"
            onClick={handleChangeSort(SORT_TYPE[key])}
          >
            {SORT_TYPE[key]}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default React.memo(SortingList);

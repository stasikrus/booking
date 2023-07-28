import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {CITY} from "../../mocks/offers";
import {ActionCreator} from "../../store/action";
import { getSelectedCity, getDefaultOffers } from "../../store/selectors";

const ListOfCities = () => {

  const activeCity = useSelector(getSelectedCity);
  const offers = useSelector(getDefaultOffers);
  const dispatch = useDispatch();

  const handleChangeCity = (item, offers) => {
    dispatch(ActionCreator.changeCity(item, offers));
  };

  return (
    <ul className="locations__list tabs__list">
      {CITY.map((city) => (
        <li className="locations__item" key={city}>
          <a
            className={`locations__item-link tabs__item ${activeCity === city ? "tabs__item--active" : ""}`}
            href="#"
          >
            <span onClick={() => handleChangeCity(city, offers)}>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListOfCities;

import React from "react";
import {connect} from "react-redux";
import {CITY} from "../../mocks/offers";
import {ActionCreator} from "../../store/action";

const ListOfCities = ({activeCity, changeCity, offers}) => {
  return (
    <ul className="locations__list tabs__list">
      {CITY.map((city) => (
        <li className="locations__item" key={city}>
          <a
            className={`locations__item-link tabs__item ${activeCity === city ? "tabs__item--active" : ""}`}
            href="#"
          >
            <span onClick={() => changeCity(city, offers)}>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  activeCity: state.city,
  offers: state.offers
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(item, offers) {
    dispatch(ActionCreator.changeCity(item, offers));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfCities);

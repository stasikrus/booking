import React from "react";
import TYPES from "../../types";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const OfferCard = ({card, onOfferCardHover, onOfferCardClick}) => {
  const {id, href, img, price, name, type, premium} = card;

  const handleMouseEnter = () => {
    onOfferCardHover(id);
  };

  const handleMouseLeave = () => {
    onOfferCardHover(null);
  };

  const handleMouseClick = () => {
    onOfferCardClick(id);
  };

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="place-card__mark">
        <span>{premium ? `Premium` : ``}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={href}>
          <img
            className="place-card__image"
            src={img}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{
            pathname: `/offer/${id}`,
            state: {id}
          }}
          onClick={handleMouseClick}
          >
            {name}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  card: PropTypes.shape(TYPES).isRequired,
  onOfferCardHover: PropTypes.func.isRequired,
  onOfferCardClick: PropTypes.func.isRequired
};

export default OfferCard;

import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import { ActionCreator } from "../../store/action";
import useHandleToBookmarksClick from "../../hooks/useHandleToBookmarksClick";

const OfferCard = ({card, isNearOffer}) => {

  const dispatch = useDispatch();

  const {id, href, preview_image, price, title, type, is_premium, is_favorite} = card;
  const activeBookmarkClass = is_favorite ? `place-card__bookmark-button--active` : ``;

  const handleMouseEnter = () => {
    dispatch(ActionCreator.hoverOffer(id));
  };

  const handleMouseLeave = () => {
    dispatch(ActionCreator.hoverOffer(null));
  };

  const handleToBookmarksClick = useHandleToBookmarksClick(id);

  return (
    <article className={`${isNearOffer ? `near-places__card` : `cities__place-card`} place-card`}
    onMouseEnter={isNearOffer ? undefined : handleMouseEnter}
    onMouseLeave={isNearOffer ? undefined : handleMouseLeave}
    >
      <div className="place-card__mark">
        <span>{is_premium ? `Premium` : ``}</span>
      </div>
      <div className={`${isNearOffer ? `near-places__image-wrapper` : `cities__image-wrapper`} place-card__image-wrapper`}>
        <a href={href}>
          <img
            className="place-card__image"
            src={preview_image}
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
          <button className={`place-card__bookmark-button ${activeBookmarkClass} button`} type="button" onClick={handleToBookmarksClick}>
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
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  card: PropTypes.object.isRequired,
  isNearOffer: PropTypes.bool,
};

export default OfferCard;

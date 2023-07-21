import React from "react";
import OfferCard from "../offer-card/offer-card";
import TYPES from "../../types";
import PropTypes from "prop-types";

const OfferList = ({offerCards, offerCardHover, isNearOffer, onRedirectToLogin}) => {

  return (
    offerCards.map((card) => {
      return <OfferCard card={card} key={card.id} onOfferCardHover={offerCardHover} isNearOffer={isNearOffer} onRedirectToLogin={onRedirectToLogin} />;
    })
  );
};

OfferList.propTypes = {
  offerCards: PropTypes.arrayOf(
      PropTypes.shape(TYPES)
  ).isRequired
};

export default OfferList;


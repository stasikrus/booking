import React from "react";
import OfferCard from "../offer-card/offer-card";
import PropTypes from "prop-types";

const OfferList = ({offerCards, isNearOffer}) => {

  return (
    offerCards.map((card) => {
      return <OfferCard
        card={card}
        key={card.id}
        isNearOffer={isNearOffer}
      />;
    })
  );
};

OfferList.propTypes = {
  offerCards: PropTypes.array.isRequired,
  isNearOffer: PropTypes.bool,
};

export default OfferList;


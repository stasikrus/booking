import React from "react";
import OfferCard from "../offer-card/offer-card";
import PropTypes from "prop-types";

const OfferList = ({offerCards, offerCardHover, isNearOffer, onRedirectToLogin, offerCardLeave}) => {

  return (
    offerCards.map((card) => {
      return <OfferCard
        card={card}
        key={card.id}
        onOfferCardHover={offerCardHover}
        isNearOffer={isNearOffer}
        onRedirectToLogin={onRedirectToLogin}
        filteredOffers={offerCards}
        offerCardLeave={offerCardLeave} />;
    })
  );
};

OfferList.propTypes = {
  offerCards: PropTypes.array.isRequired,
  offerCardHover: PropTypes.func,
  isNearOffer: PropTypes.bool,
  onRedirectToLogin: PropTypes.func
};

export default OfferList;


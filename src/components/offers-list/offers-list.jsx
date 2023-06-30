import React, {useState} from "react";
import OfferCard from "../offer-card/offer-card";
import TYPES from "../../types";
import PropTypes from "prop-types";

const OfferList = ({offerCards}) => {
  const [hoveredOfferId, setHoveredOfferId] = useState(null);

  const handleOfferCardHover = (offerId) => {
    setHoveredOfferId(offerId);
  };

  return (
    offerCards.map((card) => {
      return <OfferCard card={card} key={card.id} onOfferCardHover={handleOfferCardHover} />;
    })
  );
};

OfferList.propTypes = {
  offerCards: PropTypes.arrayOf(
      PropTypes.shape(TYPES)
  ).isRequired
};

export default OfferList;


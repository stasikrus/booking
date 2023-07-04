import React from "react";
import OfferCard from "../offer-card/offer-card";
import TYPES from "../../types";
import PropTypes from "prop-types";

const OfferList = ({offerCards, offerCardHover, offerCardClick}) => {
  // const [hoveredOfferId, setHoveredOfferId] = useState(null);

  // const handleOfferCardHover = (offerId) => {
  //   setHoveredOfferId(offerId);
  // };

  return (
    offerCards.map((card) => {
      return <OfferCard card={card} key={card.id} onOfferCardHover={offerCardHover} onOfferCardClick={offerCardClick} />;
    })
  );
};

OfferList.propTypes = {
  offerCards: PropTypes.arrayOf(
      PropTypes.shape(TYPES)
  ).isRequired
};

export default OfferList;


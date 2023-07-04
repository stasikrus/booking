import React from "react";
import PropTypes from "prop-types";
import FavoriteCard from "../favorite-card/favorite-card";
import TYPES from "../../types";

const FavoritesList = ({offerCards}) => {
  return (
    offerCards.map((card) => {
      return <FavoriteCard card={card} key={card.id} />;
    })
  );
};

FavoritesList.propTypes = {
  offerCards: PropTypes.arrayOf(
      PropTypes.shape(TYPES)
  ).isRequired
};

export default FavoritesList;

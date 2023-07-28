import React from "react";
import PropTypes from "prop-types";
import FavoriteCard from "../favorite-card/favorite-card";

const FavoritesList = ({offerCards}) => {
  return (
    offerCards.map((card) => {
      return <FavoriteCard card={card} key={card.id} />;
    })
  );
};

FavoritesList.propTypes = {
  offerCards: PropTypes.array.isRequired
};

export default FavoritesList;

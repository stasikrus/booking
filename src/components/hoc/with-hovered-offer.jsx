import React, { useState } from "react";

const withHoveredOffer = (WrappedComponent) => {
  return (props) => {
    const [hoveredOfferId, setHoveredOfferId] = useState(null);

    const handleOfferCardHover = (offerId) => {
      setHoveredOfferId(offerId);
    };

    return (
      <WrappedComponent
        hoveredOfferId={hoveredOfferId}
        handleOfferCardHover={handleOfferCardHover}
        {...props}
      />
    );
  };
};

export default withHoveredOffer;

import React from "react";
import ReviewsItem from "../reviews-item/reviews-item";
import { getComments } from "../../store/selectors";
import { useSelector } from "react-redux";

const ReviewsList = () => {
  const offerComments = useSelector(getComments);

  return (
    <>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{offerComments.length}</span>
      </h2>
      <ul className="reviews__list">
        {offerComments.map((comment) => {
          return <ReviewsItem key={comment.id} commentItem={comment} />;
        })}
      </ul>
    </>
  );
};

export default ReviewsList;

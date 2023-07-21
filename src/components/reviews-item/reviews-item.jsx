import React from "react";

const ReviewsItem = ({commentItem}) => {
  const {comment, rating, user} = commentItem;
  const {avatar_url, name} = user;

  return (
    <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img
              className="reviews__avatar user__avatar"
              src={avatar_url}
              width="54"
              height="54"
              alt="Reviews avatar"
            />
          </div>
          <span className="reviews__user-name">{name}</span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {comment}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">
            April 2019
          </time>
        </div>
      </li>
  )
}

export default ReviewsItem;

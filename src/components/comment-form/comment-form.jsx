import React, { useState } from "react";
import { appendUserComment } from "../../store/api-actions";
import { useDispatch } from "react-redux";


const CommentForm = ({ hotel_id }) => {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const handleRatingChange = (evt) => {
    setRating(evt.target.value);
  };

  const handleReviewChange = (evt) => {
    setReview(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = {
      rating: rating,
      comment: review
    };

    // Проверка условий для активации кнопки отправки
    if (!formData.rating || formData.comment.length < 50 || formData.comment.length > 300) {
      // Показать сообщение об ошибке или предупреждение
      return;
    }

    setIsSubmitting(true);


    // Отправка запроса на сервер с использованием Axios

    dispatch(appendUserComment(hotel_id, formData.comment, formData.rating))
      .then((data) => {
        // Обработка успешного ответа
        setRating("");
        setReview("");
        setIsSubmitting(false);
        console.log(data)
      })
      .catch((error) => {
        // Обработка ошибки
        console.error("Error:", error);
        setIsSubmitting(false);
      });
    };

  // Проверка условий для активации кнопки отправки
  const isSubmitDisabled = !rating || review.length < 50 || review.length > 300;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          checked={rating === "5"}
          onChange={handleRatingChange}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          checked={rating === "4"}
          onChange={handleRatingChange}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          checked={rating === "3"}
          onChange={handleRatingChange}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          checked={rating === "2"}
          onChange={handleRatingChange}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          checked={rating === "1"}
          onChange={handleRatingChange}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleReviewChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set&nbsp;
          <span className="reviews__star">rating</span> and describe your stay
          with at least&nbsp;
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitting || isSubmitDisabled}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;

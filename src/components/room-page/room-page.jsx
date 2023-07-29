import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
import CommentForm from "../comment-form/comment-form";
import ReviewsList from "../reviews-list/reviews-list";
import Map from "../map/map";
import OfferList from "../offers-list/offers-list";
import { getAuthorizationStatus } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { AuthorizationStatus } from "../../const";
import { BACKEND_URL } from "../../const";
import LoadingScreen from "../loading-screen/loading-screen";
import { fetchCommentsList, appendFavorite } from "../../store/api-actions";
import HeaderNav from "../header-nav/header-nav";

const RoomPage = () => {
  const { id } = useParams();

  const [offer, setOffer] = useState(null);
  const [offersNear, setOffersNear] = useState(null);
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offerResponse = await axios.get(`${BACKEND_URL}/hotels/${id}`);
        setOffer(offerResponse.data);

        const offersNearResponse = await axios.get(
          `${BACKEND_URL}/hotels/${id}/nearby`
        );
        setOffersNear(offersNearResponse.data);

        dispatch(fetchCommentsList(id)).then(() => setLoading(false));
      } catch (error) {
        if (error.response && error.response.status === 404) {
          history.push("/not-found");
        } else {
          console.error(error);
        }
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const {
    title,
    is_premium,
    price,
    images,
    bedrooms,
    max_adults,
    rating,
    description,
    goods,
    host,
    is_favorite,
  } = offer;
  const { avatar_url, is_pro, name } = host;
  const bookMarkActiveClass = is_favorite
    ? `property__bookmark-button--active`
    : ``;

  const handleToBookmarksClick = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push("/login");
    } else if (is_favorite) {
      dispatch(appendFavorite(id, 0)).then(() => {
        setOffer((prevOffer) => ({ ...prevOffer, is_favorite: false }));
      });
    } else if (!is_favorite) {
      dispatch(appendFavorite(id, 1)).then(() => {
        setOffer((prevOffer) => ({ ...prevOffer, is_favorite: true }));
      });
    }
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <HeaderNav />
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, index) => (
                <div className="property__image-wrapper" key={`${index}-${id}`}>
                  <img
                    className="property__image"
                    src={image}
                    alt="Photo studio"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>{is_premium ? `Premium` : ``}</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={`property__bookmark-button button ${bookMarkActiveClass}`}
                  type="button"
                  onClick={handleToBookmarksClick}
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `80%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  <span>Entire place</span>
                </li>
                <li className="property__feature property__feature--bedrooms">
                  <span>{bedrooms} Bedrooms</span>
                </li>
                <li className="property__feature property__feature--adults">
                  <span>Max {max_adults} adults</span>
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item, index) => (
                    <li
                      className="property__inside-item"
                      key={`${id}-${index}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={avatar_url}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{name}</span>
                  {is_pro ? (
                    <span className="property__user-status">Pro</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList />
                {authorizationStatus === AuthorizationStatus.AUTH && (
                  <CommentForm hotel_id={id} />
                )}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map points={offersNear} heightMap={579} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <OfferList offerCards={offersNear} isNearOffer={true} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RoomPage;

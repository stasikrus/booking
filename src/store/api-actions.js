import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

const fetchCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.storeComments(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((response) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.loginSuccess(response.data.email));
    })
    .catch(() => {})
);

const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(`/login`, { email, password })
    .then((response) => {
      console.log(response);
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.loginSuccess(response.data.email));
    })
);

const appendUserComment = (id, comment, rating) => (dispatch, _getState, api) => {
  return api.post(`/comments/${id}`, { comment, rating })
    .then(({ data }) => {
      dispatch(ActionCreator.storeComments(data));
      return data; // Возвращаем данные для обработки в .then обработчике компонента
    })
    .catch((error) => {
      console.log(error);
      throw error; // Бросаем ошибку, чтобы обработать её в .catch обработчике компонента
    });
};



export {fetchOffersList, checkAuth, login, appendUserComment, fetchCommentsList};

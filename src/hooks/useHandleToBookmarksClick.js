import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAuthorizationStatus, getDefaultOffers } from "../store/selectors";
import { AuthorizationStatus } from '../const';
import { appendFavorite } from '../store/api-actions';
import { ActionCreator } from '../store/action';
import { getIsFavoriteById } from '../store/selectors';

const useHandleToBookmarksClick = (id) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const defaultOffers = useSelector(getDefaultOffers);
  const is_favorite = useSelector((state) => getIsFavoriteById(state, id));

  return () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
        history.push("/login");
    } else {
      dispatch(ActionCreator.changeFavorite(defaultOffers, +id));
      dispatch(appendFavorite(id, !is_favorite ? 1 : 0));
    }
  };
};

export default useHandleToBookmarksClick;

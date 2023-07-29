import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import { checkAuth } from '../../store/api-actions';

const PrivateRoute = ({ render, path, exact }) => {
  const [loading, setLoading] = useState(true);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth()).then(() => setLoading(false));

  }, []);

  // Пока идет проверка авторизации, отображаем индикатор загрузки
  if (loading) {
    return <LoadingScreen />;
  }

  console.log(authorizationStatus)

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return authorizationStatus === AuthorizationStatus.AUTH ? (
          render(routeProps)
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;

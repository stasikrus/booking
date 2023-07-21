import React from "react";
import { getUserLogin, getAuthorizationStatus } from "../../store/selectors";
import { AuthorizationStatus } from "../../const";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  const authorizationStatus = getAuthorizationStatus();
  const userLogin = getUserLogin();

  return (
    <>
      {authorizationStatus === AuthorizationStatus.AUTH ? (
        <Link to="/favorites" className="header__nav-link header__nav-link--profile">
          <span className="header__user-name user__name">{userLogin}</span>
        </Link>
      ) : (
        <Link to="/login" className="header__nav-link header__nav-link--profile">
          <span className="header__login">Sign in</span>
        </Link>
      )}
    </>
  );
};

export default HeaderNav;

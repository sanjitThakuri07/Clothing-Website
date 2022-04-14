import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { UserContext } from "../../context/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Links = [
  {
    id: 1,
    url: "/shop",
    name: "Shop",
  },
  {
    id: 2,
    url: "/contact",
    name: "Contact",
  },
];

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    // setCurrentUser(null);
  };
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          {Links.map((link) => (
            <Link className="nav-link" to={link.url} key={link.id}>
              {link.name}
            </Link>
          ))}
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navigation;

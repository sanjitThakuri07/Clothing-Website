import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import "./navigation.styles.scss";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

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
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

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
          <CartIcon
            onClick={() => {
              setIsCartOpen(!isCartOpen);
            }}
          ></CartIcon>
        </div>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navigation;

import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

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
  {
    id: 3,
    url: "/sign-in",
    name: "Sign In",
  },
];

const Navigation = () => {
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
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navigation;

import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
// import { useNavigate } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/quotes" className={classes.logo}>
        React Quotes
      </NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              All Quotes
            </NavLink>
            <NavLink
              to="/new-quote"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Add Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

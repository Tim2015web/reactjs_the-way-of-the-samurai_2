import classes from "./Header.module.css";
import logotypeIcon from "../../assets/icons/logotype.png";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className={classes.header}>
      <NavLink to="/" className={classes.logotype}>
        <img
          className={classes.logotype__image}
          src={logotypeIcon}
          alt="Логотип"
        />
        <p className={classes.logotype__caption}>Общаемся.ру</p>
      </NavLink>

      <div className={classes.login}>
        <div className={classes.login__button}>Войти</div>
      </div>
    </div>
  );
}

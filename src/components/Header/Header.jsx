import classes from "./Header.module.scss";
import logotypeIcon from "../../assets/icons/logotype.png";
import { NavLink } from "react-router";
import profileIcon from "../../assets/user-avatar-default.jpg";

export default function Header({ isAuth, authAvatar, handleLogOut }) {
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

        {isAuth ? (
          <div className={classes.login}>
            <button className={classes.login__button} onClick={handleLogOut}>
              Выйти
            </button>
            <img src={authAvatar || profileIcon} alt="Авторизация" />
          </div>
        ) : (
          <NavLink to="/auth" className={classes.login__button}>
            Войти
          </NavLink>
        )}
      </div>
    </div>
  );
}

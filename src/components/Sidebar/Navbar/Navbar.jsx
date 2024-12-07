import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";

const setActive = ({ isActive }) =>
  `${classes.navbar__menuLink} ${
    isActive ? classes.navbar__menuLinkActive : ""
  }`;

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <ul className={classes.navbar__menu}>
        <li>
          <NavLink to="/" className={setActive}>
            Профиль
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages" className={setActive}>
            Сообщения
          </NavLink>
        </li>
        <li>
          <NavLink to="/friends" className={setActive}>
            Друзья
          </NavLink>
        </li>
        <li>
          <NavLink to="/photos" className={setActive}>
            Фото
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" className={setActive}>
            Музыка
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={setActive}>
            Настройки
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <ul className={classes.navbar__menu}>
        <li>
          <a
            className={`${classes.navbar__menuLink} ${classes.active}`}
            href="#"
          >
            Профиль
          </a>
        </li>
        <li>
          <a className={classes.navbar__menuLink} href="#">
            Сообщения
          </a>
        </li>
        <li>
          <a className={classes.navbar__menuLink} href="#">
            Друзья
          </a>
        </li>
        <li>
          <a className={classes.navbar__menuLink} href="#">
            Фото
          </a>
        </li>
        <li>
          <a className={classes.navbar__menuLink} href="#">
            Музыка
          </a>
        </li>
        <li>
          <a className={classes.navbar__menuLink} href="#">
            Настройки
          </a>
        </li>
      </ul>
    </div>
  );
}

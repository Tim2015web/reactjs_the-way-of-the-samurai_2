import classes from "./Header.module.css";
import logotypeIcon from "../../assets/icons/logotype.png";

export default function Header() {
  return (
    <div className={classes.header}>
      <a href="#" className={classes.logotype}>
        <img
          className={classes.logotype__image}
          src={logotypeIcon}
          alt="Логотип"
        />
        <p className={classes.logotype__caption}>Общаемся.ру</p>
      </a>

      <div className={classes.login}>
        <div className={classes.login__button}>Войти</div>
      </div>
    </div>
  );
}

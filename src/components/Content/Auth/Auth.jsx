import ContentHeader from "../ContentHeader";
import classes from "./Auth.module.scss";
import authIcon from "../../../assets/icons/auth.png";

export default function Auth({
  handleSubmit,
  login,
  password,
  setLogin,
  setPassword,
}) {
  return (
    <section className={classes.auth}>
      <ContentHeader source={authIcon} name="Авторизация" />

      <div className={classes.content}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login">Логин:</label>
            <input
              id="login"
              placeholder="12345"
              name="login"
              autoComplete="username"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Пароль:</label>
            <input
              id="password"
              placeholder="12345"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button type="submit">Войти</button>
        </form>
      </div>
    </section>
  );
}

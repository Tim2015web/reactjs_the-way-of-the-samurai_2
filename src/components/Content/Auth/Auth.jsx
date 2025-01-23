import ContentHeader from "../ContentHeader";
import classes from "./Auth.module.scss";
import authIcon from "../../../assets/icons/auth.png";
import { useForm } from "react-hook-form";

export default function Auth({ checkLogin }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    checkLogin(data);
    reset();
  };

  return (
    <section className={classes.auth}>
      <ContentHeader source={authIcon} name="Авторизация" />

      <div className={classes.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="login">Логин:</label>
            <input
              id="login"
              placeholder="12345"
              autoComplete="username"
              autoFocus
              {...register("login", { required: "Логин обязателен" })}
            />
            {errors.login && <p className={classes.error}>{errors.login.message}</p>}
          </div>

          <div>
            <label htmlFor="password">Пароль:</label>
            <input
              id="password"
              placeholder="12345"
              type="password"
              autoComplete="current-password"
              {...register("password", {
                required: "Пароль обязателен",
                minLength: {
                  value: 5,
                  message: "Минимум 5 символов",
                },
              })}
            />
            {errors.password && (
              <p className={classes.error}>{errors.password.message}</p>
            )}
          </div>

          <div>
            <input id="remember" type="checkbox" {...register("remember")} />
            <label htmlFor="remember">Запомнить меня</label>
          </div>

          <button type="submit">Войти</button>
        </form>
      </div>
    </section>
  );
}

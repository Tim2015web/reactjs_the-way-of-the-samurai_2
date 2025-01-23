import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

// Функция высшего порядка для добавления логики проверки авторизации
export default function withAuthRedirect(WrappedComponent) {
  return function AuthRedirect(props) {
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    const [initialized, setInitialized] = useState(false);

    // Завершаем инициализацию после первого рендера
    useEffect(() => {
      setInitialized(true);
    }, []);

    // Пока не завершена инициализация, ничего не рендерим
    if (!initialized) return null;

    // Если не авторизован, перенаправляем на /auth
    if (!isAuth) return <Navigate to="/auth" />;

    // Если авторизован, рендерим переданный компонент
    return <WrappedComponent {...props} />;
  };
}

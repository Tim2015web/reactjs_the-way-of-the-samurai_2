import classes from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import HeaderContainer from "./components/Header/HeaderContainer";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthUserData,setAuthUserAvatar } from "./redux/authReducer";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenIsAuth = localStorage.getItem("authToken");
    const tokenAuthAvatar = localStorage.getItem("authAvatar");

    if (!tokenIsAuth) {
      dispatch(setAuthUserData(false)); // Если токен отсутствует
    } else {
      dispatch(setAuthUserData(tokenIsAuth));
      dispatch(setAuthUserAvatar(tokenAuthAvatar));
    }

    console.log("Старт приложения...");
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <HeaderContainer />
      <Sidebar />
      <Content />
    </div>
  );
}

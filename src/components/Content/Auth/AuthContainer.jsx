import Auth from "./Auth";
import { connect } from "react-redux";
import * as actions from "../../../redux/authReducer";
import { useState } from "react";
import { useNavigate } from "react-router";

function AuthContainer({ setAuthUserData, setAuthUserAvatar }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Проверка логина и пароля =^.^=
    if (login === "12345" && password === "12345") {
      handleSuccess(); // Выполняем функцию при правильном вводе
    } else {
      alert("Неверный логин или пароль");
      setLogin("");
      setPassword("");
    }
  };

  const handleSuccess = () => {
    setAuthUserData(true);
    setAuthUserAvatar("https://i.ibb.co/1ZmNrYX/user-avatar-00.jpg");
    
    localStorage.setItem("authToken", true);
    localStorage.setItem(
      "authAvatar",
      "https://i.ibb.co/1ZmNrYX/user-avatar-00.jpg"
    );

    navigate("/profile");
  };

  return (
    <Auth
      handleSubmit={handleSubmit}
      login={login}
      password={password}
      setLogin={setLogin}
      setPassword={setPassword}
    />
  );
}

function mapStateToProps(state) {
  return { authPage: state.authReducer };
}

export default connect(mapStateToProps, actions)(AuthContainer);

import Auth from "./Auth";
import { connect } from "react-redux";
import * as actions from "../../../redux/authReducer";
import { useNavigate } from "react-router";

function AuthContainer({ setAuthUserData, setAuthUserAvatar }) {
  const navigate = useNavigate();

  // Проверка логина и пароля =^.^=
  const checkLogin = (data) => {
    if (data.login === "12345" && data.password === "12345") {
      handleSuccess(data.remember);
    } else {
      alert("Неверный логин или пароль");
    }
  };

  // Если авторизация успешна
  const handleSuccess = (remember) => {
    setAuthUserData(true);
    setAuthUserAvatar("https://i.ibb.co/1ZmNrYX/user-avatar-00.jpg");

    // Прописать авторизацию в куки, если поставили галочку
    if (remember) {
      localStorage.setItem("authToken", true);
      localStorage.setItem(
        "authAvatar",
        "https://i.ibb.co/1ZmNrYX/user-avatar-00.jpg"
      );
    }

    navigate("/profile");
  };

  return <Auth checkLogin={checkLogin} />;
}

function mapStateToProps(state) {
  return { authPage: state.authReducer };
}

export default connect(mapStateToProps, actions)(AuthContainer);

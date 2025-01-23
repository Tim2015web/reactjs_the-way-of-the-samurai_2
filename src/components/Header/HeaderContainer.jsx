import { connect } from "react-redux";
import * as actions from "../../redux/authReducer";
import { useNavigate } from "react-router";
import Header from "./Header";

function HeaderContainer({
  isAuth,
  authAvatar,
  setAuthUserData,
  setAuthUserAvatar,
}) {
  const navigate = useNavigate();

  function handleLogOut() {
    setAuthUserData(false);
    setAuthUserAvatar(null);
    localStorage.setItem("authToken", false);
    localStorage.setItem("authAvatar", null);    
    navigate("/auth");
  }

  return (
    <Header
      isAuth={isAuth}
      authAvatar={authAvatar}
      handleLogOut={handleLogOut}
    />
  );
}

function mapStateToProps(state) {
  return {
    isAuth: state.authReducer.isAuth,
    authAvatar: state.authReducer.authAvatar,
  };
}

export default connect(mapStateToProps, actions)(HeaderContainer);

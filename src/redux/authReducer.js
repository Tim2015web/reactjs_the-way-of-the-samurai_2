const SET_USER_DATA = "SET-USER-DATA";
const SET_USER_AVATAR = "SET-USER-AVATAR";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  authAvatar: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, isAuth: action.payload };

    case SET_USER_AVATAR:
      return { ...state, authAvatar: action.payload };

    default:
      return state;
  }
}

export function setAuthUserData(payload) {
  return { type: SET_USER_DATA, payload };
}

export function setAuthUserAvatar(payload) {
  return { type: SET_USER_AVATAR, payload };
}
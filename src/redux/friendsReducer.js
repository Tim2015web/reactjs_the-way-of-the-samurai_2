import { serverAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_FRIENDS_COUNT = "SET-TOTAL-FRIENDS-COUNT";
const SET_PAGE_SIZE = "SET-PAGE-SIZE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE-IS-FOLLOWING ";

let initialState = {
  friends: [],
  pageSize: 5,
  totalFriendsCount: 20,
  currentPage: 1,
  isFetching: false,
  isFollowing: [],
};

export default function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        friends: state.friends.map((item) => {
          if (item.id === action.payload) return { ...item, status: true };
          return item;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        friends: state.friends.map((item) => {
          if (item.id === action.payload) return { ...item, status: false };
          return item;
        }),
      };

    case SET_USERS:
      return { ...state, friends: action.payload };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };

    case SET_TOTAL_FRIENDS_COUNT:
      return { ...state, totalFriendsCount: action.payload };

    case SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.payload };

    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        isFollowing: action.payload
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter((id) => id != action.userId),
      };

    default:
      return state;
  }
}

// Экшены
export function follow(payload) {
  return { type: FOLLOW, payload };
}

export function unFollow(payload) {
  return { type: UNFOLLOW, payload };
}

export function setFriends(payload) {
  return { type: SET_USERS, payload };
}

export function setCurrentPage(payload) {
  return { type: SET_CURRENT_PAGE, payload };
}

export function setTotalFriendsCount(payload) {
  return { type: SET_TOTAL_FRIENDS_COUNT, payload };
}

export function setPageSize(payload) {
  return { type: SET_PAGE_SIZE, payload };
}

export function setIsFetching(payload) {
  return { type: TOGGLE_IS_FETCHING, payload };
}

export function setIsFollowing(payload, userId) {
  return { type: TOGGLE_IS_FOLLOWING, payload, userId };
}

// Получить список друзей
export function getFriends(currentPage, pageSize) {
  return (dispatch) => {
    dispatch(setIsFetching(true));

    serverAPI.getFriends(currentPage, pageSize).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setFriends(data.friends));
      dispatch(setTotalFriendsCount(data.totalCount));
    });
  };
}

// Обработчик изменения размера страницы
export function handlePageSizeChangeThunk(value) {
  return (dispatch) => {
    // Установка нового размера страницы
    dispatch(setPageSize(Number(value)));
    // Сброс на первую страницу
    dispatch(setCurrentPage(1));
  };
}


// Универсальный обработчик для кнопок "Назад" и "Вперед"
export function handlePageChangeThunk(direction, pagesCount, currentPage) {
  return (dispatch) => {
    const newPage = currentPage + direction;
    if (newPage >= 1 && newPage <= pagesCount) {
      dispatch(setCurrentPage(newPage));
    }
  };
}

// Подписаться/отписаться
export function handleSubscriptionThunk(friendId, shouldFollow) {
  return (dispatch) => {
    dispatch(setIsFollowing(true, friendId));
    serverAPI.postFollow(friendId, shouldFollow);
    shouldFollow ? dispatch(follow(friendId)) : dispatch(unFollow(friendId));
    dispatch(setIsFollowing(false, friendId));
  };
}

import { serverAPI } from "../api/api";

let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let UPDATE_NEW_POST_LINK = "UPDATE-NEW-POST-LINK";
let SET_USER_PROFILE = "SET-USER-PROFILE";
let UPDATE_STATUS = "UPDATE-STATUS";

let initialState = {
  profile: null,
  posts: [
    {
      id: 0,
      message: "Сегодня был отличный день, делюсь настроением!",
      image: "https://s2.fotokto.ru/photo/full/723/7230550.jpg",
      likes: 0,
    },
    {
      id: 1,
      message: "Кто-то смотрел новый сериал? Рекомендации?",
      image: "https://s1.fotokto.ru/photo/full/823/8238756.jpg",
      likes: 0,
    },
    {
      id: 2,
      message: "Провел утро с чашкой кофе и хорошей книгой. Советую всем!",
      image: "https://s1.fotokto.ru/photo/full/729/7292874.jpg",
      likes: 5,
    },
    {
      id: 3,
      message: "Делюсь фотографией с вечерней прогулки. Как красиво, правда?",
      image: "https://s2.fotokto.ru/photo/full/822/8227434.jpg",
      likes: 1,
    },
    {
      id: 4,
      message: "Друзья, кто знает хорошие места для отдыха в этом сезоне?",
      image: "https://s2.fotokto.ru/photo/full/617/6176533.jpg",
      likes: 4,
    },
    {
      id: 5,
      message: "Спасибо всем за поздравления, день рождения удался!",
      image: "https://s3.fotokto.ru/photo/full/809/8097336.jpg",
      likes: 6,
    },
    {
      id: 6,
      message: "Сегодня узнал что-то новое и хочу поделиться с вами!",
      image: "https://download.samplelib.com/png/sample-bumblebee-400x300.png",
      likes: 8,
    },
    {
      id: 7,
      message: "Не могу поверить, что это произошло, такое вдохновение!",
      image: "https://download.samplelib.com/jpeg/sample-birch-400x300.jpg",
      likes: 10,
    },
    {
      id: 8,
      message: "Планирую провести уикенд активно. Кто хочет присоединиться?",
      image: "https://download.samplelib.com/jpeg/sample-city-park-400x300.jpg",
      likes: 5,
    },
    {
      id: 9,
      message: "Люблю тихие вечера дома с любимыми сериалами.",
      image: "https://download.samplelib.com/jpeg/sample-clouds-400x300.jpg",
      likes: 3,
    },
  ],
  newPostData: {
    text: "",
    link: "",
  },
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts.length,
        message: state.newPostData.text,
        image: state.newPostData.link,
        likes: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostData: { text: "", link: "" },
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostData: { ...state.newPostData, text: action.payload },
      };

    case UPDATE_NEW_POST_LINK:
      return {
        ...state,
        newPostData: { ...state.newPostData, link: action.payload },
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    case UPDATE_STATUS:
      return {
        ...state,
        profile: { ...state.profile, statusText: action.payload },
      };

    default:
      return state;
  }
}

export function addPost() {
  return { type: ADD_POST };
}

export function onChangeText(payload) {
  return { type: UPDATE_NEW_POST_TEXT, payload };
}

export function onChangeLink(payload) {
  return { type: UPDATE_NEW_POST_LINK, payload };
}

export function setUserProfile(payload) {
  return { type: SET_USER_PROFILE, payload };
}

export function updateStatus(payload) {
  return { type: UPDATE_STATUS, payload };
}

export function getProfile(friendId) {
  return (dispatch) => {
    serverAPI.getProfile(friendId).then(({ data }) => {
      dispatch(setUserProfile(data));
    });
  };
}

// Санка для обновления статуса
export function postStatus(newStatus) {
  return (dispatch) => {
    serverAPI.postStatus(newStatus).then(() => {
      dispatch(updateStatus(newStatus));
    });
  };
}

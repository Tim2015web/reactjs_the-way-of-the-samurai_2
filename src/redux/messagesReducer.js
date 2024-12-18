const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
  users: [
    { id: 0, name: "Иван" },
    { id: 1, name: "Анастасия" },
    { id: 2, name: "Дмитрий" },
    { id: 3, name: "Ольга" },
    { id: 4, name: "Алексей" },
  ],
  messages: [
    { id: 0, messageText: "Привет, как дела?" },
    { id: 1, messageText: "Привет! Что нового?" },
    { id: 2, messageText: "У меня важная новость!" },
    { id: 3, messageText: "Доброе утро!" },
    { id: 4, messageText: "Позвони, когда освободишься." },
  ],
  newMessageText: "",
};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: state.messages.length,
        messageText: state.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "", // Очищаем поле ввода
      };
    }

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.payload,
      };

    default:
      return state;
  }
}

// Action Creators
export function addMessageCreator() {
  return { type: ADD_MESSAGE };
}

export function onChangeMessageCreator(message) {
  return { type: UPDATE_NEW_MESSAGE_TEXT, payload: message };
}

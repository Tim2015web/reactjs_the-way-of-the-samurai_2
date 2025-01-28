const ADD_MESSAGE = "ADD-MESSAGE";

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
};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: state.messages.length,
        messageText: action.payload,
      };
      return { ...state, messages: [...state.messages, newMessage] };
    }

    default:
      return state;
  }
}

export function addMessage(payload) {
  return { type: ADD_MESSAGE, payload };
}

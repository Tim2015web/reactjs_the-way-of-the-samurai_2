import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import friendsReducer from "./friendsReducer";

export default configureStore({
  reducer: { authReducer, profileReducer, messagesReducer, friendsReducer },
});

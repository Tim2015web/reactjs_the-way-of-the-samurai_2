import Messages from "./Messages";
import * as actions from "../../../redux/messagesReducer";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function MessagesContainer() {
  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState("");

  function newMessage() {
    dispatch(actions.addMessage(messageText));
    setMessageText("");
  }

  return (
    <Messages
      messagesPage={useSelector((state) => state.messagesReducer)}
      messageText={messageText}
      setMessageText={setMessageText}
      newMessage={newMessage}
    />
  );
}

export default withAuthRedirect(MessagesContainer); // HOC

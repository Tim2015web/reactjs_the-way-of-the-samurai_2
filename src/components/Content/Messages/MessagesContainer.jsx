import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/messagesReducer";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

function MessagesContainer() {
  const dispatch = useDispatch();

  return (
    <Messages
      messagesPage={useSelector((state) => state.messagesReducer)}
      addMessage={(message) => dispatch(actions.addMessage(message))}
      onChangeMessage={(text) => dispatch(actions.onChangeMessage(text))}
    />
  );
}

export default withAuthRedirect(MessagesContainer); // HOC

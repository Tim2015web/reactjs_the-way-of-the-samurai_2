import Messages from "./Messages";
import { connect } from "react-redux";
import * as actions from "../../../redux/messagesReducer";

function mapStateToProps(state) {
  return { messagesPage: state.messagesReducer };
}
export const MessagesContainer = connect(mapStateToProps, actions)(Messages);

export default MessagesContainer;

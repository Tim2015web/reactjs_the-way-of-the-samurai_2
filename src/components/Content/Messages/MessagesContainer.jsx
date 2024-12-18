import Messages from "./Messages";
import { connect } from "react-redux";
import {
  addMessageCreator,
  onChangeMessageCreator,
} from "../../../redux/messagesReducer";

function mapStateToProps(state) {
  return { messagesPage: state.messagesReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    addMessage: () => dispatch(addMessageCreator()),
    onChangeMessage: (event) =>
      dispatch(onChangeMessageCreator(event.target.value)),
  };
}

export const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;

import { connect } from "react-redux";
import Profile from "./Profile";
import {
  addPostCreator,
  onChangeLinkCreator,
  onChangeTextCreator,
} from "../../../redux/profileReducer";

function mapStateToProps(state) {
  return { profilePage: state.profileReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: () => dispatch(addPostCreator()),
    onChangeText: (event) => dispatch(onChangeTextCreator(event.target.value)),
    onChangeLink: (event) => dispatch(onChangeLinkCreator(event.target.value)),
  };
}

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default ProfileContainer;

import { connect } from "react-redux";
import Profile from "./Profile";
import * as actions from "../../../redux/profileReducer";

import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { serverAPI } from "../../../api/api";

function ProfileContainer({
  profilePage,
  addPost,
  onChangeText,
  onChangeLink,
  setUserProfile,
}) {
  
  const { friendId = 0 } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    serverAPI.getProfile(friendId).then(({ data }) => {
      setUserProfile(data);
    });
  }, [friendId, setUserProfile]);

  return (
    <Profile
      profilePage={profilePage}
      addPost={addPost}
      onChangeText={onChangeText}
      onChangeLink={onChangeLink}
    />
  );
}

function mapStateToProps(state) {
  return { profilePage: state.profileReducer };
}

export default connect(mapStateToProps, actions)(ProfileContainer);

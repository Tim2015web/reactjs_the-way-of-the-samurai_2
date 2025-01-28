import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as actions from "../../../redux/profileReducer";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

function ProfileContainer() {
  const dispatch = useDispatch();
  const profilePage = useSelector((state) => state.profileReducer);
  const { friendId = 0 } = useParams();
  const [postData, setPostData] = useState({ text: "", link: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.getProfile(friendId));
  }, [friendId, dispatch]);

  function newPost() {
    dispatch(actions.addPost(postData.text, postData.link));
    setPostData({ text: "", link: "" });
  }

  return (
    <Profile
      profilePage={profilePage}
      onStatusChange={(newStatus) => dispatch(actions.postStatus(newStatus))}
      newPost={newPost}
      postData={postData}
      setPostData={setPostData}
    />
  );
}

export default withAuthRedirect(ProfileContainer); // HOC

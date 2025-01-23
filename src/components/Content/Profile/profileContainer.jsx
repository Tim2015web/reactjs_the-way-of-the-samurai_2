import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import * as actions from "../../../redux/profileReducer";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

function ProfileContainer() {
  const dispatch = useDispatch();
  const profilePage = useSelector((state) => state.profileReducer);
  const { friendId = 0 } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.getProfile(friendId));
  }, [friendId, dispatch]);

  return (
    <Profile
      profilePage={profilePage}
      addPost={() => dispatch(actions.addPost())}
      onChangeText={(text) => dispatch(actions.onChangeText(text))}
      onChangeLink={(link) => dispatch(actions.onChangeLink(link))}
      onStatusChange={(newStatus) => dispatch(actions.postStatus(newStatus))}
    />
  );
}

export default withAuthRedirect(ProfileContainer); // HOC

import classes from "./Profile.module.scss";
import messagesIcon from "../../../assets/icons/profile.png";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";

export default function Profile({
  userProfile,
  userPosts,
  newPostText,
  newPost,
  changePostText,
}) {
  return (
    <div className={classes.profile}>
      <div className={classes.header}>
        <img
          className={classes.header__icon}
          src={messagesIcon}
          alt="Профиль"
        />
        <p className={classes.header__title}>Профиль</p>
      </div>

      <ProfileInfo userProfile={userProfile} />
      <ProfilePosts
        userPosts={userPosts}
        newPostText={newPostText}
        newPost={newPost}
        changePostText={changePostText}
      />
    </div>
  );
}

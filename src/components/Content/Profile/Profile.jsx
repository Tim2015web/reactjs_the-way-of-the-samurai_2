import classes from "./Profile.module.scss";
import messagesIcon from "../../../assets/icons/profile.png";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";

export default function Profile({
  profilePage,
  addPost,
  onChangeText,
  onChangeLink,
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

      <ProfileInfo info={profilePage.info} />
      <ProfilePosts
        posts={profilePage.posts}
        newPostData={profilePage.newPostData}
        addPost={addPost}
        onChangeText={onChangeText}
        onChangeLink={onChangeLink}
      />
    </div>
  );
}

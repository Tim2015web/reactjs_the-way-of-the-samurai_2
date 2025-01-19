import classes from "./Profile.module.scss";
import headerIcon from "../../../assets/icons/profile.png";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";
import ContentHeader from "../ContentHeader";

export default function Profile({
  profilePage,
  addPost,
  onChangeText,
  onChangeLink,
}) {
  
  return (
    <section className={classes.profile}>
      <ContentHeader source={headerIcon} name="Профиль" />

      <ProfileInfo info={profilePage.profile} />
      <ProfilePosts
        posts={profilePage.posts}
        newPostData={profilePage.newPostData}
        addPost={addPost}
        onChangeText={onChangeText}
        onChangeLink={onChangeLink}
      />
    </section>
  );
}

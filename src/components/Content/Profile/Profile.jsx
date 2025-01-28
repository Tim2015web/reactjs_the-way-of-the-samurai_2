import classes from "./Profile.module.scss";
import headerIcon from "../../../assets/icons/profile.png";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";
import ContentHeader from "../ContentHeader";

export default function Profile({
  profilePage,
  onStatusChange,
  newPost,
  postData,
  setPostData,
}) {
  return (
    <section className={classes.profile}>
      <ContentHeader source={headerIcon} name="Профиль" />

      <ProfileInfo info={profilePage.profile} onStatusChange={onStatusChange} />

      <ProfilePosts
        posts={profilePage.posts}
        newPostData={profilePage.newPostData}
        newPost={newPost}       
        postData={postData}
        setPostData={setPostData}
      />
    </section>
  );
}

import NewPost from "./NewPost";
import Posts from "./Posts";
import classes from "./Profile.module.scss";

export default function Profile() {
  return (
    <div className={classes.profile}>
      <NewPost />
      <Posts />
    </div>
  );
}

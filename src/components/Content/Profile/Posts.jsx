import classes from "./Profile.module.scss";

export default function Posts() {
  return (
    <div className={classes.posts}>
      <Post message="Сообщение 1" />
      <Post message="Сообщение 2" />
      <Post message="Сообщение 3" />
      <Post message="Сообщение 4" />
      <Post message="Сообщение 5" />
    </div>
  );
}

export function Post({ message }) {
  return <div className={classes.post}>{message}</div>;
}

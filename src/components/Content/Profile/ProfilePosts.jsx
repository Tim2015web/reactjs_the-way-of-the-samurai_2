import classes from "./Profile.module.scss";
import defaultImage from "../../../assets/default.png";

export default function ProfilePosts({
  posts,
  newPost,
  postData,
  setPostData,
}) {
  return (
    <div className={classes.posts}>
      <div className={classes.posts__header}>
        <p className={classes.posts__title}>Посты</p>
      </div>

      <div className={classes.posts__newPost}>
        <textarea
          className={classes.posts__textarea}
          placeholder="Напишите что-то..."
          name="textNewPost"
          onChange={(event) =>
            setPostData((prev) => ({ ...prev, text: event.target.value }))
          }
          value={postData.text}
        />
        <input
          className={classes.posts__input}
          type="text"
          placeholder="Вставьте ссылку на изображение..."
          name="linkNewPost"
          onChange={(event) =>
            setPostData((prev) => ({ ...prev, link: event.target.value }))
          }
          value={postData.link}
        />
        <button className={classes.posts__button} onClick={newPost}>
          Добавить пост
        </button>
      </div>

      <div className={classes.posts__myPosts}>
        {posts
          .slice()
          .reverse()
          .map((item) => (
            <div key={item.id} className={classes.posts__post}>
              <img
                className={classes.posts__postImage}
                src={item.image || defaultImage}
                alt="Картинка поста"
              />
              <p className={classes.posts__postText}>{item.message}</p>
              <div className={classes.posts__actions}>
                <span className={classes.posts__likeCount}>
                  {item.likes} лайков
                </span>
                <button className={classes.posts__likeButton}>❤️</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

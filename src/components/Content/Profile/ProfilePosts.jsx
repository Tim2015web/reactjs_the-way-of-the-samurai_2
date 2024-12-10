import classes from "./Profile.module.scss";
import defaultImage from "../../../assets/default.png";
import { useRef, useState } from "react";

export default function ProfilePosts({
  userPosts,
  newPostText,
  newPost,
  changePostText,
}) {
  const [postText, setPostText] = useState("");

  const textRef = useRef();

  function addPost() {
    newPost(postText); // Добавляем пост
    setPostText(""); // Сбрасываем текст
  }

  function onChangeText(event) {
    setPostText(event.target.value); // Обновляем текст
  }

  return (
    <div className={classes.posts}>
      <div className={classes.posts__header}>
        <p className={classes.posts__title}>Посты</p>
      </div>

      {/* Добавить пост */}
      <div className={classes.posts__newPost}>
        <textarea
          className={classes.posts__textarea}
          placeholder="Напишите что-то..."
          name="textAreaNewPost"
          onChange={onChangeText}
          value={postText} // Привязка к состоянию
          ref={textRef}
        />
        <input
          className={classes.posts__input}
          type="text"
          placeholder="Вставьте ссылку на изображение..."
          name="inoutNewPost"
        />
        <button className={classes.posts__button} onClick={addPost}>
          Добавить пост
        </button>
      </div>

      {/* Все посты */}
      <div className={classes.posts__myPosts}>
        {userPosts
          .slice()
          .reverse()
          .map((item) => (
            <div key={item.id} className={classes.posts__post}>
              <img
                className={classes.posts__postImage}
                src={item.image || defaultImage}
                alt="Картинка поста"
              />
              <p className={classes.posts__postText}>{item.text}</p>
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

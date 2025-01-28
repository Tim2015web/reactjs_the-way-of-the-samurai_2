import classes from "./Messages.module.scss";
import headerIcon from "../../../assets/icons/messages.png";
import ContentHeader from "../ContentHeader";

import { NavLink, useNavigate } from "react-router";

const setActive = ({ isActive }) =>
  `${classes.main__user} ${isActive ? classes.main__userActive : ""}`;

export default function Messages({
  messagesPage,
  messageText,
  setMessageText,
  newMessage,
}) {
  return (
    <section className={classes.messages}>
      <ContentHeader source={headerIcon} name="Сообщения" />

      <div className={classes.main}>
        <div className={classes.main__users}>
          <ul>
            {messagesPage.users.map((user) => (
              <li key={user.id}>
                <NavLink to={"/messages/" + user.id} className={setActive}>
                  {user.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.main__messages}>
          {messagesPage.messages.map((message) => (
            <div key={message.id}>{message.messageText}</div>
          ))}
        </div>
      </div>

      <div className={classes.footer}>
        <textarea
          className={classes.footer__textarea}
          placeholder="Введите сообщение..."
          name="textNewMessage"
          onChange={(event) => setMessageText(event.target.value)}
          value={messageText}
        ></textarea>
        <button className={classes.footer__button} onClick={newMessage}>
          Отправить
        </button>
      </div>
    </section>
  );
}

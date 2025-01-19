import classes from "./Messages.module.scss";
import headerIcon from "../../../assets/icons/messages.png";
import { NavLink } from "react-router";
import ContentHeader from "../ContentHeader";

const setActive = ({ isActive }) =>
  `${classes.main__user} ${isActive ? classes.main__userActive : ""}`;

export default function Messages({
  messagesPage,
  addMessage,
  onChangeMessage,
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
          onChange={(event) => onChangeMessage(event.target.value)}
          value={messagesPage.newMessageText}
        ></textarea>
        <button className={classes.footer__button} onClick={addMessage}>
          Отправить
        </button>
      </div>
    </section>
  );
}

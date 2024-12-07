import classes from "./Messages.module.scss";
import messagesIcon from "../../../assets/icons/messages.png";
import data from "../../../data.js";

export default function Messages() {
  return (
    <div className={classes.messages}>
      <div className={classes.header}>
        <img
          className={classes.header__icon}
          src={messagesIcon}
          alt="Сообщения"
        />
        <p className={classes.header__title}>Messages</p>
      </div>

      <div className={classes.main}>
        <div className={classes.main__users}>
          {data.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </div>

        <div className={classes.main__messages}>
          {data[0].messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

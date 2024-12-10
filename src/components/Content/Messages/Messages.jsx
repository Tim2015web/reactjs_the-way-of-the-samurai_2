import classes from "./Messages.module.scss";
import messagesIcon from "../../../assets/icons/messages.png";
import { NavLink } from "react-router";

const setActive = ({ isActive }) =>
  `${classes.main__user} ${isActive ? classes.main__userActive : ""}`;

export default function Messages({ dataUserMessages }) {
  return (
    <div className={classes.messages}>
      <div className={classes.header}>
        <img
          className={classes.header__icon}
          src={messagesIcon}
          alt="Сообщения"
        />
        <p className={classes.header__title}>Сообщения</p>
      </div>

      <div className={classes.main}>
        <div className={classes.main__users}>
          <ul>
            {dataUserMessages.map((item) => (
              <li key={item.id}>
                <NavLink to={"/messages/" + item.id} className={setActive}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.main__messages}>
          {dataUserMessages.map((item) => (
            <div key={item.id}>{item.messages}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

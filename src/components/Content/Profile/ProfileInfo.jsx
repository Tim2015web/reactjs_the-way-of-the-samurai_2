import classes from "./Profile.module.scss";
import userAvatar from "../../../assets/user-avatar.jpg";

export default function ProfileInfo({ info }) {
  return (
    <div className={classes.info}>
      <div className={classes.info__user}>
        <div className={classes.info__avatar}>
          <img src={userAvatar} alt="Аватар пользователя" />
        </div>
        <div className={classes.info__data}>
          <div className={classes.info__dataItem}>
            <strong>Имя:</strong> {info.name}
          </div>
          <div className={classes.info__dataItem}>
            <strong>Локация:</strong> {info.location}
          </div>
          <div className={classes.info__dataItem}>
            <strong>Дата рождения:</strong> {info.dateOfBirth}
          </div>
          <div className={classes.info__dataItem}>
            <strong>Образование:</strong> {info.education}
          </div>
          <div className={classes.info__dataItem}>
            <strong>Вебсайт:</strong>{" "}
            <a href={info.webSite} target="_blank" rel="noopener noreferrer">
              {info.webSite}
            </a>
          </div>
          <div className={classes.info__dataItem}>
            <strong>Занятость:</strong> {info.occupation}
          </div>
          <div className={classes.info__dataItem}>
            <strong>Интересы:</strong> {info.interests}
          </div>
          <div className={classes.info__dataItem}>
            <strong>Телефон:</strong> {info.phoneNumber}
          </div>
          <div className={classes.info__dataItem}>
            <strong>Email:</strong> {info.email}
          </div>
          <div className={classes.info__dataItem}>
            <strong>Социальные сети:</strong>
            <ul>
              <li>
                <a
                  href={`https://instagram.com/${info.socialMedia.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`https://twitter.com/${info.socialMedia.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href={`https://linkedin.com/in/${info.socialMedia.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.info__status}>
        Статус: <span className={classes.info__statusText}>{info.status}</span>
      </div>
    </div>
  );
}

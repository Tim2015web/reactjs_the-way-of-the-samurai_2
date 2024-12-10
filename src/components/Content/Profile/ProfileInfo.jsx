import classes from "./Profile.module.scss";
import userAvatar from "../../../assets/user-avatar.jpg";

export default function ProfileInfo({ userProfile }) {
  return (
    <div className={classes.info}>
      <div className={classes.info__user}>
        <div className={classes.info__avatar}>
          <img src={userAvatar} alt="Аватар пользователя" />
        </div>
        <div className={classes.info__data}>
          <div className={classes.info__dataItem}>
            <strong>Имя:</strong> {userProfile.name}
          </div>
          <div className={classes.info__dataItem}>
            <strong>Локация:</strong> {userProfile.location}
          </div>
          <div className={classes.info__dataItem}>
            <strong>Дата рождения:</strong> {userProfile.dateOfBirth}
          </div>
          <div className={classes.info__dataItem}>
            <strong>Образование:</strong> {userProfile.education}
          </div>
          <div className={classes.info__dataItem}>
            <strong>Вебсайт:</strong>{" "}
            <a
              href={userProfile.webSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {userProfile.webSite}
            </a>
          </div>
          <div className={classes.info__dataItem}>
            <strong>Занятость:</strong> {userProfile.occupation}
          </div>
          <div className={classes.info__dataItem}>
            <strong>Интересы:</strong> {userProfile.interests}
          </div>
          <div className={classes.info__dataItem}>
            <strong>Телефон:</strong> {userProfile.phoneNumber}
          </div>
          <div className={classes.info__dataItem}>
            <strong>Email:</strong> {userProfile.email}
          </div>
          <div className={classes.info__dataItem}>
            <strong>Социальные сети:</strong>
            <ul>
              <li>
                <a
                  href={`https://instagram.com/${userProfile.socialMedia.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`https://twitter.com/${userProfile.socialMedia.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href={`https://linkedin.com/in/${userProfile.socialMedia.linkedin}`}
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
        Статус:{" "}
        <span className={classes.info__statusText}>{userProfile.status}</span>
      </div>
    </div>
  );
}

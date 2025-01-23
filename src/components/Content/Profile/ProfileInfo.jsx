import classes from "./Profile.module.scss";
import userAvatar from "../../../assets/user-avatar-default.jpg";
import Preloader from "../../Preloader/Preloader";
import ProfileInfoStatus from "./ProfileInfoStatus";

export default function ProfileInfo({ info, onStatusChange }) {
  if (!info) {
    return <Preloader />;
  }
  return (
    <div className={classes.info}>
      <div className={classes.info__user}>
        <div className={classes.info__avatar}>
          <img src={info.avatar || userAvatar} alt="Аватар пользователя" />
        </div>

        <div className={classes.info__data}>
          <div className={classes.info__dataItem}>
            <strong>Имя:</strong> {info.name || "Не указано"}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Местоположение:</strong>{" "}
            {info.location.country
              ? `${info.location.country}, ${info.location.city}`
              : "Не указано"}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Дата рождения:</strong> {info.dateOfBirth || "Не указано"}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Образование:</strong> {info.education || "Не указано"}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Вебсайт:</strong>{" "}
            {info.webSite ? (
              <a href={info.webSite} target="_blank" rel="noopener noreferrer">
                {info.webSite}
              </a>
            ) : (
              "Не указано"
            )}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Занятость:</strong> {info.occupation || "Не указано"}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Интересы:</strong> {info.interests || "Не указано"}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Телефон:</strong> {info.phoneNumber || "Не указано"}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Email:</strong> {info.email || "Не указано"}
          </div>

          <div className={classes.info__dataItem}>
            <strong>Социальные сети:</strong>
            <ul>
              {info.socialMedia.instagram ? (
                <li>
                  <a
                    href={`https://instagram.com/${info.socialMedia.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              ) : null}
              {info.socialMedia.twitter ? (
                <li>
                  <a
                    href={`https://twitter.com/${info.socialMedia.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
              ) : null}
              {info.socialMedia.linkedin ? (
                <li>
                  <a
                    href={`https://linkedin.com/in/${info.socialMedia.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              ) : null}

              {/* Если все соцсети пустые, выводим сообщение */}
              {!info.socialMedia.instagram &&
                !info.socialMedia.twitter &&
                !info.socialMedia.linkedin && (
                  <li>Социальные сети не указаны</li>
                )}
            </ul>
          </div>
        </div>
      </div>

      <ProfileInfoStatus
        statusText={info.statusText}
        onStatusChange={onStatusChange}
        profileId={info.id}
      />
    </div>
  );
}

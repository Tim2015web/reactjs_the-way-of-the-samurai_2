import classes from "./Profile.module.scss";
import { useState } from "react";

export default function ProfileInfoStatus({
  statusText,
  onStatusChange,
  profileId,
}) {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(statusText || "");

  function activateEditMode() {
    profileId === 0 && setEditMode(true);
  }

  function deactivateEditMode() {
    setEditMode(false);
    if (localStatus !== statusText) {
      onStatusChange(localStatus);
    }
  }

  return (
    <div className={classes.info__status}>
      Статус:
      {!editMode ? (
        <span
          title={
            profileId === 0 ? "Изменить статус" : "Нельзя менять не свой статус"
          } // Условие для title
          className={classes.info__statusText}
          onClick={activateEditMode}
        >
          {statusText || "Не указано"}
        </span>
      ) : (
        <div className={classes.info__statusForm}>
          <input
            className={classes.info__statusInput}
            value={localStatus}
            onChange={(event) => setLocalStatus(event.target.value)}
            onKeyDown={(event) => {
              event.key === "Enter" && deactivateEditMode();
            }}
          />
          <button
            className={classes.info__statusButton}
            onClick={deactivateEditMode}
          >
            Сохранить
          </button>
        </div>
      )}
    </div>
  );
}

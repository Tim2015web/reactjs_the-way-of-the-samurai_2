import classes from "./Content.module.scss";

export default function ContentHeader({ source, name }) {
  return (
    <div className={classes.header}>
      <img className={classes.header__icon} src={source} alt={name || "icon"} />
      <p className={classes.header__title}>{name || "Название"}</p>
    </div>
  );
}

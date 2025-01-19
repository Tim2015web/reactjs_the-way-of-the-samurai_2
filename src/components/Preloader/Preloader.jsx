import classes from "./Preloader.module.scss";
import spinner from "../../assets/spinner.gif";

export default function Preloader() {
  return (
    <section className={classes.preloader}>
      <img src={spinner} />
    </section>
  );
}

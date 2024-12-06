import Friends from "./Friends/Friends";
import Navbar from "./Navbar/Navbar";
import classes from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <Navbar />
      <Friends />
    </div>
  );
}

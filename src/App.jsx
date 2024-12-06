import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

export default function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

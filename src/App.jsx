import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

export default function App({ data, newPost, changePostText }) {
  return (
    <div className={classes.container}>
      <Header />
      <Sidebar />
      <Content data={data} newPost={newPost} changePostText={changePostText} />
    </div>
  );
}

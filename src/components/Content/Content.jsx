import classes from "./Content.module.css";
import MessagesContainer from "./Messages/MessagesContainer";
import Friends from "./Friends/Friends";
import Photos from "./Photos/Photos";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import { Route, Routes } from "react-router";
import ProfileContainer from "./Profile/profileContainer";

export default function Content() {
  return (
    <div className={classes.content}>
      <Routes>
        <Route path="/" element={<ProfileContainer />} />
        <Route path="/messages/*" element={<MessagesContainer />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/music" element={<Music />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

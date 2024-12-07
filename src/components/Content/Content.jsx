import classes from "./Content.module.css";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import Friends from "./Friends/Friends";
import Photos from "./Photos/Photos";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import { Route, Routes } from "react-router";

export default function Content() {
  return (
    <div className={classes.content}>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/music" element={<Music />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

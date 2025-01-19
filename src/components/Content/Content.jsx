import classes from "./Content.module.scss";
import ProfileContainer from "./Profile/profileContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import FriendsContainer from "./Friends/FriendsContainer";
import Photos from "./Photos/Photos";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import { Navigate, Route, Routes } from "react-router";
import UndefinedPage from "./UndefinedPage/UndefinedPage";
import AuthContainer from "./Auth/AuthContainer";

export default function Content() {
  return (
    <div className={classes.content}>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/profile/:friendId?" element={<ProfileContainer />} />

        <Route path="/messages/*" element={<MessagesContainer />} />
        <Route path="/friends" element={<FriendsContainer />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/music" element={<Music />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/auth" element={<AuthContainer />} />
        <Route path="*" element={<UndefinedPage />} />
      </Routes>
    </div>
  );
}

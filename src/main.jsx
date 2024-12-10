import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import data from "./data.js";
import { newPost, changePostText } from "./data.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App data={data} newPost={newPost} changePostText={changePostText} />
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom";
import Homework from "./App.js";
import "./index.css";

const user = {
  firstName: "Ruba",
  lastName: "Abu Isa",
  avatarUrl: "https://www.w3schools.com/howto/img_avatar2.png"
};

ReactDOM.render(<Homework user={user} />, document.getElementById("root"));

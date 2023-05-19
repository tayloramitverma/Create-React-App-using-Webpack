import React from "react";
import MainStyle from "./main.module.css";
import "./app.css";
import "./button.scss";
import Logo from "./images/logo.png";

export default function App() {
  return (
    <div>
      <div className={MainStyle.logoContainer}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={MainStyle.container}>
        <h1 className={MainStyle.heading}>Hello, I'm heading</h1>
        <div>
          <button className="success">Success</button>
        </div>
      </div>
    </div>
  );
}

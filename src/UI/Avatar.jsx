import React from "react";

import classes from "./Avatar.module.css";

const Avatar = ({ src }) => {
  return <img src={src} alt="Avatar" className={classes["profile-img"]} />;
};

export default Avatar;

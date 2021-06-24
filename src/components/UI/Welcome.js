import React from "react";
import classes from "./Welcome.module.css";
const Welcome = () => {
  return (
    <div>
      <div>
        <p className={classes.text}>Welcome to Food Recipe Page..!</p>
      </div>
      <div>
        <img
          src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          alt='Food_Image'
          className={classes.img}
        />
      </div>
    </div>
  );
};

export default Welcome;

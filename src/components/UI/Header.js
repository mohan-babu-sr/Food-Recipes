import React from "react";
import classes from "./Header.module.css";
import Button from "@material-ui/core/Button";

const Header = props => {
  return (
    <div className={classes.header}>
      <span className={classes.logo}>
        Food Recipe <span className={classes.emoji}>😋</span>
      </span>
      <Button
        className={classes.button}
        color='secondary'
        variant='outlined'
        onClick={props.onRecipeList}
      >
        Get Recipe
      </Button>
    </div>
  );
};

export default Header;

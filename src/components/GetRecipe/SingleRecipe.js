import React, { useState } from "react";
import GetCard from "./GetCard";
import classes from "./SingleRecipe.module.css";
import RecipeDetails from "./RecipeDetails";

import PopoverPopupState from "../Days/RecipePopup";
import ViewListIcon from "@material-ui/icons/ViewList";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
const SingleRecipe = props => {
  const [show, setShow] = useState(false);
  console.log(props);
  return (
    <div className={classes.recipe}>
      <h2>Changed</h2>
    </div>
  );
};

export default SingleRecipe;

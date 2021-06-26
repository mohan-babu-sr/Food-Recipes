import React, { useState } from "react";
import classes from "./GetCard.module.css";
import RecipeDetails from "./RecipeDetails";
import PopoverPopupState from "../Days/RecipePopup";
import ViewListIcon from "@material-ui/icons/ViewList";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import SingleRecipe from "./SingleRecipe";
const GetCard = props => {
  const [show, setShow] = useState(false);

  const recipe = data => {
    console.log(data);
  };
  return (
    <div className={classes.recipe}>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.title} />
      <div className={classes.iconsdiv}>
        <span className={classes.icons}>
          <PopoverPopupState ingredients={props} />
        </span>
        <span className={classes.icons}>
          <ViewListIcon onClick={() => setShow(!show)} />
        </span>
        <span className={classes.icons}>
          {/* <RotateLeftIcon onClick={() => SingleRecipe(props)} /> */}
          <RotateLeftIcon onClick={() => recipe(props.title)} />
        </span>
      </div>
      <div className={classes.ulscroll}>
        {show && <RecipeDetails ingredients={props.ingredients} />}
      </div>
      {/* <a href={props.source} target='_blank' rel='noopener noreferrer'>
        URL
      </a> */}
      {/* <button onClick={() => setShow(!show)}>Ingredients</button> */}
    </div>
  );
};

export default GetCard;

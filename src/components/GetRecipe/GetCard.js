import React, { useState } from "react";
import classes from "./GetCard.module.css";
import RecipeDetails from "./RecipeDetails";

const GetCard = props => {
  const [show, setShow] = useState(false);

  const recipe = data => {
    console.log(data);
  };
  return (
    <div className={classes.recipe}>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.title} />
      <a href={props.source} target='_blank' rel='noopener noreferrer'>
        URL
      </a>
      <button onClick={() => recipe(props.title)}>Change Recipe</button>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      <div className={classes.ulscroll}>
        {show && <RecipeDetails ingredients={props.ingredients} />}
      </div>
    </div>
  );
};

export default GetCard;

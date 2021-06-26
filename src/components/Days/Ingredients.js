import React from "react";
import IngredientsList from "../GetRecipe/IngredientsList";
import classes from "./Days.module.css";

const Ingredients = props => {
  const recipeList = props.sendRecipe.map((data, idx) => {
    // console.log(data.ingredients);
    return (
      <div className={classes.list}>
        <IngredientsList ingredients={data.ingredients} />
      </div>
    );
  });

  return (
    <div>{recipeList !== [] ? <h2>{recipeList}</h2> : "No Meals Found..!"}</div>
  );
};

export default Ingredients;

import React from "react";
import classes from "./Days.module.css";
import GetCard from "../GetRecipe/GetCard";
import { v4 as uuidv4 } from "uuid";

const Wednesday = props => {
  const recipeList = props.sendRecipe.map((data, idx) => {
    // console.log(data.title);

    return (
      <GetCard
        key={uuidv4()}
        id={data.id}
        title={data.title}
        image={data.image_url}
        publisher={data.publisher}
        source={data.source_url}
        ingredients={data.ingredients}
      />
    );
  });
  return (
    <div className={classes.day}>
      <div className={classes.wed}>Wednesday</div>
      {recipeList !== [] ? <h2>{recipeList}</h2> : "No Meals Found..!"}
    </div>
  );
};

export default Wednesday;

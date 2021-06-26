import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ingclasses from "./IngredientsList.module.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

let ca = [];
let ingArray = [];
const IngredientsList = ({ ingredients }) => {
  const [cart, setCart] = useState();

  const listArray = ingredients.map(data => {
    ingArray.push(data);
  });

  let checkRecipe = {};
  return ingredients.map(ingredient => {
    // console.log(ingredient.description);
    let description = checkRecipe[ingredient.description];
    let quantity = 0;
    if (checkRecipe[ingredient.description] == undefined) {
      checkRecipe[ingredient.description] = ingredient.quantity;
      quantity = ingredient.quantity;
      console.log("if");
    } else {
      console.log("else");
      quantity = checkRecipe[ingredient.description] + ingredient.quantity;
      checkRecipe[ingredient.description] = quantity;
    }
    // console.log(description);

    // const checkboxHandler = () => {
    //   setCheck(true);
    // };

    let toggleCheckboxChange = e => {
      ca.push(e);
      setCart(ca);
      console.log(ca);
    };
    return (
      <div>
        <List>
          <ListItem alignItems='flex-start'>
            <Divider variant='middle' component='li' />
            <input
              type='checkbox'
              value={ingredient.description}
              className={ingclasses.checkbox}
              onClick={() => {
                toggleCheckboxChange(ingredient);
              }}
            />
            <label>
              <ListItemText
                key={uuidv4()}
                for={ingredient.description}
                className={ingclasses.root}
                primary={ingredient.description}
                secondary={
                  <React.Fragment>
                    <Typography
                      component='span'
                      variant='body2'
                      color='textPrimary'
                    >
                      {quantity ? quantity : "0"}
                    </Typography>
                    {ingredient.unit}
                  </React.Fragment>
                }
              />
            </label>
          </ListItem>
        </List>
      </div>
    );
  });
};

export default IngredientsList;

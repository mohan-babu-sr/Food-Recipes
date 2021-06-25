import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ingclasses from "./IngredientsList.module.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const IngredientsList = ({ ingredients }) => {
  let ca = [];
  const [cart, setCart] = useState();
  return ingredients.map(ingredient => {
    let wrking = {};
    let description = wrking[ingredient.description];
    let quantity = 0;
    if (wrking[ingredient.description] == undefined) {
      wrking[ingredient.description] = ingredient.quantity;
      quantity = ingredient.quantity;
      // console.log("if");
    } else {
      // console.log("else");
      quantity = wrking[ingredient.description] + ingredient.quantity;
      wrking[ingredient.description] = quantity;
    }

    // const checkboxHandler = () => {
    //   setCheck(true);
    // };

    let toggleCheckboxChange = e => {
      ca.push(e);
      setCart(ca);
    };
    console.log(cart);
    return (
      <div>
        <List>
          <ListItem
            alignItems='flex-start'
            // onClick={() => {
            //   checkboxHandler();
            // }}
          >
            <Divider variant='middle' component='li' />
            <input
              type='checkbox'
              value={ingredient.description}
              className={ingclasses.checkbox}
              // onChange={toggleCheckboxChange}
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
                      //   className={classes.inline}
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

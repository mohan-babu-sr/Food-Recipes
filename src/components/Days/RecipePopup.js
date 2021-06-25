import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import VisibilityIcon from "@material-ui/icons/Visibility";
import classes from "./RecipePopup.module.css";
import RecipeDetails from "../GetRecipe/RecipeDetails";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import VirtualizedList from "./IngredientsPopup";

import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LinkIcon from "@material-ui/icons/Link";
export default function PopoverPopupState(props) {
  const [title, setTitle] = useState(props.ingredients.title);
  const [publisher, setPublisher] = useState(props.ingredients.publisher);
  const [url, setUrl] = useState(props.ingredients.url);

  const { loading = false } = props;
  console.log(props.ingredients);

  return (
    <PopupState
      width={40}
      variant='popover'
      popupId='demo-popup-popover'
      className={classes.box}
    >
      {popupState => (
        <div className={classes.popovericon}>
          <VisibilityIcon variant='contained' {...bindTrigger(popupState)} />

          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box p={2} width={500}>
              <Typography>
                <Box>
                  <Card margin={1}>
                    <CardHeader
                      avatar={
                        loading ? (
                          <Skeleton
                            animation='wave'
                            variant='circle'
                            width={40}
                            height={40}
                          />
                        ) : (
                          <Avatar
                            alt={props.ingredients.title}
                            src={props.ingredients.image}
                          />
                        )
                      }
                      action={
                        loading ? null : (
                          <a
                            href={props.ingredients.source}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <IconButton aria-label='link'>
                              <LinkIcon />
                            </IconButton>
                          </a>
                        )
                      }
                      title={
                        loading ? (
                          <Skeleton
                            animation='wave'
                            height={10}
                            width='80%'
                            style={{ marginBottom: 6 }}
                          />
                        ) : (
                          title
                        )
                      }
                      subheader={
                        loading ? (
                          <Skeleton animation='wave' height={10} width='40%' />
                        ) : (
                          publisher
                        )
                      }
                    />
                  </Card>
                </Box>

                <div className={classes.root}>
                  <br></br> Ingredients
                  <div className={classes.ingredients}>
                    <RecipeDetails
                      ingredients={props.ingredients.ingredients}
                    />
                  </div>
                </div>
              </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

// avatar={
//   loading?
//   (<Skeleton />):
//   (

//   <Avatar src={props.ingredients.image} />
//   <Skeleton>{props.ingredients.title}</Skeleton>
//   )
// }

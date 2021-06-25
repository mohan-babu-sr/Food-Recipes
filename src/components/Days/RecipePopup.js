import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import VisibilityIcon from "@material-ui/icons/Visibility";
import classes from "./Days.module.css";

export default function PopoverPopupState() {
  return (
    <PopupState variant='popover' popupId='demo-popup-popover'>
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
            <Box p={2}>
              <Typography>
                <div>
                  Title <br></br>URL <br></br>Publisher <br></br> Servings{" "}
                  <br></br> Ingredients
                </div>
              </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

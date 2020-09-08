import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LocalGroceryStoreRoundedIcon from "@material-ui/icons/LocalGroceryStoreRounded";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => {
  return {
    typographyStyles: {
      flex: 1
    }
  };
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles} variant="h6">
          Products
        </Typography>
        <LocalGroceryStoreRoundedIcon />
      </Toolbar>
    </AppBar>
  );
}

export default Header;

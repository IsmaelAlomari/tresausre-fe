import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SigninButton from "./Buttons/SigninButton";
import SignupButton from "./Buttons/SignupButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  navBar: {
    width: "90px",
  },
}));
const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar style={{ width: "90%" }} position="sticky" color="inherit">
      {" "}
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Treasure Hunt
        </Typography>
      </Toolbar>{" "}
      <div
        style={{
          alignItems: "flex-end",
          position: "absolute",
          right: "20px",
          flexDirection: "row",
          gap: "3px",
        }}
      >
        {" "}
        <SigninButton />
        <SignupButton />
      </div>
    </AppBar>
  );
};
export default NavBar;

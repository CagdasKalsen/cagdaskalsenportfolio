import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  const handleGithubClick = () => {
    window.open("https://github.com/CagdasKalsen", "_blank");
  };
  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/cagdaskalsensoftwareengineer/",
      "_blank"
    );
  };
  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction
        component={Link}
        icon={<GitHub />}
        className={classes.root}
        onClick={handleGithubClick}
      />
      <BottomNavigationAction
        component={Link}
        icon={<LinkedIn />}
        className={classes.root}
        onClick={handleLinkedinClick}
      />
    </BottomNavigation>
  );
};
export default Footer;

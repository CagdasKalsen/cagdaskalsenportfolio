import React from "react";
import { Icon } from "@iconify/react";
import "./Skills.css";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  title: {
    color: "tomato",
    margin: "2rem 0",
  },
}));
function Skills() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Technical Skills"]} typeSpeed={40} />
      </Typography>
      <div className="icons">
        <Icon icon="vscode-icons:file-type-python" width="60" height="50" />
        <Icon icon="logos:javascript" width="60" height="50" />
        <Icon icon="vscode-icons:file-type-html" width="60" height="50" />
        <Icon icon="vscode-icons:file-type-css" width="50" height="50" />
        <Icon icon="skill-icons:react-dark" width="60" height="50" />
        <Icon icon="skill-icons:expressjs-dark" width="60" height="50" />
        <Icon icon="skill-icons:bootstrap" width="60" height="50" />
        <Icon icon="skill-icons:sass" width="60" height="50" />
        <Icon icon="vscode-icons:file-type-node2" width="60" height="50" />
        <Icon
          style={{ backgroundColor: "white" }}
          icon="logos:github-icon"
          width="60"
          height="50"
        />
        <Icon icon="skill-icons:postgresql-dark" width="60" height="50" />
        <Icon
          style={{ backgroundColor: "white" }}
          icon="logos:django"
          width="60"
          height="50"
        />
        <Icon icon="logos:mysql" width="60" height="50" />
        <Icon icon="logos:node" width="60" height="50" />
        <Icon
          style={{ backgroundColor: "white" }}
          icon="logos:flask"
          width="60"
          height="50"
        />
        <Icon icon="logos:heroku" width="60" height="50" />
        <Icon
          style={{ backgroundColor: "white" }}
          icon="logos:netlify"
          width="60"
          height="50"
        />
      </div>
    </div>
  );
}

export default Skills;

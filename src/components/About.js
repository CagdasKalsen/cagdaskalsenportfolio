import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100%",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <p className="intro">
          I 'm a full stack software developer with a passion for creating
          innovative and impactful solutions.My expertise lies in building
          projects with <strong> Django, React, </strong> and{" "}
          <strong> JavaScript </strong>, and I'm constantly striving to expand
          my knowledge and skillset. <br />
          In addition to my technical background, I hold a bachelor 's degree in{" "}
          <strong> Business Administration and Finance </strong>as well as
          certificate in <strong> Data Analytics </strong>.This unique
          combination of skills enables me to approach development projects with
          a holistic perspective, always keeping the end user and business goals
          in mind. <br />
          <br />
          My portfolio showcases a variety of projects that highlight my
          technical abilities and problem solving skills.From web applications
          to data driven solutions, I 'm always eager to take on new challenges
          and explore new technologies. <br />
          <br />
          If you 're looking for a passionate and dedicated developer to bring
          your project to life, I 'd love to chat. Let' s work together to
          create something amazing!
        </p>{" "}
        <br />
        <br /> <br />
      </Grid>{" "}
    </Box>
  );
};

export default Contact;

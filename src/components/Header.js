import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import "./Header.css";
import Footer from "./Footer";
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Cagdas Kalsen" />
      </Grid>{" "}
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Cagdas Kalsen"]} typeSpeed={40} />
      </Typography>
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Full Stack Developer",
            "Frontend Developer",
            "Backend Developer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      <p className="intro">
        I'm a full stack software developer with a passion for creating
        innovative and impactful solutions. My expertise lies in building
        projects with <strong>Django, React,</strong> and{" "}
        <strong>JavaScript</strong>, and I'm constantly striving to expand my
        knowledge and skillset.
        <br />
        In addition to my technical background, I hold a bachelor's degree in{" "}
        <strong>Business Administration and Finance </strong>as well as
        certificate in <strong>Data Analytics</strong>.This unique combination
        of skills enables me to approach development projects with a holistic
        perspective, always keeping the end user and business goals in mind.
        <br />
        <br />
        My portfolio showcases a variety of projects that highlight my technical
        abilities and problem-solving skills. From web applications to
        data-driven solutions, I'm always eager to take on new challenges and
        explore new technologies.
        <br />
        <br />
        If you're looking for a passionate and dedicated developer to bring your
        project to life, I'd love to chat. Let's work together to create
        something amazing!
      </p>
      <Footer className="footer-header" />
    </Box>
  );
};

export default Header;

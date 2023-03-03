/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Portfolio.css";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/todo2.png";
import project2 from "../images/sports2.png";
import project3 from "../images/disney.png";
import project4 from "../images/trivia.png";
import project5 from "../images/ecommerce.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "TO DO LIST",
    description: `The app was built using REACT, a popular and efficient JAVASCRIPT library for building user interfaces The app is mobile-friendly, making it easy to manage your tasks on-the-go. Fully customisable and dynamic.Other features of the app include the ability to mark tasks as completed, delete tasks, and edit task names.`,
    image: project1,
    live: "https://todo-list-by-cagdas.netlify.app/",
    github: "https://github.com/CagdasKalsen/ToDo",
  },
  {
    name: "SPORTS POSTS",
    description: `Sports Posts app for posting recent sports events.Utilized a MERN stack (MONGODB, EXPRESS, REACT.JS, NODE.JS) to build a full stack application. Full Create, Read, Update, Delete (CRUD) operations. Deployed on NETLIFY `,
    image: project2,
    live: "https://dashing-florentine-191495.netlify.app/",
    github: "https://github.com/CagdasKalsen/sports-posts-frontend",
  },
  {
    name: "DISNEYLAND CHARACTERS",
    description: `Responsive web-app for fans of Disney; users find games, movies, and TV shows featuring specific characters.
    Used RESTful API  of Disneyland Character and fetch all characters and information. Utilized REACT for the front end; used NODE.JS for the back end. Implemented ES6 tagged template literals with Styled-Components along CSS3 to provide style and flexbox layout`,
    image: project3,
    live: "https://lucent-cannoli-76de25.netlify.app",
    github: "https://github.com/CagdasKalsen/project2",
  },
  {
    name: "TRIVIA GAME",
    description: `Online multiple choice math game for kids .Leveraged embedded JAVASCRIPT ,CSS3, HTML5, with partials to organize and display the visual aspects. Implemented a scoring system to track player progress and display final results and a countdown timer to add and element of challenge and pressure`,
    image: project4,
    live: "https://cagdaskalsen.github.io/Trivia-Game/",
    github: "https://github.com/CagdasKalsen/Trivia",
  },
  {
    name: "E-COMMERCE **WORK IN PROGRESS**",
    description: `Built a functional shopping site using DJANGO web framework and BOOTSRAP front-end framework.Implemented USER AUTHENTICATION system to provide secure access to user specific features, such as the ability to update their shopping cart and edit product information. Deployed the shopping site on HEROKU cloud platform, making it accessible to users from anywhere with an internet connection.`,
    image: project5,
    live: "https://cagdascapstone.herokuapp.com/",
    github: "https://github.com/CagdasKalsen/capstone_project",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid item lg={42} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="300"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="bod2" color="textPrimary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="cards">
                <Button variant="contained" size="large" color="primary">
                  <a href={`${project.github}`} target="_blank">
                    Git
                  </a>
                </Button>
                <Button variant="contained" size="medium" color="primary">
                  <a href={`${project.live}`} target="_blank">
                    Live
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;

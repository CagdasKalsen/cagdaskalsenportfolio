import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./Resume.css";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience{" "}
      </Typography>{" "}
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2023/2022
        </Typography>{" "}
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Engineer Fellow{" "}
          </Typography>{" "}
          <Typography variant="body1" align="center" className={classes.body1}>
            General Assembly{" "}
          </Typography>{" "}
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul>
              <li>
                Full-stack software engineering immersive student in an
                intensive, twelve-week, 450+ hour program focused on product
                development fundamentals, object-oriented programming, MVC
                frameworks, data modeling, and team collaboration strategies.
              </li>
              <li>Developed a portfolio of individual and group projects</li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2022/2013
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Independent Contractor
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Uber
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul>
              <li>
                Earned and maintained a 5.0 rating as a driver after providing
                8,500+ rides to customers in the Boston Metro.
              </li>
              <li>
                Communicated effectively with riders via the Uber app to
                coordinate pick-up and drop-off locations
              </li>
              <li>
                Provided excellent customer service to ensure apositive rider
                experience, resulting in maintained 5.0 rating
              </li>
              <li>
                Responded promptly to customer request and complaints, ensuring
                that customers would be satisfied and be repeat customers with
                Uber
              </li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020/2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Letter Carrier
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Usps
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            {" "}
            <ul>
              <li>
                Led a regular mail route, ensuring accurate and prompt delivery
                of packages, letters, and other mail items
              </li>
              <li>
                Prepared mail from the distribution case and organized it in
                sequence for efficient delivery
              </li>
              <li>
                Handled undeliverable mail in accordance with established
                procedures
              </li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2014/2013
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Real Estate Agent
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Proper Real Estate
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul>
              <li>
                Showed properties to prospective tenants and provided
                information about amenities, rent, prices, and lease terms
              </li>
              <li>
                Negotiated lease terms and conditions with prospective tenants,
                including rent, move-in dates, and lease length
              </li>
              <li>
                Prepared lease agreements in a detail-oriented manner to ensure
                that all agreements are in compliance with state and federal
                laws
              </li>
            </ul>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;

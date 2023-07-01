import React from "react";
import classes from "./Home.module.css";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const styles = makeStyles({
  getStartedButton: {
    color: "white !important",
    // width: "15rem!important",
    height: "4rem!important",
    fontSize: "2rem!important",
    fontWeight: "600 !important",
    fontFamily: "Montserrat !important",
    backgroundColor: "#8A2BE2 !important",
    textTransform: "capitalize!important",
    margin: "0 2rem!important",
    border: "none !important",
    transition: "transform 300ms ease-in !important",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: "#B569FC !important",
    },
  },
});

const Home = () => {
  const styling = styles();
  return (
    <div className={classes.layout}>
      <div className={classes["landing-section"]}>
        <div className={classes["landing-section-left"]}>
          <div className={classes["landing-section-text"]}>
            Hire the
            <span className={classes["highlight-text"]}> Right Talent</span>
            <br />
            with <span className={classes["highlight-text"]}>Right Skills</span>
          </div>
          <div className={classes["landing-section-subtext"]}>
            A company is like a giant clock. It only works if all the little
            cogs mesh together. <br />
            We help you find them.
          </div>
          <div>
            <Button variant="outlined" className={styling.getStartedButton}>
              Get Started
              <KeyboardArrowRightIcon sx={{ fontSize: "2.5rem" }} />
            </Button>
          </div>
        </div>
        <div className={classes["landing-section-right"]}>
          <img src="/hiring-process.gif" alt="" />
        </div>
      </div>
      <div className="steps-sectiono">
        
      </div>
    </div>
  );
};

export default Home;

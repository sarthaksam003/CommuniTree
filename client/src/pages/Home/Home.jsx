import React from "react";
import classes from "./Home.module.css";
import Button from "@mui/material/Button";
import { Paper, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AssessmentIcon from "@mui/icons-material/Assessment";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import BenefitsCarousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";

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
      <section className={classes["landing-section"]}>
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
            <Link to="/login">
              <Button variant="outlined" className={styling.getStartedButton}>
                Get Started
                <KeyboardArrowRightIcon sx={{ fontSize: "2.5rem" }} />
              </Button>
            </Link>
          </div>
        </div>
        <div className={classes["landing-section-right"]}>
          <img src="/hiring.png" alt="" />
        </div>
      </section>
      <section className={classes["key-features-section"]}>
        <Box className={classes["key-features-top"]}>
          <Box className={classes["key-features-top-left"]}>
            <Typography className={classes["key-features-heading"]}>
              Hire LIKE A BOSS
            </Typography>
            <Typography className={classes["key-features-content"]}>
              When you hire, a single employee record progresses from
              recruitment to onboarding. No double-ups or paper wrangling. The
              CommuniTree onboarding software also frees you from admin by
              enabling employees to enter all of their required details directly
              into the app, creating a seamless employee onboarding experience.
            </Typography>
            <Typography className={classes["key-features-content"]}>
              Customise your hiring to request the right documents and details
              from the start. Set positions up to automatically transition on
              employee birthdays or time frames of your choosing. Enable the
              platform to notify you of expiring VISAs, nudge people for missing
              bank details - every detail that you need to run a compliant
              operation.
            </Typography>
          </Box>
          <Box className={classes["key-features-top-right"]}>
            <img src="/dashboard.avif" alt="dashboard" />
          </Box>
        </Box>
        <Box className={classes["key-features-bottom"]}>
          <Paper className={classes["key-features-card"]}>
            <VideoChatIcon sx={{ fontSize: "5rem", color: "#B153E0" }} />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                m: "1rem 0",
                fontWeight: "600",
              }}
            >
              Dedicated Video Conferencing Platform
            </Typography>
            <Typography sx={{ fontFamily: "Montserrat", m: "1rem 0" }}>
              View and sort resumes, send messages, and schedule and conduct
              interviews — all on CommuniTree. No need to rely on other video
              conferencing platforms.
            </Typography>
          </Paper>
          <Paper className={classes["key-features-card"]}>
            <AssessmentIcon sx={{ fontSize: "5rem", color: "#B153E0" }} />
            <Typography
              sx={{ fontFamily: "Montserrat", m: "1rem 0", fontWeight: "600" }}
            >
              Online Assessment
            </Typography>
            <Typography sx={{ fontFamily: "Montserrat", m: "1rem 0" }}>
              Verify their abilities by creating online assessments and screener
              questions.
            </Typography>
          </Paper>
          <Paper className={classes["key-features-card"]}>
            <SmartToyIcon sx={{ fontSize: "5rem", color: "#B153E0" }} />
            <Typography
              sx={{ fontFamily: "Montserrat", m: "1rem 0", fontWeight: "600" }}
            >
              Automated Compliance
            </Typography>
            <Typography
              sx={{ fontFamily: "Montserrat", m: "1rem 0", width: "100%" }}
            >
              Report on expired qualifications and automate reminders sent to
              employees close to expiry date
            </Typography>
          </Paper>
        </Box>
      </section>
      <section className={classes["benefits-section"]}>
        <div className={classes["benefits-section-left"]}>
          <Typography
            variant="h3"
            className={classes["benefits-section-heading"]}
          >
            What can we <span style={{ color: "#7A26C1" }}>accomplish </span>
            together?
          </Typography>
          <Box className={classes["benefit-section-img"]}>
            <img src="/benefits1.png" alt="benefits" />
          </Box>
        </div>
        <div className={classes["benefits-section-right"]}>
          <BenefitsCarousel />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

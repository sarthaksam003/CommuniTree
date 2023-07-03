import React, { useContext } from "react";
import { Card, Box, Checkbox, Avatar, Typography } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Context } from "../..";
import classes from "./Listing.module.css";
import toast from "react-hot-toast";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Listing = ({ id, name, job, location, exp, img, contact }) => {
  const { savedCandidates, setSavedCandidates } = useContext(Context);
  const saveCandidatesHandler = () => {
    const isAdded = savedCandidates.includes(id);

    if (!isAdded) {
      setSavedCandidates((currentSaved) => [...currentSaved, id]);
    } else {
      const updatedSavedCandidates = savedCandidates.filter((c) => c === id);
      setSavedCandidates(updatedSavedCandidates);
    }
    toast.success("Candidate saved successfully!");
  };

  return (
    <Card className={classes["listing-card"]} elevation={3}>
      <Box sx={{ width: "20%", m: "0 1rem" }}>
        <Avatar alt={name} color="secondary" src={`${img}`} />
      </Box>
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
        color="secondary"
        onClick={saveCandidatesHandler}
      />
      <Box className={classes["listing-details"]}>
        <Typography
          sx={{ m: "0 1rem", fontFamily: "Montserrat", fontWeight: "600" }}
        >
          <nobr>Name: {name}</nobr>
        </Typography>
        <Typography
          sx={{ m: "0 1rem", fontFamily: "Montserrat", fontWeight: "600" }}
        >
          Location: {location.charAt(0).toUpperCase() + location.slice(1)}
        </Typography>
        <Typography
          sx={{ m: "0 1rem", fontFamily: "Montserrat", fontWeight: "600" }}
        >
          Job title: {job.charAt(0).toUpperCase() + job.slice(1)}
        </Typography>
        <Typography
          sx={{ m: "0 1rem", fontFamily: "Montserrat", fontWeight: "600" }}
        >
          Experience: {exp}
        </Typography>
        {contact && (
          <Typography
            sx={{ m: "0 1rem", fontFamily: "Montserrat", fontWeight: "600" }}
          >
            Contact: {contact}
          </Typography>
        )}
      </Box>
    </Card>
  );
};

export default Listing;

import { Typography, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "../..";
import Listing from "../../components/Listing/Listing";
import Loader from "../../components/Loader/Loader";
import { listings } from "./listings.js";
import classes from "./Dashboard.module.css";
const Dashboard = () => {
  const { user, loading } = useContext(Context);
  const [locationSearch, setLocationSearch] = useState("");
  const [jobTitleSearch, setJobTitleSearch] = useState("");
  
  return loading ? (
    <Loader />
  ) : (
    <section style={{ overflowX: "hidden" }}>
      <Box sx={{ m: "2rem" }}>
        <Typography className={classes["dashboard-heading"]}>
          Greetings, {user?.name}!
        </Typography>
      </Box>
      <Typography className={classes["dashboard-subheading"]}>
        Check out the listings today:
      </Typography>
      <Box className={classes["layout"]}>
        <Box className={classes["filter-layout"]}>
          <Box sx={{ m: "0rem 0rem 1rem 0" }}>
            <TextField
              height="2.5rem"
              value={locationSearch}
              color="secondary"
              onChange={(e) => {
                setLocationSearch(e.target.value.toLowerCase());
              }}
              placeholder="Search by location"
              type="text"
              className={classes["filter"]}
            />
          </Box>
          <Box>
            <TextField
              height="2.5rem"
              value={jobTitleSearch}
              color="secondary"
              onChange={(e) => {
                setJobTitleSearch(e.target.value.toLowerCase());
              }}
              placeholder="Search by job title"
              type="text"
              className={classes["filter"]}
            />
          </Box>
        </Box>
        <Box className={classes["listings-section"]}>
          {locationSearch.trim().length > 0 &&
            listings
              .filter((listing) => {
                return locationSearch.toLowerCase() === ""
                  ? listing
                  : listing.location.toLowerCase().includes(locationSearch);
              })
              .map((listing) => (
                <Listing
                  key={listing.id}
                  id={listing.id}
                  name={listing.name}
                  job={listing.job}
                  location={listing.location}
                  exp={listing.exp}
                  img={listing.img}
                />
              ))}
          {jobTitleSearch.trim().length > 0 &&
            listings
              .filter((listing) => {
                return jobTitleSearch.toLowerCase() === ""
                  ? listing
                  : listing.job.toLowerCase().includes(jobTitleSearch);
              })
              .map((listing) => (
                <Listing
                  key={listing.id}
                  id={listing.id}
                  name={listing.name}
                  job={listing.job}
                  location={listing.location}
                  exp={listing.exp}
                />
              ))}
          {locationSearch.trim().length === 0 &&
            jobTitleSearch.trim().length === 0 &&
            listings.map((listing) => (
              <Listing
                key={listing.id}
                id={listing.id}
                name={listing.name}
                job={listing.job}
                location={listing.location}
                exp={listing.exp}
              />
            ))}
        </Box>
      </Box>
    </section>
  );
};

export default Dashboard;

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import Listing from "../../components/Listing/Listing";
import { listings } from "../Dashboard/listings.js";

const SavedCandidates = () => {
  const { savedCandidates } = useContext(Context);
  const [savedCandidatesArr, setSavedCandidatesArr] = useState([]);

  useEffect(() => {
    setSavedCandidatesArr(
      listings.filter((c) => savedCandidates.includes(c.id))
    );
    // eslint-disable-next-line
  }, []);

  //   console.log(savedCandidates);
  //   console.log(listings.filter((c) => savedCandidates.includes(c.id)));
  console.log(savedCandidatesArr);
  return (
    <React.Fragment>
      {savedCandidates.length === 0 ? (
        <Box sx={{ m: "2rem" }}>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "3rem",
              fontWeight: "600",
            }}
          >
            No saved candidates yet!
          </Typography>
        </Box>
      ) : (
        <Box>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "3rem",
              fontWeight: "600",
            }}
          >
            Your saved candidates:
          </Typography>
          <Box sx={{ m: "2rem" }}>
            {savedCandidatesArr.map((listing) => (
              <Listing
                key={listing.id}
                id={listing.id}
                name={listing.name}
                job={listing.job}
                location={listing.location}
                exp={listing.exp}
                contact={listing.contact}
              />
            ))}
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
};

export default SavedCandidates;

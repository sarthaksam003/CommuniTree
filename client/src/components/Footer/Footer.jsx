import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Box, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styles from "./Footer.module.css";
// import Box from "@mui/core/Box";
// import Typography from "@mui/core/Typography";
// import Link from "@mui/material/Link";

const useStyles = makeStyles(() => ({
  rootBox: {
    [useTheme().breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  footerNav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center !important",
    marginRight: "auto",
    // marginLeft: useTheme().spacing(3),
    marginLeft: "1rem",
    // marginBottom: useTheme().spacing(0),
    marginBottom: "0rem",

    [useTheme().breakpoints.down("md")]: {
      width: "100%",
      marginLeft: "auto",
      marginTop: "3rem !important",
      marginBottom: "3rem !important",
    },
    color: "white !important",
  },
  footerLink: {
    marginLeft: "3rem !important",
    marginRight: "3rem !important",
    // marginLeft: useTheme().spacing(3),
    // marginRight: useTheme().spacing(3),
    [useTheme().breakpoints.down("md")]: {
      marginBottom: "1rem !important",
    },
    textDecoration: "none !important",
    color: "white !important",
    fontFamily: "Montserrat !important",
    fontSize:"1rem !important"
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  const content = {
    brand: { image: "/logo-no-background.svg", width: 150 },
    copy: "© 2023 CommuniTree All rights reserved.",
    link1: "Contact",
    link2: "Privacy Policy",
    link3: "FAQ",
    ...props.content,
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={content.brand.image} alt="" width={content.brand.width} />
    );
  } else {
    brand = content.brand.text || "";
  }

  return (
    <footer className={styles["layout"]}>
      <Container maxWidth="lg">
        <Box
          py={6}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          className={classes.rootBox}
        >
          <Link href="#" color="inherit" underline="none">
            {brand}
          </Link>
          <Box component="nav" className={classes.footerNav}>
            <Link
              href="#"
              variant="body1"
              color="textPrimary"
              className={classes.footerLink}
            >
              {content["link1"]}
            </Link>
            <Link
              href="#"
              variant="body1"
              color="textPrimary"
              className={classes.footerLink}
            >
              {content["link2"]}
            </Link>
            <Link
              href="#"
              variant="body1"
              color="textPrimary"
              className={classes.footerLink}
            >
              {content["link3"]}
            </Link>
            <Link
              href="#"
              variant="body1"
              color="textPrimary"
              className={classes.footerLink}
            >
              {content["link4"]}
            </Link>
          </Box>
          <Typography
            color="textSecondary"
            component="p"
            variant="caption"
            gutterBottom={false}
            sx={{color:"white",fontFamily:"Montserrat",fontSize:"1rem"}}
          >
            {content["copy"]}
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}

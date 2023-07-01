import React, { useState } from "react";
import classes from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { ListItem, ListItemText, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const toggleSideBarHandler = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <div className={classes.layout}>
      {toggleSidebar && (
        <div className={classes.sidebarBackdrop}>
          <div className={classes.sidebar}>
            <div>
              <div
                className={classes.sidebarHeader}
                style={{ position: "relative" }}
              >
                <img
                  src="/brandlogosidebar.svg"
                  alt="brand-logo"
                  className={classes.brandLogoMob}
                />
                <CloseIcon
                  className={classes["ui-icons"]}
                  onClick={toggleSideBarHandler}
                />
              </div>
              <div>
                <Divider />
                <Link to="/">
                  <ListItem button>
                    <ListItemText
                      primary="Home"
                      className={classes.sidebarNavItems}
                    />
                  </ListItem>
                </Link>
                <Divider />
                <Link to="/">
                  <ListItem button>
                    <ListItemText
                      primary="Login"
                      className={classes.sidebarNavItems}
                    />
                  </ListItem>
                </Link>
                <Divider />
                <Link to="/register">
                  <ListItem button>
                    <ListItemText
                      primary="Register"
                      className={classes.sidebarNavItems}
                    />
                  </ListItem>
                </Link>
                <Divider />
                <Divider />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={classes.padding}>
        <div className={classes["main-logo"]}>
          <Link to="/" className={classes["logo-kebab-layout"]}>
            <img
              src="/logo-no-background.svg"
              alt="brand-logo"
              className={classes.brandlogo}
            />
          </Link>
          <div className={classes["main-pages-navigation"]}>
            <Link to="/" className={classes["main-pages-navlinks"]}>
              <div>Home</div>
            </Link>
            <Link to="/login" className={classes["main-pages-navlinks"]}>
              <div>Login</div>
            </Link>
            <Link to="/register" className={classes["main-pages-navlinks"]}>
              <div>Register</div>
            </Link>
          </div>
          {/* <div className={classes["main-pages-navigation-right"]}>
            <SearchIcon className={classes.searchIcon} sx={{ fontSize: 30 }} />
            <CallIcon className={classes.callIcon} sx={{ fontSize: 30 }} />
            <span className={classes.contactNo}>(+91) 93 11 88 65 99</span>
          </div> */}
          <div className={classes.kebab} onClick={toggleSideBarHandler}>
            {!toggleSidebar && <MenuIcon className={classes["menu-icon"]} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

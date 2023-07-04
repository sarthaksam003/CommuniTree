import React, { useState, useContext } from "react";
import classes from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ListItem, ListItemText, Divider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Context, server } from "../..";
import toast from "react-hot-toast";
import axios from "axios";
const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, setLoading } =
    useContext(Context);
  const toggleSideBarHandler = () => {
    setToggleSidebar(!toggleSidebar);
  };

  const logoutHandler = async () => {
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });

      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
    toggleSideBarHandler();
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
                <div style={{ textAlign: "center", width: "100%" }}>
                  <img
                    src="/my-image.png"
                    alt="brand-logo"
                    className={classes.brandLogoMob}
                  />
                </div>
                <CloseIcon
                  className={classes["ui-icons"]}
                  onClick={toggleSideBarHandler}
                />
              </div>
              <div>
                <Divider />
                {isAuthenticated && (
                  <Link
                    to="/home"
                    className={classes.sidebarNavItems}
                    onClick={toggleSideBarHandler}
                  >
                    <ListItem button>
                      <ListItemText primary="Home" />
                    </ListItem>
                  </Link>
                )}
                <Divider />
                <Divider />
                {isAuthenticated && (
                  <Link
                    to="/savedcandidates"
                    className={classes.sidebarNavItems}
                    onClick={toggleSideBarHandler}
                  >
                    <ListItem button>
                      <ListItemText primary="Saved Applications" />
                    </ListItem>
                  </Link>
                )}
                <Divider />
                {!isAuthenticated && (
                  <Link
                    to="/login"
                    className={classes.sidebarNavItems}
                    onClick={toggleSideBarHandler}
                  >
                    <ListItem button>
                      <ListItemText primary="Login" />
                    </ListItem>
                  </Link>
                )}
                <Divider />
                {isAuthenticated && (
                  <Link
                    onClick={logoutHandler}
                    className={classes.sidebarNavItems}
                  >
                    <ListItem button>
                      <ListItemText
                        primary="Logout"
                        className={classes.sidebarNavItems}
                      />
                    </ListItem>
                  </Link>
                )}
                <Divider />
                {!isAuthenticated && (
                  <Link
                    to="/register"
                    className={classes.sidebarNavItems}
                    onClick={toggleSideBarHandler}
                  >
                    <ListItem button>
                      <ListItemText
                        primary="Register"
                        className={classes.sidebarNavItems}
                      />
                    </ListItem>
                  </Link>
                )}
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
              src="/finalbrandlogo.png"
              alt="brand-logo"
              className={classes.brandlogo}
            />
          </Link>
          <div className={classes["main-pages-navigation"]}>
            {isAuthenticated && (
              <Link to="/home" className={classes["main-pages-navlinks"]}>
                <div>Home</div>
              </Link>
            )}
            {isAuthenticated && (
              <Link
                to="/savedcandidates"
                className={classes["main-pages-navlinks"]}
              >
                <div>Saved Applications</div>
              </Link>
            )}
            {isAuthenticated ? (
              <div
                onClick={logoutHandler}
                className={classes["main-pages-navlinks"]}
              >
                <div>Logout</div>
              </div>
            ) : (
              <Link to="/login" className={classes["main-pages-navlinks"]}>
                <div>Login</div>
              </Link>
            )}
            {!isAuthenticated && (
              <Link to="/register" className={classes["main-pages-navlinks"]}>
                <div>Register</div>
              </Link>
            )}
          </div>
          <div className={classes.kebab} onClick={toggleSideBarHandler}>
            {!toggleSidebar && <MenuIcon className={classes["menu-icon"]} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

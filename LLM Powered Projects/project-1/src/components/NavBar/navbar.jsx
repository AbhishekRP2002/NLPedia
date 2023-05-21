import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { useTheme } from "@material-ui/core/styles";
import "./navbar.css";


const useStyles = makeStyles((theme) => ({
  navlinks: {
 
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    // marginRight: theme.spacing(10),
    // marginLeft: theme.spacing(10),
    padding: "5px 18px",
    margin: "20px",
    "&:hover": {
        border: "1px solid white",
        borderRadius: "25px",
      
    },
    },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar className="navbar-container" position="static">
      <CssBaseline />
      <Toolbar>
        {/* <Typography  className={classes.logo}>
          Voice2Mail
        </Typography> */}
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

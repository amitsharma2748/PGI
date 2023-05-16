import { Menu, MenuItem, Divider, Grid, Box, Container } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../images/Header_and_Footer/header_logo.png";
import logo_right from "../images/Header_and_Footer/logo.png";
import "../styles/component/Header.scss";
import StatesModal from "./StatesModal";
import ReportModal from "./ReportModal";
import CategoriesModal from "./CategoriesModal";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(true);
  const [currentId, setCurrentId] = useState(null);

  const handleClose = () => {
    setCurrentId(null);
  };

  const handleClick = (event) => {
    event.currentTarget.id === currentId
      ? setCurrentId(null)
      : setCurrentId(event.currentTarget.id);
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  console.log(currentId);
  return (
    <>
      {" "}
      <Box className="navbar" disableGutters color="inherit">
        <Container
          maxWidth={"lg"}
          sx={{ backgroundColor: "white" }}
          disableGutters
        >
          <Grid container spacing={1} className="img">
            <Grid item xs={12} md={3} textAlign={"center"}>
              <Box
                sx={{ maxWidth: "95%" }}
                component="img"
                alt="Your logo."
                src={logo}
              />
            </Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={3} textAlign={"center"}>
              <Box
                sx={{ maxWidth: "90%", paddingRight: "5%" }}
                component="img"
                alt="Your logo."
                src={logo_right}
              />
            </Grid>
          </Grid>
        </Container>
        <Divider className="divider" sx={{ margin: 0 }} />
        <Container maxWidth={"lg"}>
          <Box disableGutters component="div" className="bottom-header">
            <ul>
              <li
                className="btn"
                variant="text"
                color="inherit"
                component="div"
                size="large"
              >
                Home
              </li>
              <li
                className="btn"
                variant="text"
                color="inherit"
                component="div"
                size="large"
              >
                ABOUT PGI-D
              </li>

              <li
                id="state-index-menu"
                onClick={handleClick}
                className="btn"
                variant="text"
                color="inherit"
                size="large"
              >
                STATES INDEX
                <KeyboardArrowDownIcon />
              </li>

              <li
                id="report-menu"
                onClick={handleClick}
                aria-controls={open ? "report-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                className="btn"
                variant="text"
                color="inherit"
                size="large"
              >
                REPORTS
                <KeyboardArrowDownIcon />
              </li>

              <li
                size="large"
                endIcon={<KeyboardArrowDownIcon />}
                id="categories-menu"
                className="btn"
                variant="text"
                color="inherit"
                onClick={handleClick}
                aria-controls={open ? "categories-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                CATEGORIES
                <KeyboardArrowDownIcon />
              </li>
            </ul>
          </Box>
        </Container>
        <Divider className="divider" sx={{ margin: 0 }} />
      </Box>
      {currentId === "state-index-menu" && (
        <StatesModal
          open={currentId === "state-index-menu"}
          close={() => handleClose()}
        />
      )}
      {currentId === "categories-menu" && (
        <CategoriesModal
          open={currentId === "categories-menu"}
          close={() => handleClose()}
        />
      )}
      {currentId === "report-menu" && (
        <ReportModal
          open={currentId === "report-menu"}
          close={() => handleClose()}
        />
      )}
    </>
  );
};

export default Navbar;

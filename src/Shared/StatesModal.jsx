import { Grid, Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import "../styles/component/StatesModal.scss";
const StatesModal = (props) => {
  const { open, close } = props;
  const stateRef = useRef();
  const handleClose = () => {
    close();
  };

  useEffect(() => {
    const liItems = document.querySelectorAll(".states-list  ");

    for (let item of liItems) {
      item.addEventListener("click", handleClose);
    }
  }, []);

  // useEffect(() => {
  //   const checkIfClickedOutside = (e) => {
  //     if (open && stateRef.current && !stateRef.current.contains(e.target)) {
  //       close();
  //     }
  //   };

  //   document.addEventListener("mousedown", checkIfClickedOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", checkIfClickedOutside);
  //   };
  // }, [open]);

  return (
    <Box className="backdrop-modal" onClick={handleClose}>
      <Box className="states-modal" ref={stateRef}>
        <Container maxWidth={"lg"} disableGutters>
          <Grid container disablePadding spacing={20} sx={{ pl: 4 }}>
            <Grid item xs={12} sm={6} lg={3} md={3}>
              <ul className="states-list">
                <li>Andaman and Nicobar </li>
                <li>Bihar</li>
                <li>Daman & Diu</li>
                <li>Haryana</li>
                <li>Andhra Pradesh</li>
                <li>Assam</li>
                <li>Arunachal Pradesh</li>
                <li>Chhattisgarh</li>
                <li>Goa</li>
                <li>Gujarat</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} md={3}>
              <ul className="states-list">
                <li>Andaman </li>
                <li>Bihar</li>
                <li>Daman & Diu</li>
                <li>Haryana</li>
                <li>Andhra Pradesh</li>
                <li>Assam</li>
                <li>Arunachal Pradesh</li>
                <li>Chhattisgarh</li>
                <li>Goa</li>
                <li>Gujarat</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} md={3}>
              <ul className="states-list">
                <li>Andaman </li>
                <li>Bihar</li>
                <li>Daman & Diu</li>
                <li>Haryana</li>
                <li>Andhra Pradesh</li>
                <li>Assam</li>
                <li>Arunachal Pradesh</li>
                <li>Chhattisgarh</li>
                <li>Goa</li>
                <li>Gujarat</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} md={3}>
              <ul className="states-list">
                <li>Andaman and Nicobar Islands</li>
                <li>Bihar</li>
                <li>Daman & Diu</li>
                <li>Haryana</li>
                <li>Andhra Pradesh</li>
                <li>Assam</li>
                <li>Arunachal Pradesh</li>
                <li>Chhattisgarh</li>
                <li>Goa</li>
                <li>Gujarat</li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default StatesModal;

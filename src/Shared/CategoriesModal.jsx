import React, { useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";

const CategoriesModal = (props) => {
  const handleClose = () => {
    props.close();
  };
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <Box className="modal-categories">
      {" "}
      <Typography
        disablePadding
        className="text-btn"
        onClick={handleClose}
        disableRipple
      >
        Outcomes
      </Typography>
      <Divider />
      <Typography className="text-btn" onClick={handleClose} disableRipple>
        Effective Classroom transacion (ECT)
      </Typography>
      <Divider />
      <Typography className="text-btn" onClick={handleClose} disableRipple>
        Infrastructure, facilities, Student Entitlements (IF & SE)
      </Typography>
      <Divider />
      <Typography className="text-btn" onClick={handleClose} disableRipple>
        School Safely and Child Protection (SS & CP)
      </Typography>
      <Divider />
      <Typography className="text-btn" onClick={handleClose} disableRipple>
        Digital Learning (DL)
      </Typography>
      <Divider />
      <Typography className="text-btn" onClick={handleClose} disableRipple>
        Governance Processes(GP)
      </Typography>
    </Box>
  );
};

export default CategoriesModal;

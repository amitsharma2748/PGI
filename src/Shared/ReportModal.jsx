import { Box, Divider, Menu, MenuItem, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "../styles/component/StatesModal.scss";

const ReportModal = (props) => {
  const handleClose = () => {
    props.close();
  };
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <Box className="modal-report">
      {" "}
      <Typography
        disablePadding
        className="text-btn"
        onClick={handleClose}
        disableRipple
      >
        PGI-D-2018-19 & 2019-20 ENGLISH
      </Typography>
      <Divider />
      <Typography className="text-btn" onClick={handleClose} disableRipple>
        PGI-D-2018-19 & 2019-20 HINDI
      </Typography>
    </Box>
  );
};

export default ReportModal;
